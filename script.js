// Challenges Button Animation
document.addEventListener("DOMContentLoaded", function () {
    const challenges = [
        "Visit Ayala Museum and take a selfie!",
        "Find a unique mural in Makati and post it!",
        "Try a new dish at a Makati restaurant!",
        "Explore a park and relax!"
    ];
    const challengeBtn = document.getElementById("challenge-btn");
    const challengeDisplay = document.getElementById("challenge-display");
    if (challengeBtn) {
        challengeBtn.addEventListener("click", function () {
            const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
            challengeDisplay.textContent = randomChallenge;
        });
    }
});

// Gallery Upload Functionality
function uploadImage() {
    const input = document.getElementById("imageUpload");
    const gallery = document.getElementById("gallery");
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.classList.add("uploaded-img");
            gallery.appendChild(img);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
