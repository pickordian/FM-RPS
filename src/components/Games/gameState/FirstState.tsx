import { choices } from "../Games";
type Props = {
  handleUserSelection: (name: string) => void;
};

function FirstState({ handleUserSelection }: Props) {
  return (
    <div className="first-state">
      {choices.map((choice, index) => (
        <button
          key={index}
          type="submit"
          className={`choice ${choice.name}`}
          onClick={() => handleUserSelection(choice.name)}
        >
          {choice.name}
        </button>
      ))}
    </div>
  );
}

export default FirstState;
