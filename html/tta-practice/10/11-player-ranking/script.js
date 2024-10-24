// Array to hold players and their rank
const players = [
    { name: 'Lionel Messi', rank: 0 },
    { name: 'Cristiano Ronaldo', rank: 0 },
    { name: 'Neymar Jr', rank: 0 },
    { name: 'Kylian Mbappé', rank: 0 },
    { name: 'Robert Lewandowski', rank: 0 }
];

// Function to render players to the DOM
function renderPlayers() {
    const playerList = document.getElementById('playerList');
    playerList.innerHTML = ''; // Clear the list before re-rendering

    players.forEach((player, index) => {
        const playerItem = document.createElement('li');
        playerItem.className = 'player-item';

        playerItem.innerHTML = `
            <h3>${player.name}</h3>
            <div>
                <span class="rank-display">Rank: ${player.rank}</span>
                <button class="rank-btn" onclick="increaseRank(${index})">+ Rank</button>
            </div>
        `;

        playerList.appendChild(playerItem);
    });

    // Sort players by rank (descending order)
    players.sort((a, b) => b.rank - a.rank);
}

// Function to increase player's rank
function increaseRank(index) {
    players[index].rank++;
    renderPlayers();
}

function resetRanks() {
    players.forEach(player => player.rank = 0);
    renderPlayers();
}

// Initial render of players
renderPlayers();
