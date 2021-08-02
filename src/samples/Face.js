import React from "react";
import { BackgroundCircle } from "./BackgroundCircle.js";
import { Eyes } from "./Eyes.js"
import { Mouth } from "./Mouth.js"
import { FaceContainer } from "./FaceContainer.js";

export const Face = ({
	width,
	height,
	strokeWidth,
	eyeOffsetX,
	eyeOffsetY,
	eyeRadius,
	mouthWidth,
	mouthRadius
}) => {
	const centerX = width / 2;
	const centerY = height / 2;
	return (
		<FaceContainer
			width={width}
			height={height}
			centerX={centerX}
			centerY={centerY}
		>
			<BackgroundCircle
				radius={centerY - strokeWidth / 2}
				strokeWidth={strokeWidth}
			/>
			<Eyes
				eyeOffsetX={eyeOffsetX}
				eyeOffsetY={eyeOffsetY}
				eyeRadius={eyeRadius}
			/>
			<Mouth
				mouthRadius={mouthRadius}
				mouthWidth={mouthWidth}
			/>
		</FaceContainer>
	)
};
