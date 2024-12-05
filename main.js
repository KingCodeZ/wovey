var app = document.getElementById('app')

var Typewriter = new Typewriter(app, {
    loop: true,
    delay : 55,
});

Typewriter
    .pauseFor(2000)
    .typeString('To Bube, ')
    .pauseFor(300)
    .deleteChars(20)
    .typeString("Ebubechukwu, who is she?<br> well,")
    // .deleteChars(161)
    .pauseFor(4000)
    .typeString(" Evergreen is her smile, interwoven with the vibes i adore so much, clears up the fog set by unkind days. <br> ")
    .typeString(" Beautiful, beauty unfathomable, i have to stop and stare for a while, not to admire but to make sure she's real, because how could every smile, frown, and every expression made be a masterpiece, breathtakingly beautiful. <br> ")
    .typeString(" Understanding of my annoying nature and vexing behaviours, or should i say tolerant, i am a handful, i will admit <br> ")
    .typeString(" Boldly expressing what she stands for and rigid is her stance, she inspires me. <br>      ")
    .pauseFor(4000)

    .typeString(" Educating me on my shortcomings and flaws, she shows me how to be a better person, <br> ")
    .typeString(" Changing the way i see life as she does <br>")
    .typeString(" Has the body i yearn for and the ability to drive me crazy and put me in my place, call me to order, whatever she wants, i am King but i'm her subject. <br> ")
    .typeString(" Under the pretty face and her alluring body worth of a goddess, a beautiful mind, from whence wonderful poetry and wisdom flows, i truly am garetful for who you are , love <br> ")
    .typeString(" Kings would beg, Lords plead and the powerful grovel for an audience with my love <br> ")
    .typeString(" With grace, you approach a new age, with your head high, charm intact, one of the strongest women i know <br> ")
    .typeString(" Unravel this new year and all it's adventures, pain, highs and lows it comes with and know i always will be your supporter and the lord guide you, keep you and bless you for me. Happy Birtday Wovey💕<br> ")
    .typeString(' <h1 style="color: pink;">I Love You</h1> <br>')
    .pauseFor(300)
    .typeString(" <i>Love, Davies</i>")


    .pauseFor(1000)
    .start()
