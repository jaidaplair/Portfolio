document.addEventListener('DOMContentLoaded', () => {
    // Elements for accessibility features
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const toggleThemeButton = document.getElementById('toggle-theme');
    const body = document.body;

    // Audio element
    const audio = document.getElementById('background-music');
    const audioToggleButton = document.getElementById('audio-toggle');

    // Adjustable text sizes
    let fontSize = 16; // Default font size in px
    increaseFontButton.addEventListener('click', () => {
        fontSize += 2;
        document.documentElement.style.fontSize = `${fontSize}px`;
    });

    decreaseFontButton.addEventListener('click', () => {
        fontSize = Math.max(12, fontSize - 2); // Prevent font size from becoming too small
        document.documentElement.style.fontSize = `${fontSize}px`;
    });

    // Dark mode/light mode toggle
    toggleThemeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Play/Mute audio toggle
    audioToggleButton.addEventListener('click', () => {
        if (audio.paused) {
            // Play the audio if it's paused
            audio.play().catch((error) => {
                console.log("Audio playback failed: ", error);
            });
            audioToggleButton.textContent = 'Mute'; // Change button text to 'Mute'
        } else {
            // Pause the audio if it's playing
            audio.pause();
            audioToggleButton.textContent = 'Play'; // Change button text to 'Play'
        }
         // Set up the toggle functionality for the play/pause button
    audioToggleButton.addEventListener('click', () => {
        if (audio.paused) {
            // Play the audio if it's paused
            audio.play().catch((error) => {
                console.log("Audio playback failed: ", error);
            });
            audioToggleButton.textContent = 'Mute'; // Change button text to Mute
            localStorage.setItem('audioPlaying', 'true'); // Save state to localStorage
        } else {
            // Pause the audio if it's playing
            audio.pause();
            audioToggleButton.textContent = 'Play'; // Change button text to Play
            localStorage.setItem('audioPlaying', 'false'); // Save state to localStorage
        }
    });
    });
});

