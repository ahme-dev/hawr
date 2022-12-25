import React from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import { WeatherDay } from "./WeatherDay";

import { apiKey, organizeAPIData } from "../utils";

import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";

let location = "Slemani";

// Weather display (3 Days)

export function Weather() {
	const { t, i18n } = useTranslation();

	// Query
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
				<p>Loading data...</p>
				<CircularProgress />
			</Box>
		);

	// Error

	if (error)
		return (
			<Box
				sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
			>
				<p>Data could not be fetched!</p>
				<p>{error}</p>
			</Box>
		);

	// Default

	return (
		<Grid container spacing={2} sx={{ width: "100%" }}>
			<Grid item xs={12} sm={6} md={4}>
				<WeatherDay {...data.weather[0]}></WeatherDay>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<WeatherDay {...data.weather[1]}></WeatherDay>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<WeatherDay {...data.weather[2]}></WeatherDay>
			</Grid>
		</Grid>
	);
}
