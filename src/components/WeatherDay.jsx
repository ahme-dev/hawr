import {
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from "@mui/material";

import { useTranslation } from "react-i18next";

export function WeatherDay(props) {
	const { t } = useTranslation();

	return (
		<Card>
			<CardHeader
				title={t(props.day) || t("Day Unknown")}
				subheader={
					props.date
						? `${t("Date")}: ${props.date.slice(5, 10)}`
						: t("Date Unknown")
				}
			></CardHeader>
			<CardMedia
				sx={{ height: "12rem" }}
				image={props.weatherIcon || "#"}
				title="Weather Icon"
			/>
			<CardContent>
				<Typography variant="h5" component="div">
					{t(props.weatherStatus) || t("Weather Unknown")}
				</Typography>
				<Typography variant="body" color="text.secondary">
					{`${t("Temperature")}: ${props.avgTemperature}℃` ||
						"Temperature Unknown"}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{`${t("Chance of rain")}: ${props.rainChance}%`}
				</Typography>
			</CardContent>
		</Card>
	);
}
