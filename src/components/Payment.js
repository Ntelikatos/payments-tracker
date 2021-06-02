const Payment = ({ paymentModel, onDelete }) => {
  return (
    <div className='payment'>
      {/* <h1>{paymentModel.id}</h1> */}
      <h3>Year: {paymentModel.year}</h3>
      <h3>Month: {paymentModel.month}</h3>
      <h3>Company Bank Payment: {paymentModel.companyBankPayment}</h3>
      <h3>Company Cash Payment: {paymentModel.companyCashPayment}</h3>
      <h3>Goverment Payment: {paymentModel.govermentPayment}</h3>
      <div className='vert-line'></div>
      <h3>
        Total Amount:{' '}
        {(
          paymentModel.govermentPayment +
          paymentModel.companyBankPayment +
          paymentModel.companyCashPayment
        ).toFixed(2)}
      </h3>
      <a className='btn-delete' onClick={() => onDelete(paymentModel.id)}></a>
    </div>
  )
}

export default Payment
