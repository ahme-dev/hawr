import { Card } from "@mui/material";

export function Day(props) {
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
