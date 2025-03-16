interface CreateData {
    creative_name: string;
    creative_id: string;
    country: string;
    ad_network: string;
    os: string;
    campaign: string;
    ad_group: string;
    ipm: number;
    ctr: number;
    spend: number;
    impressions: number;
    clicks: number;
    cpm: number;
    cpc: number;
    cpi: number;
    installs: number;
    tags: {
        concept: string;
        atype: string;
        alanguage: string;
        cta: string;
        objects: string[];
        ctalanguage: string;
        logopresent: string;
        cta_placement: string;
        bgcolor: string;
        bgsetting: string;
        ctabgcolor: string;
    };
}


export function searchKeyword(data: CreateData[], keyword: string) {
    const result: { creative_id: string; found_in_keys: string[] }[] = [];

    // Convert the keyword to lowercase for case-insensitive search
    const lowerKeyword = keyword.toLowerCase();

    data.forEach((item) => {
        let foundKeys: string[] = [];

        // Helper function to search recursively
        function search(obj: any, path: string = "") {
            if (typeof obj === "string" && obj.toLowerCase().includes(lowerKeyword)) {
                foundKeys.push(path);
            } else if (Array.isArray(obj)) {
                obj.forEach((value, index) => search(value, `${path}[${index}]`));
            } else if (typeof obj === "object" && obj !== null) {
                Object.entries(obj).forEach(([key, value]) => search(value, path ? `${path}.${key}` : key));
            }
        }

        search(item);

        if (foundKeys.length > 0) {
            result.push({ creative_id: item.creative_id, found_in_keys: foundKeys });
        }
    });

    return result;
}

export function sortJSONByKey(
  data: CreateData[],
  sortKey: keyof CreateData,
  asd: boolean
) {
  return [...data].sort((a, b) => {
    const valueA = a[sortKey];
    const valueB = b[sortKey];

    let comparison = 0;

    if (typeof valueA === "string" && typeof valueB === "string") {
      comparison = valueA.localeCompare(valueB); // Alphabetical sorting
    } else if (typeof valueA === "number" && typeof valueB === "number") {
      comparison = valueA - valueB; // Numerical sorting
    }

    return asd ? comparison : -comparison; // Reverse sorting if descending
  });
}


type Operator =
  | "is"
  | "is not"
  | "contains"
  | "does not contain"
  | "less than"
  | "greater than"
  | "equal to";

type LogicalOperator = "AND" | "OR";

type FilterCondition = {
  key: string; 
  operator: Operator;
  value: string | number;
  logicald: LogicalOperator;
};

function getValueByPath(obj: any, path: string): any {
  return path.split(".").reduce((o, key) => (o ? o[key] : undefined), obj);
}

function checkCondition(value: any, condition: FilterCondition): boolean {
  const { operator, value: condValue } = condition;

  if (typeof value === "string") {
    switch (operator) {
      case "is": return value === condValue;
      case "is not": return value !== condValue;
      case "contains": return value.includes(condValue as string);
      case "does not contain": return !value.includes(condValue as string);
    }
  } else if (typeof value === "number") {
    switch (operator) {
      case "less than": return value < (condValue as number);
      case "greater than": return value > (condValue as number);
      case "equal to": return value === condValue;
    }
  }
  return false;
}

export function filterJson(data: CreateData[], conditions: FilterCondition[]) {
  const appliedColumns = [...new Set(conditions.map(c => c.key))];

  const filteredData = data
    .map(item => {
      let result = checkCondition(getValueByPath(item, conditions[0].key), conditions[0]);

      for (let i = 1; i < conditions.length; i++) {
        const conditionResult = checkCondition(getValueByPath(item, conditions[i].key), conditions[i]);

        if (conditions[i].logicald === "AND") {
          result = result && conditionResult;
        } else {
          result = result || conditionResult;
        }
      }

      if (result) {
        return {
          id: item.creative_id,
          appliedFilters: appliedColumns,
          data: item
        };
      }
      return null;
    })
    .filter(Boolean);

  return filteredData;
}