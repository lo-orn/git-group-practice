import "./style.css";

// MODELS
type GiphyResponse = {
  data: Gif[];
};

type Gif = {
  id: string;
  images: ImageSize[];
};

type ImageSize = {
  original: OriginalSize[];
};

type OriginalSize = {
  url: string;
};
//END MODELS
const getGiphy = async () => {
  const response = await fetch("https://api.giphy.com/v1/gifs/random?api_key=P97zFDhcpVpYhn8G9Z5UNOR69ORP0dJA");
  const data = await response.json();
  console.log(data);
};

function handleClick(): void {
  alert("Knappen klickades!");
}
const button = document.getElementById("button");

if (button instanceof HTMLButtonElement) {
  button.addEventListener("click", handleClick);
}

getGiphy();
