import {
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

import { useTranslation } from "react-i18next";
import { WeatherIcon } from "./WeatherIcon";

// store
import { useAtom } from "jotai";
import { darkModeAtom } from "../store";

export function WeatherDay(props) {
	const { t } = useTranslation();
	const [darkMode] = useAtom(darkModeAtom);

	return (
		<Card style={{ backgroundColor: darkMode ? grey[900] : grey[200] }}>
			{/* Header */}
			<CardHeader
				title={t(props.day)}
				subheader={`${t("Date")}: ${props.date.slice(5, 10)}`}
			></CardHeader>

			{/* Icon */}
			<CardMedia
				sx={{ display: "flex", alignContent: "center" }}
				title="Weather Icon"
			>
				<WeatherIcon
					status={props.weatherStatus}
					image={props.weatherIcon}
				></WeatherIcon>
			</CardMedia>

			{/* Content */}
			<CardContent>
				<Typography variant="h5" component="div">
					{t(props.weatherStatus)}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{`${t("Temperature")}: ${props.avgTemperature}℃`}
				</Typography>
				<Typography variant="body" color="text.secondary">
					{`${t("Chance of rain")}: ${props.rainChance}%`}
				</Typography>
			</CardContent>
		</Card>
	);
}
