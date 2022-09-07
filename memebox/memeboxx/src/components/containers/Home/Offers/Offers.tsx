import React from "react";
import "./Offers.scss";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import CartoonImg from "../../../../assets/image/CartoonImg.png";
import { Cartoon_Card_Array } from "../../../../constant/Variables";
import Card from "@material-ui/core/Card";
import King from "../../../../assets/image/King.png";
import { CardMedia } from "@material-ui/core";

const Offers = () => {
  return (

    <div className="card-container">
      {Cartoon_Card_Array.map((e: any, index: number) => {
        return (
          <div key={index}>
            <div className="card card-1">
              <div className="card-img"></div>
              <a href="" className="card-link">
                <div className="card-img-hovered"><img src={e.url} /></div>
              </a>
              <div className="card-info">
                
                <p className="card-title">
                {e.about}
                </p>
                <p className="card-discription">{e.about}</p>
                <div className="card-creator">
                 <a href="">$120(starting at $25)</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Offers;
