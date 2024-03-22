import './style.css'
import {TextInterface} from './textInterface';

// Create a new "Text Interface"
let ti = new TextInterface();
ti.output("What is your name?");
let name = await ti.readText()
ti.output("Hello, "+name);
ti.output("Here is a pretty mountain:");
ti.showImage("https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg");