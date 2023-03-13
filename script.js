//your JS code here. If required.
const images = [
  { url: "https://via.placeholder.com/150", alt: "Image 1" },
  { url: "https://via.placeholder.com/150", alt: "Image 2" },
  { url: "https://via.placeholder.com/150", alt: "Image 3" },
  { url: "https://via.placeholder.com/150", alt: "Image 4" }
];

function loadImage(image) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ img, alt: image.alt });
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image's URL: ${image.url}`));
    };
    img.src = image.url;
  });
}

function displayImages(images) {
  const output = document.getElementById("output");
  images.forEach(({ img, alt }) => {
    output.appendChild(img);
    const br = document.createElement("br");
    output.appendChild(br);
    const span = document.createElement("span");
    span.textContent = alt;
    output.appendChild(span);
    const hr = document.createElement("hr");
    output.appendChild(hr);
  });
}

const button = document.getElementById("download-images-button");
button.addEventListener("click", async () => {
  try {
    const promises = images.map(loadImage);
    const loadedImages = await Promise.all(promises);
    displayImages(loadedImages);
  } catch (error) {
    console.error(error);
  }
});

