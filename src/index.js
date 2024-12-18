import generateJoke from "./generateJoke";
import { v4 as uuidv4 } from "uuid";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

const laughImg = document.getElementById("laughImg");
laughImg.src = laughing;

console.log(generateJoke());
console.log(uuidv4());
