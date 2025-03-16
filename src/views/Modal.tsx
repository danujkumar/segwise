import React, { useState } from 'react'
import Enlarge from './Enlarge'
// import Expand from '../components/expand'

const MyIcon = ({ height = '18px', width = '18px', color = 'black' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke={color}
  >
    <path
      d="M3 21L21 3M3 21H9M3 21L3 15M21 3H15M21 3V9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

interface Props {
  data: {
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
    },
  };
}

const Modal: React.FC<Props> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [enlarge, setEnlarge] = useState(false)
  const closeEnlarge = (close: boolean) => {
    setEnlarge(close)
  };
  return (
    <>
      <div className="border-1 border-gray-200" style={styles.container}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            className="border-1"
            style={{
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',
              color: 'black',
              borderRadius: '5px',
              padding: '2px 6px',
              width: '80%',
              borderColor: '#C0E656',
            }}
          >
            <span
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'rgb(75, 85, 99)',
                marginRight: '0.2rem',
              }}
            >
              Id:
            </span>
            <p style={styles.textcontainer}>{data.creative_id}</p>
          </div>
          <button
            style={{
              cursor: 'pointer',
              backgroundColor: isHovered ? '#C0E656' : 'transparent',
              borderRadius: '10px',
              border: 'none',
              padding: '10px',
            }}
            onClick={() => setEnlarge(!enlarge)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <MyIcon />
          </button>
          <span
            style={{
              cursor: 'pointer',
              color: 'rgb(75, 85, 99)',
              fontSize: '20px',
            }}
          >
            x
          </span>
        </div>

        <div
          className="border-1 border-gray-200"
          style={{
            height: '60%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '5px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',
              color: 'black',
              borderRadius: '5px',
              padding: '2px 6px',
              width: '94%',
            }}
          >
            <span
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'rgb(75, 85, 99)',
                marginRight: '0.2rem',
              }}
            >
              Selected Cells:
            </span>
            <p style={styles.textcontainer}>{data.creative_name}</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',
              color: 'black',
              borderRadius: '5px',
              padding: '2px 6px',
              width: '94%',
            }}
          >
            <span
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'rgb(75, 85, 99)',
                marginRight: '0.2rem',
              }}
            >
              Tags:
            </span>
            <p style={styles.textcontainer}>
              {data.tags.concept}, {data.tags.atype}, {data.tags.alanguage}, {data.tags.cta},{' '}
              {data.tags.objects}, {data.tags.ctalanguage}, {data.tags.logopresent},{' '}
              {data.tags.cta_placement}, {data.tags.bgcolor}, {data.tags.bgsetting},{' '}
              {data.tags.ctabgcolor}
            </p>
          </div>
        </div>
      </div>
      {enlarge && <Enlarge data={data} onClose={closeEnlarge} />}
      </>
  )
}

export default Modal

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: '120px',
    width: '20vw',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: '0',
    right: '5px',
    zIndex: 1000,
    borderRadius: ' 10px 10px 0px 0px',
    padding: '10px 10px',
    // boxShadow: '0 0 2px rgba(0,0,0,0.5)',
    color: 'white',
    // overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  },
  textcontainer: {
    // background: 'green',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
    // padding: '5px',
    font: 'inter',
    fontSize: '16px',
    fontWeight: '400',
    color: '#4B5563',
  },
}