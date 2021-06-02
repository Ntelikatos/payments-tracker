import Payment from './Payment'
import AddPayment from './AddPayment'

const Payments = ({ onAddPayment, payments, onDeletePayment }) => {
  return (
    <section className='payments-container'>
      <AddPayment onAddPayment={onAddPayment}></AddPayment>
      {payments.map((payment) => {
        return (
          <Payment
            key={payment.id}
            paymentModel={payment}
            onDelete={onDeletePayment}
          ></Payment>
        )
      })}
    </section>
  )
}

export default Payments
