import React from "react";
import { Day } from "./Day";
import { Button, Box } from "@mui/material";

export function Weather() {
	return (
		<div>
			<Box style={{ display: "flex" }}>
				<Day></Day>
				<Day></Day>
				<Day></Day>
			</Box>
			<Button>Hello</Button>
		</div>
	);
}
