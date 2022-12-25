import { Box } from "@mui/material";
import { Search } from "./Search";

export function Header() {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<h2>Hawr</h2>
			<Search></Search>
		</Box>
	);
}
