import React from "react";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardHeader,
} from "@mui/material";

import { useQuery } from "react-query";
let key = "74dd9c2c03d4438da6f184612221806";
let location = "Slemani";

export function Weather() {
	const { isLoading, error, data } = useQuery("repoData", () =>
		fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3&aqi=no&alerts=no`
		).then((res) => res.json())
	);

	if (isLoading) return "Loading data...";

	if (error) return "Could not load the data!";

	return (
		<Grid container spacing={2} sx={{ width: "100%" }}>
			<Grid item xs={12} sm={6} md={4}>
				<Day
					day="Today"
					status={data.forecast.forecastday[0].day.condition.text}
					image={data.forecast.forecastday[0].day.condition.icon}
				></Day>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<Day
					day="Tomorrow"
					status={data.forecast.forecastday[1].day.condition.text}
					image={data.forecast.forecastday[1].day.condition.icon}
				></Day>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<Day
					day="Overmorrow"
					status={data.forecast.forecastday[2].day.condition.text}
					image={data.forecast.forecastday[2].day.condition.icon}
				></Day>
			</Grid>
		</Grid>
	);
}

function Day(props) {
	return (
		<Card>
			<CardHeader
				title={props.day || "Day Unknown"}
				subheader={props.date ? props.date.slice(5, 10) : "Date Unknown"}
			></CardHeader>
			<CardMedia
				sx={{ height: "12rem" }}
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
