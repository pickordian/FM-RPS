import { useState } from "react";
import "./Games.scss";
import FirstState from "./gameState/FirstState";
import SecondState from "./gameState/SecondState";
type Props = {
  setScore: React.Dispatch<React.SetStateAction<number>>;
};
export const choices: { name: string }[] = [
  { name: "scissors" },
  { name: "paper" },
  { name: "rock" },
  { name: "lizard" },
  { name: "spock" },
];

function Games({ setScore }: Props) {
  const [gameState, setGameState] = useState<number>(0);
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [houseChoice, setHouseChoice] = useState<string | null>(null);
  const calculateResult = (
    userChoice: string | null,
    housePick: string | null
  ): void => {
    if (userChoice === housePick) {
      setResult("Tie");
      console.log("tie");
    } else if (
      (userChoice === "rock" &&
        (housePick === "scissors" || housePick === "lizard")) ||
      (userChoice === "paper" &&
        (housePick === "rock" || housePick === "spock")) ||
      (userChoice === "scissors" &&
        (housePick === "paper" || housePick === "lizard")) ||
      (userChoice === "lizard" &&
        (housePick === "spock" || housePick === "paper")) ||
      (userChoice === "spock" &&
        (housePick === "scissors" || housePick === "rock"))
    ) {
      setResult("You Win");
      setScore((prev) => prev + 1);
      console.log("win");
    } else {
      setResult("You Lose");
      setScore((prev) => prev - 1);
      console.log("lose");
      console.log(userChoice, houseChoice);
    }
  };
  const handleUserSelection = async (name: string) => {
    setGameState((prev) => prev + 1);
    setUserChoice(name);
    const houseChoice = await houseShuffle();
    setTimeout(() => {
      calculateResult(name, houseChoice);
    }, 300);
  };
  const houseShuffle = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      let index: number = 0;
      // set randomize house choice UI
      const houseTimer = setInterval(() => {
        setHouseChoice(choices[index % 5].name);
        index++;
      }, 75);
      setTimeout(() => {
        // clear randomize UI and calculate the actual house choice
        clearInterval(houseTimer);
        const result: number = Math.floor(Math.random() * 5);
        setHouseChoice(choices[result].name);
        resolve(choices[result].name);
      }, 1500);
    });
  };

  return (
    <div className="game">
      {gameState === 0 && (
        <FirstState handleUserSelection={handleUserSelection} />
      )}
      {gameState === 1 && (
        <SecondState
          userChoice={userChoice}
          houseChoice={houseChoice}
          result={result}
          setGameState={setGameState}
          setResult={setResult}
        />
      )}
    </div>
  );
}

export default Games;
