import {
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from "@mui/material";

import { useTranslation } from "react-i18next";
import { WeatherIcon } from "./WeatherIcon";

export function WeatherDay(props) {
	const { t } = useTranslation();

	return (
		<Card>
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
