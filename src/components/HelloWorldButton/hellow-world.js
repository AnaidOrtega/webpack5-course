import "./hello-world-button.scss";

export class HelloWorldButton {
  buttonCssClass = "hello-world-button";
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello World";
    button.classList.add(this.buttonCssClass);
    button.onclick = () => {
      const p = document.createElement("p");
      p.innerHTML = "Hellow World";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    };
    const body = document.querySelector("body");
    body.appendChild(button);
  }
}
