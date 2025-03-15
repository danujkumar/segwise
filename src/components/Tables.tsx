import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {data} from '../constants/constants';
import { searchKeyword, sortJSONByKey } from '../operations';

function createData(
  creative_name: string,
  creative_id:string,
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
    concept: string,
    atype: string,
    alanguage: string,
    cta: string,
    objects: string[],
    ctalanguage: string,
    logopresent: string,
    cta_placement: string,
    bgcolor: string,
    bgsetting: string,
    ctabgcolor: string,
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

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setOpen(!open)
              console.log(searchKeyword(data, "Play now"))
              console.log(sortJSONByKey(data, "ipm"))
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.creative_name}</TableCell>
        <TableCell align="right">{row.creative_id}</TableCell>
        <TableCell align="right">{row.country}</TableCell>
        <TableCell align="right">{row.ad_network}</TableCell>
        <TableCell align="right">{row.os}</TableCell>
        <TableCell align="right">{row.campaign}</TableCell>
        <TableCell align="right">{row.ad_group}</TableCell>
        <TableCell align="right">{row.ipm}</TableCell>
        <TableCell align="right">{row.ctr}</TableCell>
        <TableCell align="right">{row.spend}</TableCell>
        <TableCell align="right">{row.impressions}</TableCell>
        <TableCell align="right">{row.clicks}</TableCell>
        <TableCell align="right">{row.cpm}</TableCell>
        <TableCell align="right">{row.cpc}</TableCell>
        <TableCell align="right">{row.cpi}</TableCell>
        <TableCell align="right">{row.installs}</TableCell>
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
                      <TableCell component="th" scope="row">{row.tags.concept}</TableCell>
                      <TableCell>{row.tags.atype}</TableCell>
                      <TableCell>{row.tags.alanguage}</TableCell>
                      <TableCell>{row.tags.cta}</TableCell>
                      <TableCell>
                        {row.tags.objects.map((object) => (
                          <p>{object},</p>
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
    </React.Fragment>
  );
}

export default function Tables() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Network</TableCell>
            <TableCell align="right">OS</TableCell>
            <TableCell align="right">Campaign</TableCell>
            <TableCell align="right">Group</TableCell>
            <TableCell align="right">IPM</TableCell>
            <TableCell align="right">CTR</TableCell>
            <TableCell align="right">Spend</TableCell>
            <TableCell align="right">Impressions</TableCell>
            <TableCell align="right">Clicks</TableCell>
            <TableCell align="right">CPM</TableCell>
            <TableCell align="right">Cost per click</TableCell>
            <TableCell align="right">Cost per install</TableCell>
            <TableCell align="right">Installs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <Row key={row.creative_id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
