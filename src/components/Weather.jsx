import React from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import { WeatherDay } from "./WeatherDay";

import { fetchForecast } from "../fetch";
import { useQuery } from "react-query";

// store
import { useAtom } from "jotai";
import { locationAtom } from "../store";

export function Weather() {
	const colCenterStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	};

	const [location] = useAtom(locationAtom);

	// call lang change on startup and atom change
	const { isLoading, error, data } = useQuery(["forecast", location], () => {
		return fetchForecast(location);
	});

	// Render

	if (isLoading)
		return (
			<Box sx={colCenterStyle}>
				<p>Loading data...</p>
				<CircularProgress />
			</Box>
		);

	if (error)
		return (
			<Box sx={colCenterStyle}>
				<p>Data could not be fetched!</p>
				<p>{error}</p>
			</Box>
		);

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
