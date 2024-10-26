document.getElementById("main-heart").onclick = function() {
    document.getElementById("photo-display").innerHTML = "<img src='your-photo.jpg' alt='A special memory'>";
    document.getElementById("photo-display").style.display = "block"; // Show the photo
};

document.getElementById("heart1").onclick = function() {
    document.getElementById("photo-display").innerHTML = "<img src='memory1.jpg' alt='Memory 1'>";
    document.getElementById("photo-display").style.display = "block"; // Show the photo
};

// Repeat for other hearts with different memory photos
