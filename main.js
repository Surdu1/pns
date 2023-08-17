const panoramaImage = new PANOLENS.ImagePanorama("images/exterior1.jpg");
const imageContainer = document.querySelector(".image-360");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  controlBar: false,  
});
viewer.add(panoramaImage);

