import Rule from "../../assets/images/image-rules-bonus.svg";
import "./Rule.scss";
type Props = {
  ruleToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

function Rules({ ruleToggle }: Props) {
  return (
    <div className="rule-wrapper">
      <div className="rule">
        <span>Rules</span>
        <img src={Rule} />
        <button
          title="Click to close rules panel"
          type="button"
          onClick={() => ruleToggle((prev) => !prev)}
        >
          {" "}

          <span></span>
          <span></span>
        </button>
     
      </div>
    </div>
  );
}

export default Rules;
