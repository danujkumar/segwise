import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CardContent } from "@mui/material";

interface DataItem {
  name: string;
  value: number;
}

const data: DataItem[] = [
  { name: "Imp", value: 0 },
  { name: "Clicks", value: 0 }
];

const smalldata: DataItem[] = [
  { name: "IPM", value: 0 },
  { name: "CTR", value: 0 },
  { name: "Spend", value: 0 },
  { name: "CPM", value: 0 },
  { name: "CPC", value: 0 },
  { name: "CPI", value: 0 },
  { name: "Installs", value: 0 },
];

type NumProps = {
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

const BarChartComponent: React.FC<{ num_data: NumProps }> = ({num_data}) => {
  const [datas, setDatas] = useState(data)

  useEffect(() => {
    setDatas([
      { name: "Imp", value: num_data.impressions },
      { name: "Clicks", value: num_data.clicks },
      {name: "Installs", value: num_data.installs},
      {name: "Spends", value: num_data.spend}
    ]);
  }, []);
  return (
    // <Card sx={{ p: 2, borderRadius: "16px" }}>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={datas}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#C0E656" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
    // </Card>
  );
};

const SmallBarChartComponent: React.FC<{ num_data: NumProps }> = ({num_data}) => {
  const [datas, setDatas] = useState(smalldata)

  useEffect(() => {
    setDatas([
      { name: "IPM", value: num_data.ipm },
      { name: "CTR", value: num_data.ctr },
      { name: "Spend", value: num_data.spend },
      { name: "CPM", value: num_data.cpm },
      { name: "CPC", value: num_data.cpc },
      { name: "CPI", value: num_data.cpi },
      { name: "Installs", value: num_data.installs },
    ]);
  }, []);
  return (
    // <Card sx={{ p: 2, borderRadius: "16px" }}>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={datas}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#C0E656" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
    // </Card>
  );
};

interface DataProps {
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
}
const CtaComponent: React.FC<{ data: DataProps }> = ({ data }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} style={{ display: "flex", flexDirection: "row" }}>
          <span
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "rgb(75, 85, 99)",
              marginRight: "0.2rem",
            }}
          >
            {key.replace("_", " ")}:
          </span>
          <p style={{ color: "black" }}>
            {Array.isArray(value) ? value.join(", ") : value || "N/A"}
          </p>
        </div>
      ))}
    </div>
  );
};

type DataInfo = {
  creative_name: string;
  creative_id: string;
  country: string;
  ad_network: string;
  os: string;
  campaign: string;
  ad_group: string;
};
const OtherInfo: React.FC<{ data: DataInfo }> = ({ data }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} style={{ display: "flex", flexDirection: "row" }}>
          <span
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "rgb(75, 85, 99)",
              marginRight: "0.2rem",
            }}
          >
            {key.replace("_", " ")}:
          </span>
          <p style={{ color: "black" }}>
            {Array.isArray(value) ? value.join(", ") : value || "N/A"}
          </p>
        </div>
      ))}
    </div>
  );
};

interface Props {
  data: {
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
  };
  onClose: (close: boolean) => void;
}

function Enlarge({ data, onClose }: Readonly<Props>) {
  const [info, setInfo] = useState<DataInfo>({
    creative_name: data.creative_name,
    creative_id: data.creative_id,
    country: data.country,
    ad_network: data.ad_network,
    os: data.os,
    campaign: data.campaign,
    ad_group: data.ad_group,
  });

  useEffect(() => {
    setInfo({
      creative_name: data.creative_name,
      creative_id: data.creative_id,
      country: data.country,
      ad_network: data.ad_network,
      os: data.os,
      campaign: data.campaign,
      ad_group: data.ad_group,
    });
  }, []);

  return (
    <div
      className="border-1 border-gray-200"
      style={styles.container}
      onClick={() => {
        onClose(false);
      }}
    >
      <span
        style={{
          cursor: "pointer",
          color: "rgb(75, 85, 99)",
          fontSize: "20px",
          position: "absolute",
          right: "10px",
          top: "0px",
        }}
      >
        x
      </span>
      <div
        style={{
          height: "100%",
          // backgroundColor: 'red',
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "54%",
          borderRadius: "5px",
          borderWidth: "1px",
          borderColor: "#e5e7eb",
          padding: "10px",
        }}
      >
        <div
          style={{
            // backgroundColor: 'red',
            display: "flex",
            flexDirection: "row",
            borderWidth: "1px",
            borderColor: "#C0E656",
            width: "100%",
            height: "13%",
            borderRadius: "5px",
            alignItems: "center",
            padding: "5px 10px",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "rgb(75, 85, 99)",
              marginRight: "0.2rem",
            }}
          >
            Id:
          </span>
          <p style={styles.textcontainer}>{data.creative_id}</p>
        </div>
        <div
          style={{
            width: "100%",
            height: "83%",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              // backgroundColor: 'red',
              borderWidth: "1px",
              height: "100%",
              width: "50%",
              borderRadius: "5px",
              borderColor: "#e5e7eb",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#C0E656",
                marginRight: "0.2rem",
              }}
            >
              Tags :
            </span>
            <div>
              <CtaComponent data={data.tags} />
            </div>
          </div>
          <div
            style={{
              // borderWidth: '1px',
              height: "100%",
              width: "50%",
              borderRadius: "5px",
              borderColor: "#e5e7eb",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#C0E656",
                marginRight: "0.2rem",
              }}
            >
              Other Info :
            </span>
            <div>
              <OtherInfo data={info} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ overflow:'auto', marginLeft:"5px",  display: "flex", flexDirection: "column", width: "40vw", height: "100%" }}>
      <div
        style={{
          // backgroundColor: 'red',
          borderRadius: "5px",
          borderWidth: "1px",
          borderColor: "#e5e7eb",
          marginBottom:"5px"
        }}
      >
        <BarChartComponent num_data={data} />
      </div>
      <div
        style={{
          // backgroundColor: 'red',
          borderRadius: "5px",
          borderWidth: "1px",
          borderColor: "#e5e7eb"
        }}
      >
        <SmallBarChartComponent num_data={data} />
      </div>
      </div>
    </div>
  );
}

export default Enlarge;

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: "520px",
    width: "90vw",
    backgroundColor: "#fff",
    position: "absolute",
    top: "10%",
    right: "5%",
    bottom: "0",
    zIndex: 100,
    borderRadius: " 10px 10px 0px 0px",
    padding: "26px 32px 2px 32px",
    // boxShadow: '0 0 2px rgba(0,0,0,0.5)',
    color: "white",
    // overflow: 'hidden',
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  },
  textcontainer: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left",
    // padding: '5px',
    font: "inter",
    fontSize: "16px",
    fontWeight: "400",
    // color: '#4B5563',
    color: "black",
  },
};
