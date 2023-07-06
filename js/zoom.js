// Zoom Image
const images = document.querySelectorAll(".zoomable-image");

images.forEach((image) => {
    const { left, top, width, height } = image.getBoundingClientRect();
    let isZoomed = false;

    image.addEventListener("mousemove", (event) => {
        const x = (event.clientX - left) / width;
        const y = (event.clientY - top) / height;

        image.style.transformOrigin = `${x * 100}% ${y * 100}%`;
        if (!isZoomed) {
        image.classList.add("zoomed-image");
        isZoomed = true;
        }
    });

    image.addEventListener("mouseleave", () => {
        image.style.transformOrigin = "center center";
        if (isZoomed) {
        image.classList.remove("zoomed-image");
        isZoomed = false;
        }
    });
});
