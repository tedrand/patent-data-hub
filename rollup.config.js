import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

export default {
	input: "src/index.js",
	output: {
		file: "dist/bundle.js",
		format: "iife",
		sourcemap: true,
	},
	plugins: [
		nodeResolve({
			extensions: [".js"],
		}),
		replace({
			'process.env.NODE_ENV': JSON.stringify('development'),
			preventAssignment: true,
		}),
		babel({
			presets: ["@babel/preset-react"],
			plugins: [["@babel/plugin-transform-runtime", { useESModules: true}]],
			babelHelpers: "runtime",
		}),
		commonjs(),
		serve({
			open: true,
			verbose: true,
			contentBase: ["", "dist"],
			host: "localhost",
			port: 3000,
		}),
		livereload({ watch: "dist" }),
	]
}

