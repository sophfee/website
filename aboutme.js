const aboutMeText = [
    `Hello! My name is Nick, I am a Full-Stack Developer currently enrolled in highschool.
    My knowledge in computer programming is entirely self-taught over the last many years
    of my life. I really began to expand my knowledge when I was 13, which is when I began
    modding games. Video games have been a part of my life as long as I can remember.`,

    `I spent my early childhood in Chagrin Falls in Ohio, before moving to the suburbs of
    Chicago, Illinois. I moved at around 5-6 years old. Growing up I was always fascinated
    by computers and technology.`,

    `Along with always being fascinated with technology, I've always had a love for music,
    favorite genres being Hip-Hop and Electronic. I love songs by Kanye West and Kendrick
    Lamar. I always have something from them playing when I'm working.`,

    `I love to develop games. My current game I am working on is my take on a game in the
    <a style="text-decoration: none; color: lightblue;" href="https://scp-wiki.wikidot.com/main">SCP Universe</a>. This game is called SCP Breach. It is being developed on the
    work-in-progress S&box Source 2 Engine.`
]

const bodyText = document.getElementById("bodyt");
const leftCycleButton = document.getElementById("left-am");
const rightCycleButton = document.getElementById("right-am");
var cycle = 0;

leftCycleButton.onclick = () => {
    cycle--;
    if (cycle < 0)
        cycle = aboutMeText.length - 1;
    
    bodyText.innerHTML = aboutMeText[cycle];
}


rightCycleButton.onclick = () => {
    cycle++;
    if (cycle >= aboutMeText.length)
        cycle = 0;
    
    bodyText.innerHTML = aboutMeText[cycle];
}