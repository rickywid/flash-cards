import { createContext, useState } from 'react';

export const GameContext = createContext<any>(null);

interface GameStartedProps {
    start: boolean;
    id: number | null;
}



const GameProvider = ({ children }: any) => {

    // Default state values
    const [game, setGame] = useState<GameStartedProps>({ start: false, id: null });

    return (
        <GameContext.Provider value={{
            game,
            setGame,
        }} >
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider;