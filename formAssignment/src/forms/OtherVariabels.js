import { useState, useEffect } from "react";
import axios from "axios";
const OtherDetails = () => {
  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    // console.log(res.data);
    setIP(res.data.IPv4);

    let userAgentString = 
    navigator.userAgent;
    let chromeAgent = 
    userAgentString.indexOf("Chrome") > -1;
    console.log(chromeAgent)
   
    const Adres = {
      ip_address: ip,
      user_agent: navigator.userAgent,

    };
    await axios
      .post(
        `https://dev.api.klaim.yousted.org/api/visitor/store`,
        JSON.stringify(Adres)
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  
  useEffect(() => {
    //passing getData method to the lifecycle method
    // getData();
 
  }, []);

  return (
    <div className="App">
      <h2>Your IP Address is</h2>
      <h4>{ip}</h4>
    </div>
  );
};

export default OtherDetails;
