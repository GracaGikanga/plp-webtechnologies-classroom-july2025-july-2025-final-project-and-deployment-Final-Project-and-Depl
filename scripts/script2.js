 // Women's sliders
 function createImageSlider(images, elementId) {
    let currentIndex = 0;
                            
    function showImage() {
    document.getElementById(elementId).src = images[currentIndex];
    }
                            
    function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
    }
                            
    function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
    }
                            
    showImage(); // display first image initially
                            
    return { nextImage, previousImage };
    }
    


 const dreSlider = createImageSlider(
    ["women/dre-2.jpeg", "women/dre-3.jpeg", "women/dre-4.jpeg", "women/dre-5.jpeg", "women/dre-6.jpeg", "women/dre-1.jpeg"],
    "dre-1"
);
document.getElementById("next-dre").onclick = dreSlider.nextImage;
document.getElementById("prev-dre").onclick = dreSlider.previousImage;

const topsSlider = createImageSlider(
    ["women/tops-2.jpeg", "women/tops-3.jpeg", "women/tops-4.jpeg", "women/tops-5.jpeg", "women/tops-1.jpeg"],
    "tops-1"
);
document.getElementById("next-tops").onclick = topsSlider.nextImage;
document.getElementById("prev-tops").onclick = topsSlider.previousImage;

const bottomsSlider = createImageSlider(
    ["women/bottoms-2.jpeg", "women/bottoms-3.jpeg", "women/bottoms-4.jpeg", "women/bottoms-5.jpeg", "women/bottoms-6.jpeg", "women/bottoms-1.jpeg"],
    "bottoms-1"
);
document.getElementById("next-bottoms").onclick = bottomsSlider.nextImage;
document.getElementById("prev-bottoms").onclick = bottomsSlider.previousImage;

const shoesSlider = createImageSlider(
    ["women/shoes-2.jpeg", "women/shoes-3.jpeg", "women/shoes-4.jpeg", "women/shoes-5.jpeg", "women/shoes-6.jpeg", "women/shoes-7.jpeg", "women/shoes-8.jpeg", "women/shoes-1.jpeg"],
    "shoes-1"
);
document.getElementById("next-shoes").onclick = shoesSlider.nextImage;
document.getElementById("prev-shoes").onclick = shoesSlider.previousImage;

const jewSlider = createImageSlider(
    ["women/jew-2.jpeg", "women/jew-3.jpeg", "women/jew-4.jpeg", "women/jew-5.jpeg", "women/jew-1.jpeg"],
    "jew-1"
);
document.getElementById("next-jew").onclick = jewSlider.nextImage;
document.getElementById("prev-jew").onclick = jewSlider.previousImage;
