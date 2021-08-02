import React from "react";
import ReactDOM from "react-dom";
import { range } from "d3";
import { Face } from "./Face.js";

const array = range(5);

const App = () => array.map(() => (
	<>
		<Face 
			width={960}
			height={500}
			strokeWidth={20}
			eyeOffsetX={90}
			eyeOffsetY={100}
			eyeRadius={40 + Math.random() * 5}
			mouthWidth={20}
			mouthRadius={140}
		/>

		<Face 
			width={480}
			height={250}
			strokeWidth={10}
			eyeOffsetX={45}
			eyeOffsetY={50}
			eyeRadius={20}
			mouthWidth={10}
			mouthRadius={70}
		/>
	</>
));

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
