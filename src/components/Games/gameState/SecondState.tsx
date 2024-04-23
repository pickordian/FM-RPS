type Props = {
  userChoice: string | null;
  houseChoice: string | null;
  result: string | null;
  setGameState: React.Dispatch<React.SetStateAction<number>>;
  setResult: React.Dispatch<React.SetStateAction<string | null>>;
};

function SecondState({
  userChoice,
  houseChoice,
  result,
  setGameState,
  setResult,
}: Props) {

  return (
    <div className="second-state">
      <div>
      <span>You picked</span>
      <div className={`choice ${userChoice}`}>
        {userChoice}
        <span className={result === "You Win" ? "result-bubble" : "none"}></span>
      </div>
      </div>
      <div>
      <span>The house picked</span>
      <div className={`choice ${houseChoice}`}>
        {houseChoice}
        <span className={result === "You Lose" ? "result-bubble" : "none"}></span>
      </div>
      </div>
      {result ? (
        <div className="result">
          <span> {result}</span>
          <button
            onClick={() => {
              setGameState(0);
              setResult(null);
            }}
          >
            {" "}
            Play again?{" "}
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default SecondState;
