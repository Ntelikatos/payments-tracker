import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PaymentModel from '../objectModels/PaymentModel'
import { EnumMonths } from '../objectModels/PaymentModel'

// const defaultPaymentModel = new PaymentModel(
//   null,
//   new Date().getFullYear(),
//   EnumMonths.January,
//   0.0,
//   0.0,
//   0.0
// )

const defaultPaymentModel = new PaymentModel(null, null, null, null, null, null)

const AddPayment = ({ onAddPayment }) => {
  const [payment, setPayment] = useState(defaultPaymentModel)

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const checkIfIsNaN = (value) => {
      if (isNaN(parseFloat(value))) {
        return true
      } else {
        return false
      }
    }

    if (
      parseInt(payment.year) === 0 &&
      parseFloat(payment.companyBankPayment) === 0 &&
      parseFloat(payment.companyCashPayment) === 0 &&
      parseFloat(payment.govermentPayment) === 0
    ) {
      toast.error('All values are zero!')

      return
    } else if (checkIfIsNaN(payment.year)) {
      toast.error('Year cant be empty!')

      return
    } else if (checkIfIsNaN(payment.companyBankPayment)) {
      toast.error('Company Bank Payment cant be empty!')

      return
    } else if (checkIfIsNaN(payment.companyCashPayment)) {
      toast.error('Company Cash Payment cant be empty!')

      return
    } else if (checkIfIsNaN(payment.govermentPayment)) {
      toast.error('Goverment Payment cant be empty!')

      return
    } else {
      onAddPayment(payment)

      setPayment({ ...defaultPaymentModel })
      toast.success('New payment added succesfully!')
    }
  }

  const handleOnSelectChange = (e) => {
    setPayment({ ...payment, month: e.target.value })
  }

  const handleOnCompanyBankPaymentChange = (e) => {
    setPayment({
      ...payment,
      companyBankPayment: parseFloat(e.target.value),
    })
  }

  const handleOnCompanyCashPaymentChange = (e) => {
    setPayment({
      ...payment,
      companyCashPayment: parseFloat(e.target.value),
    })
  }

  const handleOnGovermentPaymentChange = (e) => {
    setPayment({
      ...payment,
      govermentPayment: parseFloat(e.target.value),
    })
  }

  return (
    <form
      className='add-payment-container'
      action='submit'
      onSubmit={handleOnSubmit}
    >
      <label htmlFor='input-year'>Year</label>
      <input
        type='number'
        placeholder='ex. 2021'
        id='input-year'
        value={payment.year}
        onChange={(e) => setPayment({ ...payment, year: e.target.value })}
      />
      <label htmlFor='input-month'>Month</label>
      <select
        type='text'
        value={payment.month}
        id='input-month'
        onChange={handleOnSelectChange}
      >
        {Object.keys(EnumMonths).map((key) => (
          <option key={key} value={key}>
            {EnumMonths[key]}
          </option>
        ))}
      </select>
      <label htmlFor='input-companyBankPayment'>Company Bank Payment</label>
      <input
        type='number'
        placeholder='ex. 24.45'
        min='0'
        step='0.5'
        id='input-companyBankPayment'
        value={payment.companyBankPayment}
        onChange={handleOnCompanyBankPaymentChange}
      />
      <label htmlFor='input-companyCashPayment'>Company Cash Payment</label>
      <input
        type='number'
        placeholder='ex. 24.45'
        min='0'
        step='0.5'
        id='input-companyCashPayment'
        value={payment.companyCashPayment}
        onChange={handleOnCompanyCashPaymentChange}
      />
      <label htmlFor='input-govermentPayment'>Goverment Payment</label>
      <input
        type='number'
        placeholder='ex. 24.45'
        min='0'
        step='0.5'
        id='input-govermentPayment'
        value={payment.govermentPayment}
        onChange={handleOnGovermentPaymentChange}
      />
      <input className='btn-submit' type='submit' value='Add' />
      <ToastContainer
        position='top-right'
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
    </form>
  )
}

export default AddPayment
