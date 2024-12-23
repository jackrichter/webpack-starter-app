import axios from "axios";

function generateJoke() {
	// return "I don't trust stairs. They are always up to something :)";
	const config = {
		headers: {
			Accept: "application/json"
		}
	};
	axios.get("https://icanhazdadjoke.com", config).then(response => {
		document.getElementById("joke").innerHTML = response.data.joke;
	});
}

export default generateJoke;
