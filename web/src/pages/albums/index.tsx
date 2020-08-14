import React, { useState, useEffect } from "react";

import { ThemeProvider } from "@material-ui/core";
import theme2 from "../../assets/theme/themeconfig";
import axios from "axios";

const api = axios.create({
  baseURL: `https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api`,
});

const Albums = () => {
  const [data, setData]: any = useState([]); 

  useEffect(() => {
    api
      .get("/artists/5/albums")
      .then((res) => {
        console.log("Albums: ", res);
        setData(res.data.data);
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);

  return (
    <>
      <br />
      <br />
      <ThemeProvider theme={theme2}>ALBUMES!</ThemeProvider>
    </>
  );
};

export default Albums;
