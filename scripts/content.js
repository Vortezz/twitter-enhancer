document.addEventListener('DOMSubtreeModified', (e) => {
    removeStatsButtons();
})

function removeStatsButtons() {
    let possibleTweets = document.getElementsByClassName("r-1mdbhws");

    checkAndRemoveButtons(possibleTweets);

    possibleTweets = document.getElementsByClassName("r-1dgieki");

    checkAndRemoveButtons(possibleTweets);
}

function checkAndRemoveButtons(possibleTweets) {
    for (let i = 0; i < possibleTweets.length; i++) {
        let possibleTweet = possibleTweets[i];

        if (!possibleTweet.children || possibleTweet.children.length === 0) {
            continue;
        }

        let statsButton = possibleTweet.children[0];

        if (!statsButton) {
            continue;
        }

        let statsClickableButton = statsButton.getElementsByTagName('a')[0] ?? null;

        if (!statsClickableButton) {
            continue;
        }

        if (statsClickableButton.href.includes("analytics")) {
            possibleTweet.removeChild(statsButton);
        }
    }
}

