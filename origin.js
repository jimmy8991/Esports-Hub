$(document).ready(function() {
    var contents = [
        {
            title:"eSports History: How it all began",
            summary: "If you think eSports has only been around for a few years, you're wrong! The cornerstone of video games was already laid in the 50s and with it the competition on PC or console. Only the technological progress at the end of the 90s made video games suitable for the masses. Increasingly better hardware, graphics and the expansion of the Internet around the world have helped cybersports develop into a major sport. ISPO.com reports."
        },
        {
            title: "The 50s: The age of computers begins",
            summary: "The early days of competitive computer games date back to 1952. Computer scientist Alexander Shafto Douglas conceptualized 'XOX' (Tic-Tac-Toe) as a computer game, marking the initial human-computer interaction. In 1958, the first multiplayer game 'Tennis for Two' debuted, allowing two-player interaction via an early form of the joystick, considered by many as the birth of eSports."
        },
        {
            title: "The 60s: The beginning of eSports history",
            summary: "In 1962, 'Spacewar!' emerged on a PDP-10 computer by Steve Russel, Martin Graetz, and Wayne Wiitanen at MIT's 'Tech Model Railroad Club.' The game involved spaceships combating a planetary gravitational field, recognized as the world's first digital computer game. The 'Intergalactic Spacewar Olympics' in 1972 hosted the first eSports tournament at Stanford University, still limited to academic institutions."
        },
        {
            title: "The 70s: Arcades and home consoles celebrate great successes",
            summary: "The 'Magnavox Odyssey' in 1972 pioneered TV-connected gaming, despite its initial complexity. This console introduced digital gaming to the masses. Arcades emerged, enabling public gaming experiences, with games like Pong gaining traction. Competitive gaming evolved with games featuring permanent high score lists, such as 'Sea Wolf' in 1976."
        },
        {
            title: "The 80s: The beginning of high score lists",
            summary: "Asteroids and Starfire in 1979 pioneered high score lists, allowing gamers to etch their names in gaming history. Space Invaders by Atari laid the groundwork for major eSports tournaments, including the 1980 Space Invaders Championships, crowning the first national video game competition winner. The era witnessed the inception of competitive gaming and efforts to standardize rules for fair competition."
        },
        {
            title: "History of video games: The first German clan is founded",
            summary: "In 1982, Walter Day established the 'Twin Galaxies National Scoreboard,' prompting the birth of competitive gaming. Simultaneously, in Germany, Armin Stürmer initiated the 'Atari VCS Bundeliga,' although it dissolved after Atari withdrew its support."
        },
        {
            title: "Netrek: A classic among video games",
            summary: "The release of Netrek in 1988 marked the advent of the first multiplayer game over the internet, primarily accessible to scientists due to limited internet availability."
        },
        {
            title: "The 90s: Better technology makes eSports suitable for the masses",
            summary: "The 1990s witnessed Nintendo organizing the 'Nintendo World Championships', and Blockbuster Video conducting a world championship, reflecting the increasing recognition of competitive gaming. This era highlighted the transition of gaming to PCs and LAN parties, ushering in a new era of competitive gaming."
        },
        {
            title: "eSports Germany: A Rapid Development",
            summary: "In 1999, the 'Gamers' Gathering' in Duisburg showcased the surging interest in competitive gaming, while South Korea professionalized eSports with KeSPA's establishment, focusing on television marketing."
        },
        {
            title: "The 2000s: Worldwide networking as a guarantee for success",
            summary: "The early 2000s saw monumental events like the 'World Cyber Games' in South Korea and the 'Electronic Sports World Cup' in France. Console gaming gained prominence, notably with Halo 2. Tournaments like the 'CPL World Tour' and the 'Championship Gaming Series' marked the industry's growth, offering substantial prize pools.These summarized paragraphs encapsulate the key milestones and developments in eSports history across different decades and regions."
        }
    ];

    var index = 0;

    function displayContent() {
        if (index < contents.length) {
            $(".content").show(); // Show the content section
            $(".image-section").hide(); // Hide the image section

            $(".content-title").text(contents[index].title);
            $(".content-summary").text(contents[index].summary);
        } else {
            index = 0; // Reset index to start again after the last content
        }
    }

    displayContent();

    $(".nextBtn").on("click", function(e) {
        e.preventDefault();
        index++;
        displayContent();
    });

    $(".prevBtn").on("click", function(e) {
        e.preventDefault();
        index = (index - 1 + contents.length) % contents.length;
        displayContent();
    });
});