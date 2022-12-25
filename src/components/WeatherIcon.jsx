import {
	WiDayShowers,
	WiDaySunny,
	WiRain,
	WiDayCloudy,
	WiCloudy,
	WiCloudUp,
	WiDayRain,
	WiRaindrops,
	WiRainMix,
	WiDaySnow,
	WiSnow,
	WiSnowWind,
	WiFog,
	WiShowers,
} from "react-icons/wi";
import { blueGrey } from "@mui/material/colors";

import { useMediaQuery } from "@mui/material";

// store
import { darkModeAtom } from "../store";
import { useAtom } from "jotai";

export function WeatherIcon({ status, image }) {
	const [darkMode] = useAtom(darkModeAtom);
	const largeScreen = useMediaQuery(`(min-width:600px)`);

	const fullWidthHeight = {
		backgroundColor: darkMode ? blueGrey[900] : blueGrey[100],
		borderRadius: "50%",
		padding: "2rem",
		margin: largeScreen ? "0 4rem" : "0 1rem",
		width: "100%",
		height: "100%",
	};

	switch (status) {
		case "Sunny":
			return <WiDaySunny style={fullWidthHeight} />;
		case "Partly cloudy":
			return <WiDayCloudy style={fullWidthHeight} />;
		case "Cloudy":
			return <WiCloudUp style={fullWidthHeight} />;
		case "Overcast":
			return <WiCloudy style={fullWidthHeight} />;
		case "Patchy rain possible":
			return <WiDayShowers style={fullWidthHeight} />;
		case "Patchy light rain":
			return <WiDayShowers style={fullWidthHeight} />;
		case "Patchy rain":
			return <WiShowers style={fullWidthHeight} />;
		case "light rain":
			return <WiShowers style={fullWidthHeight} />;
		case "Moderate rain at times":
			return <WiRain style={fullWidthHeight} />;
		case "Moderate rain":
			return <WiRain style={fullWidthHeight} />;
		case "Heavy rain at times":
			return <WiRainMix style={fullWidthHeight} />;
		case "Heavy rain":
			return <WiRainMix style={fullWidthHeight} />;
		case "Patchy light snow":
			return <WiDaySnow style={fullWidthHeight} />;
		case "Light snow":
			return <WiDaySnow style={fullWidthHeight} />;
		case "Patchy moderate snow":
			return <WiSnow style={fullWidthHeight} />;
		case "Moderate snow":
			return <WiSnow style={fullWidthHeight} />;
		case "Patchy heavy snow":
			return <WiSnowWind style={fullWidthHeight} />;
		case "Heavy snow":
			return <WiSnowWind style={fullWidthHeight} />;
		case "Mist":
			return <WiFog style={fullWidthHeight} />;
		default:
			return <img src={image} />;
	}
}
