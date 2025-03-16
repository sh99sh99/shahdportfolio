document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.getElementById("about-link");
    const aboutPopup = document.getElementById("about-popup");
    const closeBtn = document.querySelector(".close-btn");

    aboutLink.addEventListener("click", function (e) {
        e.preventDefault();
        aboutPopup.classList.add("show");
        document.body.classList.add("modal-open");
    });

    closeBtn.addEventListener("click", function () {
        aboutPopup.classList.remove("show");
        document.body.classList.remove("modal-open");
    });

    window.addEventListener("click", function (e) {
        if (e.target === aboutPopup) {
            aboutPopup.classList.remove("show");
            document.body.classList.remove("modal-open");
        }
    });
});

function openVideoLightbox() {
    document.getElementById("video-lightbox").style.display = "flex";
}

function closeVideoLightbox() {
    document.getElementById("video-lightbox").style.display = "none";
}
