import Logo from "../../assets/images/logo-bonus.svg"
import "./Header.scss"
type Props = {
  score: number
}
function Header({score}: Props) {
  return (
    <div className='header'>
        <img src={Logo} alt="Rock Paper Scissors logo"/>
        <span> 
          <span className="score_label">Score</span>
          <span className="score"> {score}</span>
        </span>
    </div>
  )
}

export default Header