import React from "react";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardHeader,
} from "@mui/material";

export function Weather() {
	return (
		<Grid container spacing={2} sx={{ width: "100%" }}>
			<Grid item xs={12} sm={6} md={4}>
				<WeatherDay day="Today"></WeatherDay>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<WeatherDay day="Tomorrow"></WeatherDay>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<WeatherDay day="Overmorrow"></WeatherDay>
			</Grid>
		</Grid>
	);
}

function WeatherDay(props) {
	return (
		<Card>
			<CardHeader
				title={props.day || "Day Unknown"}
				subheader={props.date ? props.date.slice(5, 10) : "Date Unknown"}
			></CardHeader>
			<CardMedia
				sx={{ height: 140 }}
				image={props.image || "#"}
				title="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{props.status || "Weather Unknown"}
				</Typography>
				<Typography variant="body" color="text.secondary">
					{props.temp || "Temperature Unknown"}
				</Typography>
			</CardContent>
		</Card>
	);
}
