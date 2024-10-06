const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];
// unsplash api
const count = 10;
const apiKey = "uToSPDlPAbSNbsNvbUBJdWO_MS7IV5wVzyDgJ-o1oJM";
const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=${count}`;

function setAttribute(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
// create elements for links and photos && add to dom
function diplayPhotos() {
  // run function for each object in photos array
  photosArray.forEach((photo) => {
    //create <a></a> to link to unsplash
    const item = document.createElement("a");
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("taeget", "_blank");
    setAttribute(item, {
      href: photo.links.html,
      taeget: "_blank",
    });
    //create </img> for photos
    const img = document.createElement("img");
    // item.setAttribute("src", photo.urls.regular);
    // item.setAttribute("alt", photo.alt_description);
    // item.setAttribute("title", photo.alt_description);
    setAttribute(item, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    //put img inside <a></a> then put both inside imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//get photos from unsplash
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    diplayPhotos();
  } catch (error) {
    //catch error here
  }
}
// check to see if scrolling near bottom of page load more photos
window.addEventListener("scroll", () => {
  console.log("scroll");
});

getPhotos();
