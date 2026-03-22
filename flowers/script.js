function goToHomePage() {
    // 1. Start the fade-out effect
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease";

    // 2. Wait for the animation (500ms) then change the page
    setTimeout(function() {
        window.location.href = "home.html";
    }, 500);
}