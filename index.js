// Array to store the counts of each game
const gameCounts = {
    "League of Legends": 0,
    "Dota 2": 0,
    "Counter-Strike":0,
    "Overwatch":0,
    "Fortnite":0,
    "Call of Duty: Warzone":0
};

// JavaScript to handle the form submission
document.getElementById("esportsPoll").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const selectedGame = document.querySelector('input[name="game"]:checked');
    if (selectedGame) {
        const selectedGameValue = selectedGame.value;
        alert(`You selected: ${selectedGameValue}`);
        
        // Increment the count for the selected game
        gameCounts[selectedGameValue]++;

        // Update the display of counts
        updateGraphs();
    } else {
        alert("Please select a game.");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const emailInput = document.getElementById('emailInput');
    const subscribeBtn = document.getElementById('subscribeBtn');

    // Function to handle subscription
    function subscribeUser() {
        const userEmail = emailInput.value.trim();

        // Validate email format using regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(userEmail)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Perform your subscription logic here
        alert(`Subscribed with email: ${userEmail}`);

        // Clear the input field after subscription
        emailInput.value = '';
        emailInput.placeholder = 'Enter your email';
    }

    // Add event listener to the subscribe button
    subscribeBtn.addEventListener('click', subscribeUser);
});





function updateGraphs() {
    const graphContainer = document.getElementById("graphContainer");
    graphContainer.innerHTML = ""; // Clear previous graph bars

    // Loop through gameCounts object and create bars for each game
    for (const game in gameCounts) {
        const barWrapper = document.createElement("div");
        barWrapper.classList.add("bar-wrapper");

        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.width = `${gameCounts[game] * 20}px`; // Adjust width based on count
        bar.setAttribute('data-count', gameCounts[game]); // Set data-count attribute for the count

        const gameName = document.createElement("span");
        gameName.textContent = game;

        barWrapper.appendChild(bar);
        barWrapper.appendChild(gameName); // Display game name after the bar
        graphContainer.appendChild(barWrapper);
    }

    // JavaScript to display count inside bars on hover
    const bars = document.querySelectorAll('.bar');

    bars.forEach(bar => {
        bar.addEventListener('mouseover', () => {
            const count = bar.getAttribute('data-count');
            bar.setAttribute('data-text', count);
        });

        bar.addEventListener('mouseout', () => {
            bar.removeAttribute('data-text');
        });
    });
}
