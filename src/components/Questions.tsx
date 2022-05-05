import { useContext, useState } from "react"
import { GameContext } from "../context/gameContext";
import '../assets/card.scss'

interface Props {
    gameId: number;
    gameLabel: string;
    questions: any;
    updateGame: (isCorrect: boolean, cardPos: number, questionId: number, question: string) => void;
}

const Questions = ({
    gameId,
    gameLabel,
    questions,
    updateGame,
}: Props) => {
    const { setGame } = useContext(GameContext)
    const [cardPos, setCardPos] = useState<number>(0)

    const QUESTION = questions[cardPos].question
    const QUESTION_ID = questions[cardPos].id
    const CHOICES = questions[cardPos].options
    const ANSWER = questions[cardPos].answer

    const checkAnswer = (res: number): void => {
        const IS_CORRECT = res === ANSWER
        setCardPos(cardPos + 1)
        updateGame(IS_CORRECT, cardPos, QUESTION_ID, QUESTION)
    }

    return (
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
                                <p style={{ display: "inline-block" }}>{option}</p></div>
                        </li>
                    )
                })}
            </ul>
            <div className="card-status neon">
                <p className="end" onClick={() => setGame({ start: false, id: null })}>Exit</p>
                <p className="card-progress ">{cardPos + 1}/{questions.length}</p>
            </div>
        </div>
    )
}

export default Questions