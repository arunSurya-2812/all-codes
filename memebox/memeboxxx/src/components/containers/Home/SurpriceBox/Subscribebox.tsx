import { useSelector } from "react-redux";
import { IRootState } from "../../../../redux/reducer/CombineReducer";

import { useNavigate } from "react-router-dom";
import "./Subscribe.scss";

import useWindow from "../../../../hook/useWindow";
export default function Subscribebox() {
  let navigate = useNavigate();
  const { width } = useWindow();
  const { profileData } = useSelector((state: IRootState) => state);
  const boxdata = profileData && profileData.boxsubscribe;

  const BoxValue = Object.values(boxdata);
  const setBoxdataLocalStorge = (e: any) => {
    localStorage.setItem("box", JSON.stringify(e));
    navigate("/address");
  };

  return (
    <>
      <div>
        {width > 800
          ? BoxValue.map((e: any, index: any) => {
              // console.log(index,"index")
              if (index % 2 === 0) {
                return (
                  <div
                    key={index}
                    className="Box-Layout"
                    onClick={() => setBoxdataLocalStorge(e)}
                  >
                    <div className="Box-content-1">
                      <img src={e.imgurl || null} alt="surpricebox img" />
                    </div>

                    <div className="Box-content-1">
                      <p>
                        price : <h1>${e?.boxprice || 0}</h1>
                        {"(inclusive all tax)"}
                      </p>

                      <p>BoxName:{e.boxname || "MeMeSurpriceBox"}</p>

                      <h3>What is a {e.boxname || "MeMeSurpriceBox"} </h3>
                      <p>{e?.description || " MeMeSurpriceBox description"}</p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="Box-Layout"
                    onClick={() => setBoxdataLocalStorge(e)}
                  >
                    <div className="Box-content-1">
                      <p>
                        price : <h1>${e?.boxprice || 0}</h1>
                        {"(inclusive all tax)"}
                      </p>

                      <p>BoxName:{e?.boxname || "MeMeSurpriceBox"}</p>

                      <h3>What is a {e?.boxname || "MeMeSurpriceBox"} </h3>
                      <p>{e?.description || " MeMeSurpriceBox description"}</p>
                    </div>
                    <div className="Box-content-1">
                      <img src={e?.imgurl || null} alt="surpricebox img" />
                    </div>
                  </div>
                );
              }
            })
          : BoxValue.map((e: any, index: number) => {
              return (
                <div
                  key={index}
                  className="Box-Layout"
                  onClick={() => setBoxdataLocalStorge(e)}
                >
                  <div className="Box-content-1">
                    <img src={e.imgurl || null} alt="surpricebox img" />
                  </div>

                  <div className="Box-content-1">
                    <p>
                      price : <h1>${e?.boxprice || 0}</h1>
                      {"(inclusive all tax)"}
                    </p>

                    <p>BoxName:{e.boxname || "MeMeSurpriceBox"}</p>

                    <h3>What is a {e.boxname || "MeMeSurpriceBox"} </h3>
                    <p>{e?.description || " MeMeSurpriceBox description"}</p>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
}
