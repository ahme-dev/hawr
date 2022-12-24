import { Autocomplete, TextField } from "@mui/material";

export function Search() {
	return (
		<Autocomplete
			options={[{ label: "None" }]}
			renderInput={(params) => (
				<TextField variant="filled" {...params} label="Location" />
			)}
		/>
	);
}
