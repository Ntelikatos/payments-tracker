import { useState } from 'react'
import PaymentModel from '../objectModels/PaymentModel'
import { EnumMonths } from '../objectModels/PaymentModel'

const defaultPaymentModel = new PaymentModel(
  null,
  new Date().getFullYear(),
  EnumMonths.January,
  0.0,
  0.0,
  0.0
)

const AddPayment = ({ onAddPayment }) => {
  const [payment, setPayment] = useState(defaultPaymentModel)

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (
      payment.year === 0 &&
      payment.companyBankPayment === 0 &&
      payment.companyCashPayment === 0 &&
      payment.govermentPayment === 0
    ) {
    }

    onAddPayment(payment)

    setPayment({ ...defaultPaymentModel })
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
    </form>
  )
}

export default AddPayment
