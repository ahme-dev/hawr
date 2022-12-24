import React from "react";
import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Weather } from "./components/Weather";

export default function App() {
	return (
		<ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
			<Container style={{ display: "flex" }}>
				<CssBaseline />
				<Weather></Weather>
			</Container>
		</ThemeProvider>
	);
}
