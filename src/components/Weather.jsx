import React from "react";
import { Grid, Card } from "@mui/material";

export function Weather() {
	return (
		<Grid container spacing={2} sx={{ width: "100%" }}>
			<Grid item xs={12} sm={6} md={4}>
				<WeatherDay day="today"></WeatherDay>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<WeatherDay day="tomorrow"></WeatherDay>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<WeatherDay day="overmorrow"></WeatherDay>
			</Grid>
		</Grid>
	);
}

function WeatherDay(props) {
	return (
		<Card>
			<div>
				<img src={props.image || "#"}></img>
			</div>

			<div>
				<h1>{props.status || "?"}</h1>
				<h3>{props.temp || "?"}</h3>
				<h2>{props.day || "?"}</h2>
				<p>{props.date ? props.date.slice(5, 10) : "?"}</p>
			</div>
		</Card>
	);
}
