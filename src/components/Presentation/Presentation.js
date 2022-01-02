import React, { useEffect, useState } from "react";
import {
  PresentationBg,
  PresentationContainer,
  VideoBg,
  PresentationContent,
  PresentationHeader,
  PresentationP,
} from "./Presentation.elements";
import { createClient } from "pexels";
import { FormattedMessage } from "react-intl";

const Presentation = () => {
  const [video, setVideo] = useState();
  useEffect(() => {
    const client = createClient(process.env.REACT_APP_PEXELS_APIKEY);
    client.videos
      .show({ id: 1730393 })
      .then((video) => setVideo(video.video_files[5].link))
      .catch((err) => console.log(err));
  }, []);

  return (
    <PresentationContainer id="presentation">
      <PresentationBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        <PresentationContent>
          <PresentationHeader>
            <FormattedMessage id="presentation-header" />
          </PresentationHeader>
          <PresentationP>
            <FormattedMessage id="presentation-p" />
          </PresentationP>
        </PresentationContent>
      </PresentationBg>
    </PresentationContainer>
  );
};

export default Presentation;
