import { useContext, useEffect, useState } from "react";
import { GameContext } from "../context/gameContext";
import Questions from "./Questions";
import data from '../data'
import IncorrectDeck from "./IncorrectDeck";

const GameMain = () => {
    const { game, setGame } = useContext(GameContext)
    const [correctDeck, setCorrectDeck] = useState<number[]>([])
    const [results, setResults] = useState<{ correct: string[], wrong: string[] }>({ correct: [], wrong: [] })
    const [incorrectDeck, setIncorrectDeck] = useState<number[]>([])
    const [playingIncorrectDeck, setPlayIncorrectDeck] = useState<boolean>(false)
    const [deckComplete, setDeckComplete] = useState<boolean>(false)
    const GAME_ID = game.id
    const GAME_DATA = data[GAME_ID].data
    const DECK_LENGTH = data[GAME_ID].data.length - 1

    useEffect(() => {
        if (deckComplete) {
            setPlayIncorrectDeck(true)
        }
    }, [deckComplete])

    const updateGame = (
        isCorrect: boolean,
        cardPos: number,
        questionId: number,
        question: string
    ) => {

        isDeckComplete(cardPos)

        if (playingIncorrectDeck && isCorrect) {
            const NEW_DECK = incorrectDeck.filter((id: number) => {
                return id !== questionId
            })
            setIncorrectDeck([...NEW_DECK])
        }
        updateDecks(isCorrect, questionId, question)
    }

    const isDeckComplete = (cardPos: number) => {
        return cardPos === DECK_LENGTH && setDeckComplete(true)
    }

    const updateDecks = (isCorrect: boolean, cardPos: number, question: string) => {

        if (isCorrect) {
            setCorrectDeck([...correctDeck, cardPos])
        } else {
            setIncorrectDeck([...incorrectDeck, cardPos])
        }

        updateResults(isCorrect, question)
    }

    const updateResults = (isCorrect: boolean, question: string) => {

        if (isCorrect) {
            setResults({ correct: [...results.correct, question], wrong: results.wrong })
        } else {
            setResults({ correct: results.correct, wrong: [...results.wrong, question] })
        }
    }

    const filterDeck = () => {
        const DECK = GAME_DATA
        return DECK.filter((card, i) => incorrectDeck.includes(card.id))
    }

    const displayIncorrectDeck = () => {
        return (
            <IncorrectDeck
                gameId={GAME_ID}
                gameLabel={gameLabel()}
                questions={filterDeck()}
                deckLength={results.wrong.length}
                updateGame={updateGame}
            />
        )
    }

    const gameLabel = () => {
        if (GAME_ID === 0) {
            return 'javascript'
        }

        else if (GAME_ID === 1) {
            return 'object oriented programming'
        }

        else if (GAME_ID === 2) {
            return 'data structures & algorithms'
        }

        else if (GAME_ID === 3) {
            return 'backend development'
        }

        else if (GAME_ID === 4) {
            return 'web development'
        }

        else {
            return 'devops'
        }
    }

    const newGame = () => {
        setGame({ start: false, id: null })
        setResults({ correct: [], wrong: [] })
    }

    const displayGame = deckComplete ? (
        <div>
            {incorrectDeck.length ? displayIncorrectDeck() : (
                <div className="results">
                    <p className="neon congrats">congratulations!... </p>
                    <p className="results end" onClick={newGame}>new game</p>
                    <div className="results-summary">
                        <div>
                            <h2 className="neon">correct ({results.correct.length})</h2>
                            <ul>
                                {results.correct.map(question => <li><p className="neon">- {question}</p></li>)}
                            </ul>
                        </div>
                        <div>
                            <h2 className="neon">wrong ({results.wrong.length})</h2>
                            <ul>
                                {results.wrong.map(question => <li><p className="neon">- {question}</p></li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    ) : (
        <Questions
            gameId={GAME_ID}
            gameLabel={gameLabel()}
            questions={GAME_DATA}
            updateGame={updateGame}
        />
    )

    return (
        <div>
            {displayGame}
        </div>
    )
}

export default GameMain