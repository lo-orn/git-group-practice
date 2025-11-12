import './style.css'

// MODELS
type GiphyResponse = {
  data: Gif;
};

type Gif = {
  id: string;
  images: ImageSize;
};

type ImageSize = {
  original: OriginalSize;
};

type OriginalSize = {
  url: string;
};
//END MODELS

//FETCH


const getGiphy = async () => {
  const response = await fetch("https://api.giphy.com/v1/gifs/random?api_key=P97zFDhcpVpYhn8G9Z5UNOR69ORP0dJA");
  const data: GiphyResponse = await response.json();

  console.log(data)

const img = document.createElement("img");
img.src = data.data.images.original.url
app.appendChild(img)




};


function handleClick(): void {
  window.location.reload();
}
const button = document.getElementById("button");

if (button instanceof HTMLButtonElement) {
  button.addEventListener("click", handleClick);
}

getGiphy();