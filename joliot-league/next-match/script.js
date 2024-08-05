// Define the current date to find the next match
const date = new Date().toISOString().split('T')[0];

function getNextMatch() {
    fetch('/data/league/upcomming-matches.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].time.date >= date) {
                    break;
                }
            }
        });
}

getNextMatch();