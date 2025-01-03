import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <img src="openai.png" width={"30px"} height={"30px"} className="image-inverted"/>
      </Link>
      <Typography sx={{diaplay:{ms:"block",sm:"none", sx:"none"}, mr:"auto", fontWeight:"800", textShadow:"2px 2px 20px #000"}}
        >
            <span style={{fontSize:"20px"}}>MERN</span>-GPT
        </Typography>
    </div>
  );
};

export default Logo;
