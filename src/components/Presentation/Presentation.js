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
					<PresentationHeader>i'm RodriGo Cabrera</PresentationHeader>
					<PresentationP>
						FRONTEND developer from buenos Aires, Argentina.
					</PresentationP>
				</PresentationContent>
			</PresentationBg>
		</PresentationContainer>
	);
};

export default Presentation;
