import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { data } from "../constants/constants";
import { searchKeyword, sortJSONByKey } from "../operations";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Collapse, IconButton, Typography } from "@mui/material";
import { useState } from "react";

const formatValue = (value: string | number): string => {
  if (typeof value === "number") {
    return value.toFixed(3); // Round to 3 decimal places
  }
  return value.length > 5 ? value.substring(0, 5) + "..." : value; // Shorten text
};

function createData(
  creative_name: string,
  creative_id: string,
  country: string,
  ad_network: string,
  os: string,
  campaign: string,
  ad_group: string,
  ipm: number,
  ctr: number,
  spend: number,
  impressions: number,
  clicks: number,
  cpm: number,
  cpc: number,
  cpi: number,
  installs: number,
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
  }
) {
  return {
    creative_name,
    creative_id,
    country,
    ad_network,
    os,
    campaign,
    ad_group,
    ipm,
    ctr,
    spend,
    impressions,
    clicks,
    cpm,
    cpc,
    cpi,
    installs,
    tags,
  };
}

function Row(props: Readonly<{ row: ReturnType<typeof createData> }>) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("#FFFFFF");
  return (
    <>
      <TableRow
        style={{ backgroundColor: color }}
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
        >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setOpen(!open);
              console.log(searchKeyword(data, "Play now"));
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
          component="th"
          scope="row"
        >
          {formatValue(row.creative_name)}
        </TableCell>
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
          align="center"
        >
          {formatValue(row.creative_id)}
        </TableCell>
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
          align="center"
        >
          {formatValue(row.country)}
        </TableCell>
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
          align="center"
        >
          {formatValue(row.ad_network)}
        </TableCell>
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
          align="center"
        >
          {row.os}
        </TableCell>
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
          align="center"
        >
          {formatValue(row.campaign)}
        </TableCell>
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
          align="center"
        >
          {formatValue(row.ad_group)}
        </TableCell>
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
          align="center"
        >
          {formatValue(row.ipm)}
        </TableCell>
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
          align="center"
        >
          {formatValue(row.ctr)}
        </TableCell>
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
          align="center"
        >
          {formatValue(row.spend)}
        </TableCell>
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
          align="center"
        >
          {formatValue(row.impressions)}
        </TableCell>
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
          align="center"
        >
          {formatValue(row.clicks)}
        </TableCell>
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
          align="center"
        >
          {formatValue(row.cpm)}
        </TableCell>
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
          align="center"
        >
          {formatValue(row.cpc)}
        </TableCell>
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
          align="center"
        >
          {formatValue(row.cpi)}
        </TableCell>
        <TableCell
          onClick={() => { 
            color === "#E3FA99" ? setColor("#FFFFFF") : setColor("#E3FA99");
          }}
          
          align="center"
        >
          {formatValue(row.installs)}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Tags
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Concept</TableCell>
                    <TableCell>Audio-Type</TableCell>
                    <TableCell>Audio-Language</TableCell>
                    <TableCell>CTA</TableCell>
                    <TableCell>Objects</TableCell>
                    <TableCell>Language</TableCell>
                    <TableCell>Logo present</TableCell>
                    <TableCell>CTA Placement</TableCell>
                    <TableCell>Background Color</TableCell>
                    <TableCell>Background setting</TableCell>
                    <TableCell>CTA background color</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {row.tags.concept}
                    </TableCell>
                    <TableCell>{row.tags.atype}</TableCell>
                    <TableCell>{row.tags.alanguage}</TableCell>
                    <TableCell>{row.tags.cta}</TableCell>
                    <TableCell>
                      {row.tags.objects.map((object) => (
                        <p key={row.creative_id}>{object},</p>
                      ))}
                    </TableCell>
                    <TableCell>{row.tags.ctalanguage}</TableCell>
                    <TableCell>{row.tags.logopresent}</TableCell>
                    <TableCell>{row.tags.cta_placement}</TableCell>
                    <TableCell>{row.tags.bgcolor}</TableCell>
                    <TableCell>{row.tags.bgsetting}</TableCell>
                    <TableCell>{row.tags.ctabgcolor}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function Tables() {
  const [sortData, setSortData] = useState(data);
  return (
    <div className="flex justify-center mt-5">
      <TableContainer
        style={{
          width: "93%",
          borderColor: "#F6FDED",
          borderWidth: "1px",
          height: "68vh",
          
        }}
        component={Paper}
      >
        <Table style={{cursor:'default'}} aria-label="collapsible table">
          <TableHead sx={{
            backgroundColor: "#F6FDED",
            color: "#4B5563",
            fontWeight: "bold",
            fontSize: "16px",
            position: "sticky",
            top: 0,
            zIndex: 15
          }} >
            <TableRow style={{border:"3px"}}>
              <TableCell />
              <TableCell
                onClick={() => {
                  setSortData(sortJSONByKey(data, "creative_name"));
                }}
                style={{fontWeight:'bold'}}
              >
                Name
              </TableCell>
              <TableCell
                onClick={() => {
                  setSortData(sortJSONByKey(data, "creative_id"));
                }}
                style={{fontWeight:'bold'}}
                align="center"
              >
                Id
              </TableCell>
              <TableCell
                onClick={() => {
                  setSortData(sortJSONByKey(data, "country"));
                }}
                align="center"
                style={{fontWeight:'bold'}}
              >
                Country
              </TableCell>
              <TableCell
                onClick={() => {
                  setSortData(sortJSONByKey(data, "ad_network"));
                }}
                align="center"
                style={{fontWeight:'bold'}}
              >
                Network
              </TableCell>
              <TableCell
                onClick={() => {
                  setSortData(sortJSONByKey(data, "os"));
                }}
                align="center"
                style={{fontWeight:'bold'}}
              >
                OS
              </TableCell>
              <TableCell
                onClick={() => {
                  setSortData(sortJSONByKey(data, "campaign"));
                }}
                align="center"
                style={{fontWeight:'bold'}}
              >
                Campaign
              </TableCell>
              <TableCell
                onClick={() => {
                  setSortData(sortJSONByKey(data, "ad_group"));
                }}
                align="center"
                style={{fontWeight:'bold'}}
              >
                Group
              </TableCell>
              <TableCell
                onClick={() => {
                  setSortData(sortJSONByKey(data, "ipm"));
                }}
                align="center"
                style={{fontWeight:'bold'}}
              >
                IPM
              </TableCell>
              <TableCell
                onClick={() => {
                  setSortData(sortJSONByKey(data, "ctr"));
                }}
                align="center"
                style={{fontWeight:'bold'}}
              >
                CTR
              </TableCell>
              <TableCell
                onClick={() => {
                  setSortData(sortJSONByKey(data, "spend"));
                }}
                align="center"
                style={{fontWeight:'bold'}}
              >
                Spend
              </TableCell>
              <TableCell
                onClick={() => {
                  setSortData(sortJSONByKey(data, "impressions"));
                }}
                align="center"
                style={{fontWeight:'bold'}}
              >
                Impressions
              </TableCell>
              <TableCell
                onClick={() => {
                  setSortData(sortJSONByKey(data, "clicks"));
                }}
                align="center"
                style={{fontWeight:'bold'}}
              >
                Clicks
              </TableCell>
              <TableCell
                onClick={() => {
                  setSortData(sortJSONByKey(data, "cpm"));
                }}
                align="center"
                style={{fontWeight:'bold'}}
              >
                CPM
              </TableCell>
              <TableCell
                onClick={() => {
                  setSortData(sortJSONByKey(data, "cpc"));
                }}
                align="center"
                style={{fontWeight:'bold'}}
              >
                CPC
              </TableCell>
              <TableCell
                onClick={() => {
                  setSortData(sortJSONByKey(data, "cpi"));
                }}
                align="center"
                style={{fontWeight:'bold'}}
              >
                CPI
              </TableCell>
              <TableCell
                onClick={() => {
                  setSortData(sortJSONByKey(data, "installs"));
                }}
                align="center"
                style={{fontWeight:'bold'}}
              >
                Installs
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortData.map((row) => (
              <Row key={row.creative_id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
