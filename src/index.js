import { addImage } from "./add-image";
import { HelloWorldButton } from "./components/HelloWorldButton/hellow-world";
import { Heading } from "./components/heading/heading";

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();
heading.render();
addImage();
helloWorldButton.render();
