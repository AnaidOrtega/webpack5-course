import "./heading.scss";

export class Heading {
  render() {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Webpack 5 Tutorial";
    const body = document.querySelector("body");
    body.append(h1);
  }
}
