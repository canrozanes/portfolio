## Motivation

When I first started learning JavaScript, for better or for worse, I immediately jumped into using libraries and frameworks to manipulate the DOM. It was first JQuery then it was React. I figured just using vanilla Javacript to manipulate the DOM was a gap in my knowledge.

To better understand DOM manipulations using vanilla JavaScript, I decided to build a relatively simple game that I used to play as a child: Mastermind, with the goal that I would only use vanilla Javascript ie. utilities and constructs that are natively available in JavaScript and wouldn't rely on any external JavaScript packages. For that reason, if you look at the [project directory](https://github.com/canrozanes/mastermind), you won't see a package.json or a package-lock.json file.

## Reflections

Even though I had a lot of fun building it from scratch, this project made me truly appreciate the power of React. So many little things I had to worry about while building this game such as having to store references to DOM objects, mutating them, adding an removing classes from them, are almost seamless with React whereas in vanilla Javascript, requires a bit of heavy lifting.

I also like to think that I got better at Mastermind because I had to play it so many times during testing. It's a fun game!
