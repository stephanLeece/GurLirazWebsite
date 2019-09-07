import { compose, withProps, } from "recompose";
import Home from "./Home";

const enhance = compose(
  withProps(({ homeScreenData }) => {
    return {
      imageUrls: homeScreenData.photos.map(photo => photo.file.url)
    };
  })
);

export default enhance(Home);
