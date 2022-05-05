import { useContext } from "react";
import GameMain from './components/GameMain';
import DeckPlaceholder from "./components/DeckPlaceholder";
import { GameContext } from "./context/gameContext";
import './assets/App.scss'

function App() {

  const { game, setGame } = useContext(GameContext)

  const setGameId = (id: number) => setGame({ start: true, id: id })

  const displayGame = game.start ?
    <GameMain /> :
    (
      <div>
        <div className="wrapper">
          <DeckPlaceholder id={0} setGameId={setGameId} label="JS" name="javascript language" />
          <DeckPlaceholder id={1} setGameId={setGameId} label="OOP" name="object oriented programming" />
          <DeckPlaceholder id={2} setGameId={setGameId} label="AL" name="data structures & algorithms" />
          <DeckPlaceholder id={3} setGameId={setGameId} label="BE" name="back end development" />
          <DeckPlaceholder id={4} setGameId={setGameId} label="WE" name="web development" />
          <DeckPlaceholder id={5} setGameId={setGameId} label="DO" name="devops" />
        </div>
      </div>
    )

  return (
    <div className="App">
      <main>
        <div className="container">
          {!game.start && (
            <div className="header">
              <div className="header-img">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <h1>Flash Cards</h1>
            </div>
          )}
          {displayGame}
        </div>
      </main>
    </div>
  );
}

export default App;

/**
 
1. Pick a deck
2. Start game
3. Game Type: Quiz Mode/
3. Go through entire deck (X cards)
4. Incorrect answers, place card in new pile
5. After going through entire deck, go through the incorrect deck
6. Go through incorrect deck until all questions answered correctly
7. Display game results
 
App states:

gameStarted - true/false
deckCompleted - true/false
incorrectDeck - [Card]

Components:

Deck
Card/Questions
  


Neon design theme

 */