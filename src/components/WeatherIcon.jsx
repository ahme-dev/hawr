import { WiDayShowers, WiDaySunny, WiShowers, WiRain } from "react-icons/wi";
import { blueGrey } from "@mui/material/colors";

export function WeatherIcon({ status, image }) {
	const fullWidthHeight = {
		backgroundColor: blueGrey[900],
		borderRadius: "50%",
		padding: "3rem",
		margin: "0 2rem",
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
