## Motivation

Even though I have worked with Java and Python in the past (during university), until I started working on this project I had never build a full stack application outside the Javascript/Typescript ecosystem. To that end, I decided to pick up a new language and build it's backend with it.

I found myself trying to decide between using Ruby, Python and Go but in the end I decided to go with Go for the following reasons:

1. It's a statically typed programming language. So I'd be able to add on to what I had learned from Typescript but I wouldn't be able to cope out of typing when I found it convenient by using the "any" keyword like I'd be able to with TypeScript.
2. I'd be able to explore topics like concurrency, multi-threading and pointers, again topics that don't exist in the Javascript ecosystem.
3. Even though the first version of Go was only released in 2007, as per StackOverflow, it's almost as popular as Ruby giving me the confidence that I was learning a "hot" language.

For the sake of focusing more on learning Golang and less on feature building, I decided to work on a relatively simple application and chose to build a simple url shortener similar to [Bit.ly](www.bit.ly).

My MVP for the server was the following:

1. When a url is sent to the servers "/create-hash" endpoint, it would first check if the hash for that url exists in the hash table and if it did, would return the hash. Otherwise, it would create a new hash in the hash table and then returns that newly created hash.
2. When a user were to hit the server with a hash (ie. the endpoint /{:hash}), it would redirect the user to the url stored in MongoDB.
3. This server would also serve the front-end if a user were to hit the root url.
4. And I would develop all this using test-driven-development approach.

My MVP for the front end was just a simple React front-end capable of sending /create-hash request to the server. I could have used Golang templating language to build the front-end but in the end I decided that React is already a great tool to build front-ends and my time could be better spent learning the intricacies of Golang as opposed to a new templating language.

## Final thoughts

This was a challenging but nonetheless rewarding task and I'm very proud of how it turned out. Though I'm not 100% satisfied with my back-end code as I think there is a lot going on in my "main.go" and it might have been a good idea at some point to extract some of the key logic of initializing a mongo server out to a separate package.

It was also very painful to figure out how to serve a React build bundle from the server. With full stack React frameworks like Next.js and Gatsby.js, this is seamless but with the Go server, I actually had to outline when to serve the html as well as handle static asset request. Another pain point was that, because I didn't have a proper production pipeline set up, every time I wanted to make changes to the React code, I had to rebuild the React code with `npm run build` and then copy paste the `build/` file inside the server. Considering these pain points, if I were to build a Golang + React project again, I'd probably forego the mono-repo architecture and have two separate servers: one as a BFF (back-end for the front-end) written purely in Typescript and one as the Go server as a separate API.
