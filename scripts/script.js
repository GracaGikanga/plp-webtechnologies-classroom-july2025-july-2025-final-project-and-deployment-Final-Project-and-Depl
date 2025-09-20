const text = document.getElementById("text");
const colors = ["red", "blue", "green", "purple", "orange", "pink"];

let i = 0;

setInterval(() => {
  text.style.color = colors[i];
  i = (i + 1) % colors.length; // move to next color
}, 1000); // change every 1 second

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

// Wait for DOM to be fully loaded before initializing sliders
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing sliders...");
    
    // Men's sliders
    const casualSlider = createImageSlider(
        ["men/casual-2.jpeg", "men/casual-3.jpeg", "men/casual-4.jpeg", "men/casual-5.jpeg", "men/casual-1.jpeg"],
        "casual-1"
    );
    document.getElementById("next-casual").onclick = casualSlider.nextImage;
    document.getElementById("prev-casual").onclick = casualSlider.previousImage;

    const dresssSlider = createImageSlider(
        ["men/dresss-2.jpeg", "men/dresss-3.jpeg", "men/dresss-4.jpeg", "men/dresss-5.jpeg", "men/dresss-1.jpeg"],
        "dresss-1"
    );
    document.getElementById("next-dresss").onclick = dresssSlider.nextImage;
    document.getElementById("prev-dresss").onclick = dresssSlider.previousImage;

    const botSlider = createImageSlider(
        ["men/bot-2.jpeg", "men/bot-3.jpeg", "men/bot-4.jpeg", "men/bot-5.jpeg", "men/bot-1.jpeg"],
        "bot-1"
    );
    document.getElementById("next-bot").onclick = botSlider.nextImage;
    document.getElementById("prev-bot").onclick = botSlider.previousImage;

    const shoeSlider = createImageSlider(
        ["men/shoe-2.jpeg", "men/shoe-3.jpeg", "men/shoe-4.jpeg", "men/shoe-5.jpeg", "men/shoe-1.jpeg"],
        "shoe-1"
    );
    document.getElementById("next-shoe").onclick = shoeSlider.nextImage;
    document.getElementById("prev-shoe").onclick = shoeSlider.previousImage;

    const accSlider = createImageSlider(
        ["men/acc-2.jpeg", "men/acc-3.jpeg", "men/acc-4.jpeg", "men/acc-5.jpeg", "men/acc-1.jpeg"],
        "acc-1"
    );
    document.getElementById("next-acc").onclick = accSlider.nextImage;
    document.getElementById("prev-acc").onclick = accSlider.previousImage;

   
 
});