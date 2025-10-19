document.getElementById('overlay').addEventListener('click', enterSite);

function enterSite() {
    const overlay = document.getElementById('overlay');
    const video = document.getElementById('background-video');
    const profile = document.getElementById('profile-embed');

    // Fade out overlay with animation
    overlay.style.transition = 'opacity 1s ease-out';
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1000);

    // Play and unmute video with fade in
    video.style.transition = 'opacity 1s ease-in';
    video.style.opacity = '1';
    video.play();
    video.muted = false;
    video.volume = 0.5; // Set volume to 50%

    // Show profile embed with animation
    setTimeout(() => {
        profile.style.display = 'block';
    }, 1000);
}

// Add some particle effect or additional animations if needed
// For now, keep it simple
