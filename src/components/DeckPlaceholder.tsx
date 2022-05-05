import { useState } from "react";

interface Props {
    id: number;
    name: string;
    label: string;
    setGameId: (id: number) => void;
}

const DeckPlaceholder = ({ id, name, label, setGameId }: Props) => {

    return (
        <div
            className="deck">
            <div
                className={`deck-placeholder ${label}`}
                onClick={() => setGameId(id)}
            >
                <p>{name}</p>
            </div>
        </div>
    )
}

export default DeckPlaceholder