import { useContext, useEffect, useState } from "react"
import { GameContext } from "../context/gameContext";
import '../assets/incorrectDeck.scss'

interface Props {
    gameId: number;
    gameLabel: string;
    questions: {
        id: number;
        question: string;
        options: string[];
        answer: number;
    }[],
    deckLength: number,
    updateGame: (IS_CORRECT: boolean, INDEX: number, QUESTION_ID: number, question: string) => void;
}

const IncorrectDeck = ({
    gameId,
    gameLabel,
    questions,
    deckLength,
    updateGame
}: Props) => {

    const { setGame } = useContext(GameContext)
    const [wait, setWait] = useState<boolean>(false)
    const [displayError, setDisplayError] = useState<boolean>(false)
    const [cardPos, setCardPos] = useState<number>(1)
    const INDEX = 0 // always get first item from the deck
    const QUESTION = questions[INDEX].question
    const QUESTION_ID = questions[INDEX].id
    const CHOICES = questions[INDEX].options
    const ANSWER = questions[INDEX].answer
    
    useEffect(() => {
        setWait(true)
        setTimeout(() => {
            setWait(false)
        }, 5000)
    }, [])

    const checkAnswer = (res: number): void => {

        const IS_CORRECT = res === ANSWER

        if (!IS_CORRECT) {
            setDisplayError(true)
            return
        }

        setCardPos(cardPos + 1)
        setDisplayError(false)
        updateGame(IS_CORRECT, INDEX, QUESTION_ID, QUESTION)
    }

    return wait ? <div className="flash neon">let's fix those mistakes!...</div> : (
        <div className={`card card-${gameId} animate__animated animate__fadeIn`}>
                <p className="card-label">{gameLabel}</p>
            <p className={`card-question gameid-${gameId}`}>{QUESTION}</p>
            <ul className="card-options">
                {CHOICES.map((option: string, i: number) => {
                    return (
                        <li key={i}>
                            <div
                                className={`button answer answer-${gameId}`}
                                onClick={() => checkAnswer(i)}>
                                <p>{option}</p></div>
                        </li>
                    )
                })}
            </ul>
            <div className="card-status neon">
                <p className="end" onClick={() => setGame({ start: false, id: null })}>&#x2B05;</p>
                {displayError ? <p className="neon error animate__animated animate_fadeIn">try again</p> : <div></div>}
                <p className="card-progress ">{cardPos}/{deckLength}</p>
            </div>u
        </div >
    )
}

export default IncorrectDeck