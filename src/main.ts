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
