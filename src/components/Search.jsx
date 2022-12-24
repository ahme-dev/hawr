import { Autocomplete, TextField } from "@mui/material";

export function SearchBar() {
	return (
		<Autocomplete
			options={[{ label: "None" }]}
			renderInput={(params) => <TextField {...params} label="Location" />}
		/>
	);
}
