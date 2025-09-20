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
    
    const ktSlider = createImageSlider(
        ["kids/kt-2.jpeg", "kids/kt-3.jpeg", "kids/kt-4.jpeg", "kids/kt-5.jpeg", "kids/kt-1.jpeg"],
        "kt-1"
    );
    document.getElementById("next-kt").onclick = ktSlider.nextImage;
    document.getElementById("prev-kt").onclick = ktSlider.previousImage;
    