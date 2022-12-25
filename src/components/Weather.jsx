import React from "react";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardHeader,
	Box,
	CircularProgress,
} from "@mui/material";

import { apiKey, organizeAPIData } from "../utils";

import { useQuery } from "react-query";

let location = "Slemani";

// Weather display (3 Days)

export function Weather() {
	const { isLoading, error, data } = useQuery("forecast", () =>
		fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`
		)
			.then((res) => res.json())
			.then((data) => organizeAPIData(data))
	);

	// Loading

	if (isLoading)
		return (
			<Box
				sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
			>
				<h4>Loading data...</h4>
				<CircularProgress />
			</Box>
		);

	// Error

	if (error)
		return (
			<Box
				sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
			>
				<h4>Data could not be fetched!</h4>
				<p>{error}</p>
			</Box>
		);

	// Default

	return (
		<Grid container spacing={2} sx={{ width: "100%" }}>
			<Grid item xs={12} sm={6} md={4}>
				<Day day="Today" {...data.weather[0]}></Day>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<Day day="Tomorrow" {...data.weather[1]}></Day>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<Day day="Overmorrow" {...data.weather[2]}></Day>
			</Grid>
		</Grid>
	);
}

// Component for each day

function Day(props) {
	return (
		<Card>
			<CardHeader
				title={props.day || "Day Unknown"}
				subheader={
					props.date ? `Date: ${props.date.slice(5, 10)}` : "Date Unknown"
				}
			></CardHeader>
			<CardMedia
				sx={{ height: "12rem" }}
				image={props.weatherIcon || "#"}
				title="Weather Icon"
			/>
			<CardContent>
				<Typography variant="h5" component="div">
					{props.weatherStatus || "Weather Unknown"}
				</Typography>
				<Typography variant="body" color="text.secondary">
					{`Temperature: ${props.avgTemperature}℃` || "Temperature Unknown"}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{`Chance of rain: ${props.rainChance}%`}
				</Typography>
			</CardContent>
		</Card>
	);
}
