import coin from '../images/coin.svg';

const Points = ({text, size = 16, textClasses = "text-xs"}) => {
  return (
    <div className="flex">
      <img className="mr-1" src={coin} width={size} alt="coin" />
      <p className={textClasses}>{text}</p>
    </div>
  )
}

export default Points;