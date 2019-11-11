import React from "react";
import { IonPage, IonBackButton } from "@ionic/react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import {YoutubePlayerWeb} from "capacitor-youtube-player";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
`;

const initializeYoutubeWeb = async () => {
  const options = {
    playerId: "youtube-player",
    playerSize: { width: 640, height: 360 },
    videoId: "hHZvUeAdzeI"
  };
  const result = await YoutubePlayerWeb.initialize(options);
  console.log("playerReady", result);
};

const destroyYoutubePlayerPluginWeb = async () => {
  const result = await YoutubePlayerWeb.destroy('youtube-player');
  console.log('destroyYoutubePlayer', result);
}

export const Video = () => {

  React.useEffect(() => {
      initializeYoutubeWeb();
  }, [])

  return (
    <IonPage>
      <AppBar position="static">
        <Toolbar>
          <IonBackButton defaultHref="/" />
          <Typography variant="h6">Video Shayari</Typography>
        </Toolbar>
      </AppBar>
      <Container>
      <Link to="/video">Open</Link>
        <div id="youtube-player"></div>
        <img height="340" src="https://img.youtube.com/vi/hHZvUeAdzeI/0.jpg" alt="main" />
      </Container>
    </IonPage>
  );
};
