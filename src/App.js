import { useEffect, useState } from 'react'
import PaymentModel from './objectModels/PaymentModel'
import Payments from './components/Payments'
import { db } from './firebase.config'

import './App.css'

function App() {
  const [payments, setPayments] = useState([])

  const handleOnAddPayment = (payment) => {
    if (addPaymentToFirestore(payment)) {
      setPayments([...payments, payment])
    }
  }

  const addPaymentToFirestore = async (payment) => {
    var newPaymentRef = db.collection('payments').doc()

    return newPaymentRef.set(Object.assign({}, payment)).then((ref) => {
      if (ref) {
        console.log('Added document with ID: ', ref.id)
      }
    })
  }

  const removePaymentFromFirebase = async (paymentId) => {
    var paymentToDeleteRef = db.collection('payments').doc(paymentId.toString())

    console.log(paymentId)

    var result = paymentToDeleteRef
      .delete()
      .then(() => console.log('Document ', paymentId, ' deleted!'))
      .catch((error) =>
        console.error(`Error deleting document ${paymentId}!`, error)
      )
  }

  useEffect(() => {
    const unsubscribe = db.collection('payments').onSnapshot((snapshot) => {
      const data = snapshot.docs.map(
        (doc) =>
          new PaymentModel(
            doc.id,
            doc.data().year,
            doc.data().month,
            doc.data().companyBankPayment,
            doc.data().companyCashPayment,
            doc.data().govermentPayment
          )
      )

      setPayments(data)
    })
  }, [])

  return (
    <div className='App'>
      <Payments
        onAddPayment={handleOnAddPayment}
        onDeletePayment={removePaymentFromFirebase}
        payments={payments}
      ></Payments>
    </div>
  )
}

export default App
