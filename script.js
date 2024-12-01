// Function to calculate Levenshtein distance
function getLevenshteinDistance(a, b) {
    const tmp = [];
    let i, j, alen = a.length, blen = b.length, ch, dif, tl;

    if (alen === 0) { return blen; }
    if (blen === 0) { return alen; }

    for (i = 0; i <= alen; i++) { tmp[i] = [i]; }
    for (j = 0; j <= blen; j++) { tmp[0][j] = j; }

    for (i = 1; i <= alen; i++) {
        ch = a.charAt(i - 1);
        for (j = 1; j <= blen; j++) {
            dif = ch === b.charAt(j - 1) ? 0 : 1;
            tl = tmp[i - 1][j - 1] + dif;
            if (tl < (tmp[i][j - 1] + 1)) { tl = (tmp[i][j - 1] + 1); }
            if (tl < (tmp[i - 1][j] + 1)) { tl = (tmp[i - 1][j] + 1); }
            tmp[i][j] = tl;
        }
    }
    return tmp[alen][blen];
}

document.getElementById('searchInput').addEventListener("input", function() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase(); // Convert to lowercase for case-insensitive matching
    console.log('Searching for:', searchTerm);

    // Ensure the plugin container exists and we have plugins inside it
    const pluginContainer = document.getElementById('pluginContainer');
    const pluginBoxes = Array.from(pluginContainer.getElementsByClassName('plugin-box'));

    if (!pluginBoxes.length) {
        console.error('No plugin boxes found in the container.');
        return;
    }

    // If search term is empty, show all plugins again
    if (searchTerm === '') {
        pluginContainer.innerHTML = '';  // Clear the container first
        pluginBoxes.forEach(plugin => pluginContainer.appendChild(plugin)); // Re-append all plugins
        return;
    }

    // Function to count how many characters in the search term appear in the plugin name
    function countMatchingCharacters(pluginText, searchText) {
        let matchCount = 0;
        const pluginLower = pluginText.toLowerCase();
        const searchLower = searchText.toLowerCase();
        
        // Loop through each character in the search term and check for matches
        for (let i = 0; i < searchLower.length; i++) {
            if (pluginLower.includes(searchLower[i])) {
                matchCount++;
            }
        }
        return matchCount;
    }

    // Sort the plugin boxes based on their relevance to the search term using Levenshtein distance and character matching
    const sortedPlugins = pluginBoxes.sort((a, b) => {
        const aText = a.querySelector('h5').textContent.toLowerCase();
        const bText = b.querySelector('h5').textContent.toLowerCase();

        // Count how many characters in the search term match in each plugin name
        const aMatchCount = countMatchingCharacters(aText, searchTerm);
        const bMatchCount = countMatchingCharacters(bText, searchTerm);

        // Prioritize by the number of matching characters
        if (aMatchCount !== bMatchCount) {
            return bMatchCount - aMatchCount; // Prioritize plugins with more matching characters
        }

        // If matching characters are equal, fall back to Levenshtein distance
        const aDistance = getLevenshteinDistance(aText, searchTerm);
        const bDistance = getLevenshteinDistance(bText, searchTerm);

        // Sort by Levenshtein distance
        return aDistance - bDistance;
    });

    // Clear the container and append the sorted plugin boxes
    pluginContainer.innerHTML = '';  // Clear the previous search results

    // Re-append the sorted plugins to the container
    sortedPlugins.forEach(plugin => pluginContainer.appendChild(plugin));
});
