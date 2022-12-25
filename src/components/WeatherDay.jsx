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
				title={t(props.day)}
				subheader={`${t("Date")}: ${props.date.slice(5, 10)}`}
			></CardHeader>
			<CardMedia
				sx={{ height: "10rem" }}
				image={props.weatherIcon || "#"}
				title="Weather Icon"
			/>
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
