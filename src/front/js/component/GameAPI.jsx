import React, { useEffect, useState } from "react";


import axios from "axios";
/*function API_Call() {
  const URL = `https://api.igdb.com/v4`;
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        console.log(json);
      });
    };
    fetchData();
  }, []);
}
function GameData() {
  var axios = require("axios");
  var data = "fields name;";

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://cors-anywhere.herokuapp.com/api.igdb.com/v4/games/",
    headers: {
      "Client-ID": "l9z8jtrdbnyiypji85ggptiealo4em",
      Authorization: "Bearer x50se2cz9yll43t0e9gtt52aqvx2nr",
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
export default GameData;

/*{
  "access_token": "wx9uuhwrxkp5nh6jso5m7cl08t9fd0",
  "expires_in": 5071429,
  "token_type": "bearer"
}*/

//API GatewayDNS : https://7kui6kopu9.execute-api.us-west-2.amazonaws.com/production
//API GatewayID: 7kui6kopu9
