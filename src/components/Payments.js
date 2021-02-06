import Payment from './Payment'
import AddPayment from './AddPayment'
import { useState } from 'react'

const Payments = ({ onAddPayment, payments }) => {
  return (
    <section className='payments-container'>
      <AddPayment onAddPayment={onAddPayment}></AddPayment>
      {payments.map((payment) => {
        return <Payment key={payment.id} paymentModel={payment}></Payment>
      })}
    </section>
  )
}

export default Payments
