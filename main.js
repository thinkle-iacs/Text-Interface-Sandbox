import './style.css'
import {TextInterface} from './textInterface';


let app = document.querySelector('#app');
// Create a new "Text Interface"
let ti = new TextInterface(app, "Example Text Interface");
ti.output("What is your name?");
let name = await ti.readText()
await ti.output("Hello, "+name);
await ti.output("Here is a pretty mountain:");
await ti.showImage("https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg");
await ti.readText();
