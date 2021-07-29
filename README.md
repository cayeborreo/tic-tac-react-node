# Tic-Tac-Toe: React Web App powered by Node.js (Express) Backend

## 🛠 Getting Started

1. Clone the repository
2. Set up .env in root folder

```
NODE_ENV='dev'
PORT=3001
```

3. Set up .env in client folder

```
REACT_APP_BASE_API_URL=http://localhost:3001
```

4. Build the frontend

```
cd client
npm install
npm run build
```

5. Run the server

```
cd ../ (from client, go back to main folder)
node server/index.js
```

6. Go to localhost:3001 and see the project
7. To see the deployed version of the app: https://tic-tac-react-node.herokuapp.com/

## 😪 Coding Roadblocks

1. **This is my first time to develop a Node.js backend, with Typescript on top of that.** I am not sure if this folder structure is best for the requirements, but I wanted it to be in a single repository and have just one app deployed.
   - I should note though that it was fun learning about controllers and routers, and TypeScript kind of foolproofs the codebase in a way.
   - It's also my first "true" server-rendered project. We used ReactJS-Gatsby before—it was just static webpages with client-side API calls.
2. **Setting up Heroku to host the website was also a major roadblock.** I had problems fixing the scss during the builds.
3. **It took time identifying the side effects cascade too.** For example: upon clicking the grid, I know I should update the grid, but when should I evaluate if it's a winning grid or not? And when do I declare a winner? It was a cascade of events that I had to catch.
4. **Matching the winning combination used a double loop.** I could've regexed it I guess, but looking for the correct regex pattern would take me forever 🥲

## ⚠️ Unhandled Cases

1. This app could not identify the earliest occasion of a draw. It just assumes it is if there isn't a winner yet by Turn 8.
