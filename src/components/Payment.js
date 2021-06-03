const Payment = ({ paymentModel, onDelete }) => {
  return (
    <div className='payment'>
      {/* <h1>{paymentModel.id}</h1> */}
      <h3>
        <span className='text-highlight'>Year:</span> {paymentModel.year}
      </h3>
      <h3>
        <span className='text-highlight'>Month:</span> {paymentModel.month}
      </h3>
      <h3>
        <span className='text-highlight'>Company Bank Payment:</span>{' '}
        {paymentModel.companyBankPayment}
      </h3>
      <h3>
        <span className='text-highlight'>Company Cash Payment:</span>{' '}
        {paymentModel.companyCashPayment}
      </h3>
      <h3>
        <span className='text-highlight'>Goverment Payment:</span>{' '}
        {paymentModel.govermentPayment}
      </h3>
      <div className='horizontal-line'></div>
      <h3>
        <span className='text-highlight'>Total Amount:</span>{' '}
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
