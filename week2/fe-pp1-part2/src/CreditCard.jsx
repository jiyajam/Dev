import visa from '/src/assets/images/visa.png'
import mastercard from '/src/assets/images/master.png'
import './App.css'

const CreditCard = (props) => {
  const cardType = props.type === 'Visa' ? visa : mastercard
  const lastFour = props.number.slice(-4)
  const month = props.expirationMonth.toString().padStart(2, '0')
  const year = props.expirationYear.toString().slice(-2)

  return (
    <div
      className='credit-card'
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className='card-type'>
        <img src={cardType} alt={props.type} />
      </div>

      <div className='card-text'>
        <div>•••• •••• •••• {lastFour}</div>
        <div>
          Expires {month}/{year} - {props.bank}
        </div>
        <div>{props.owner}</div>
      </div>
    </div>
  )
}

export default CreditCard
