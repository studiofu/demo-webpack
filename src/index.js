// default webpack take this file as the entry point

import App from "./App";
import style from "./main.css"

console.log(`this is entry point.`);

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

console.log(`test`);
