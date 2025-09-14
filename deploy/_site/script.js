document.addEventListener('DOMContentLoaded', () => {




    // --- CLICK-TO-PLAY VIDEO LOGIC ---
    const allVideoFrames = document.querySelectorAll('.video-player-frame');

    allVideoFrames.forEach(frame => {
        const video = frame.querySelector('video');
        const playButton = frame.querySelector('.button-icon.play');

        // Main click event for the button
        playButton.addEventListener('click', () => {
            // Check if this video is currently paused
            if (video.paused) {
                // First, pause all other videos
                pauseAllVideos(video);
                // Then, play this one
                video.play();
                playButton.innerHTML = '❚❚'; // Change icon to Pause
            } else {
                // If it's playing, just pause it
                video.pause();
                playButton.innerHTML = '▶'; // Change icon back to Play
            }
        });
        
        // When the video ends, reset the button icon
        video.addEventListener('ended', () => {
            playButton.innerHTML = '▶';
        });
    });

    function pauseAllVideos(exceptThisVideo) {
        allVideoFrames.forEach(frame => {
            const video = frame.querySelector('video');
            const playButton = frame.querySelector('.button-icon.play');
            // If it's not the video we want to play, pause it
            if (video !== exceptThisVideo && !video.paused) {
                video.pause();
                playButton.innerHTML = '▶'; // Reset the button icon
            }
        });
    }


    // --- Resume Toggle Logic ---
    const toggleResumeButton = document.getElementById('toggleResume');
    const resumeContent = document.getElementById('resumeContent');

    toggleResumeButton.addEventListener('click', () => {
        resumeContent.classList.toggle('hidden');
        if (resumeContent.classList.contains('hidden')) {
            toggleResumeButton.textContent = 'I må også se mit CV';
        } else {
            toggleResumeButton.textContent = 'Gem CV igen, tak';
        }
    });

});