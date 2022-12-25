import { WiDayShowers, WiDaySunny, WiShowers, WiRain } from "react-icons/wi";
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

	if (status === "Sunny") return <WiDaySunny style={fullWidthHeight} />;
	if (status === "Heavy rain") return <WiRain style={fullWidthHeight} />;
	if (status === "Patchy rain") return <WiShowers style={fullWidthHeight} />;
	if (status === "Patchy rain possible")
		return <WiDayShowers style={fullWidthHeight} />;

	return <img src={image} />;
}
