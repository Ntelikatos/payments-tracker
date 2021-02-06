import { useState } from 'react'
import PaymentModel from './objectModels/PaymentModel'
import Payments from './components/Payments'

import './App.css'

function App() {
  const [payments, setPayments] = useState([
    new PaymentModel(
      1,
      new Date().getFullYear(),
      'January',
      24.33,
      14.56,
      56.0
    ),
    new PaymentModel(
      2,
      new Date().getFullYear(),
      'February',
      12.43,
      52.56,
      131.0
    ),
    new PaymentModel(3, new Date().getFullYear(), 'April', 26.72, 47.56, 126.2),
    new PaymentModel(4, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(5, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(6, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(7, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(8, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(9, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(10, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(12, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(13, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(14, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(15, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(16, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(17, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(18, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(19, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(20, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(21, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(22, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(23, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(24, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(26, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(27, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(28, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(29, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(30, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
    new PaymentModel(31, new Date().getFullYear(), 'May', 45.33, 3.56, 123.02),
  ])

  const handleOnClick = () => {
    console.log(payments)
  }

  const handleOnAddPayment = (payment) => {
    setPayments([...payments, payment])
  }

  return (
    <div className='App'>
      <Payments
        onAddPayment={handleOnAddPayment}
        payments={payments}
      ></Payments>
      {/* <button onClick={handleOnClick}>Test</button> */}
    </div>
  )
}

export default App
