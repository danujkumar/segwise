import React from "react";

function Modal() {
  return (
    <div className="border-1 border-gray-200" style={styles.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="border-1"
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            color: "black",
            borderRadius: "5px",
            padding: "2px 6px",
            width: "94%",
            borderColor: "#C0E656",
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
          <p style={styles.textcontainer}>120214081337200422</p>
        </div>
        <span
          style={{
            cursor: "pointer",
            color: "rgb(75, 85, 99)",
            fontSize: "20px",
          }}
        >
          x
        </span>
      </div>

      <div
        className="border-1 border-gray-200"
        style={{
          height: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            color: "black",
            borderRadius: "5px",
            padding: "2px 6px",
            width: "94%",
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
            Selected Cells:
          </span>
          <p style={styles.textcontainer}>New Creative 4</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            color: "black",
            borderRadius: "5px",
            padding: "2px 6px",
            width: "94%",
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
            Tags:
          </span>
          <p style={styles.textcontainer}>
            Audio-Type, Audio-Language, CTA, Objects
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: "120px",
    width: "20vw",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: "0",
    right: "5px",
    zIndex: 1000,
    borderRadius: " 10px 10px 0px 0px",
    padding: "10px 10px",
    // boxShadow: '0 0 2px rgba(0,0,0,0.5)',
    color: "white",
    // overflow: 'hidden',
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  },
  textcontainer: {
    // background: 'green',
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left",
    // padding: '5px',
    font: "inter",
    fontSize: "16px",
    fontWeight: "400",
    color: "#4B5563",
  },
};
