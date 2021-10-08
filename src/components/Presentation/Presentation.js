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
import useData from "../../hooks/useData";

const Presentation = () => {
	const contents = useData("presentation");
	const [video, setVideo] = useState();
	useEffect(() => {
		const client = createClient(
			"563492ad6f917000010000018691fc1abc374881b7f2f1ee18081b4a"
		);
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
					<PresentationHeader>{contents.header}</PresentationHeader>
					<PresentationP>{contents.presentation}</PresentationP>
				</PresentationContent>
			</PresentationBg>
		</PresentationContainer>
	);
};

export default Presentation;