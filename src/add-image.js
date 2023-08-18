import Christmas from "./christmas.jpg";
export const addImage = () => {
  const img = document.createElement("img");
  img.alt = "Christmas";
  img.width = 300;
  img.src = Christmas;
  const body = document.querySelector("body");
  body.appendChild(img);
};
