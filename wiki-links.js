// https://nicolejeanette.me/javascript-random-link-generator/
    // Random Link Generator
    // Array with random links is created. You can add as many links as you want/need.
    /* You can use more than one method to create an array, I will show you two examples */
    // Condensed Array
    var random = new Array("https://en.wikipedia.org/wiki/Chicago_rat_hole", "https://en.wikipedia.org/wiki/Baby_Jesus_theft", "https://en.wikipedia.org/wiki/Marzipan_pig", "https://en.wikipedia.org/wiki/Snuffy's_Parents_Get_a_Divorce", "https://en.wikipedia.org/wiki/G%C3%A4vle_goat", "https://breezewiki.com/villains/wiki/Dennis_Reynolds", "https://en.wikipedia.org/wiki/Whitney_Chewston", );
    function randomlink() {
    window.location = random[Math.floor(Math.random()*random.length)];
    }

