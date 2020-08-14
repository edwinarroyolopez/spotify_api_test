import React, { useState, useEffect } from "react";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import { Button, Card } from "@material-ui/core";

import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    custom: {
      backgroundColor: "#151515",
    },
  })
);

const api = axios.create({
  baseURL: `https://i8rmpiaad2.execute-api.us-east-1.amazonaws.com/dev/api`,
});

const Artists = () => {
  const [artists, setArtists]: any = useState([]);

  useEffect(() => {
    api
      .get("/artists")
      .then((res) => {
        console.log("Artists: ", res);
        setArtists(res.data);
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);

  const classes = useStyles();
  console.log("artist: ", artists);
  const handledArtist = (artistId: any) => {
    console.log('artistId: ',artistId)
    
  };
  return (
    <>
      <Card className={classes.custom} elevation={3}>
        <div className="container-item" style={{ display: "flex" }}>
          {artists.length > 0
            ? artists.map((artist: { [key: string]: any }) => (
                <div className="item" key={`artist-${artist.id}`}>
                    <Avatar
                      alt={artist.name}
                      src={artist.image}
                      className={classes.large}
                      onClick={() => {
                        handledArtist(artist.id)
                      }}
                    />
                </div>
              ))
            : null}
        </div>
      </Card>
    </>
  );
};

export default Artists;

/*
    id: 1
    name: "Arctic Monkeys"
    image: "https://i.scdn.co/image/ed0552e9746ed2bbf04ae4bcb5525700ca31522d"
    genres: (5) ["garage_rock", "modern_rock", "permanent_wave", "rock", "sheffield_indie"]
    popularity: "83.0"
    spotify_url: "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH"
    spotify_id: "7Ln80lUS6He07XvHI8qqHH"
    created_at: "2019-10-23T13:49:20.323Z"
    updated_at: "2019-10-23T13:49:20.323Z"
  
  */
