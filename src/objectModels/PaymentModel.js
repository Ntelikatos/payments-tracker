import PropTypes from 'prop-types'

export const EnumMonths = {
  January: 'January',
  February: 'February',
  March: 'March',
  April: 'April',
  May: 'May',
  June: 'June',
  July: 'July',
  August: 'August',
  September: 'September',
  October: 'October',
  November: 'November',
  December: 'December',
}

function PaymentModel(
  id,
  year,
  month,
  companyBankPayment,
  companyCashPayment,
  govermentPayment
) {
  this.id = id
  this.year = year
  this.month = month
  this.companyBankPayment = companyBankPayment
  this.companyCashPayment = companyCashPayment
  this.govermentPayment = govermentPayment
}

PaymentModel.propTypes = {
  id: PropTypes.number,
  year: PropTypes.number,
  month: PropTypes.oneOf(Object.keys(EnumMonths)),
  companyBankPayment: PropTypes.number.isRequired,
  companyCashPayment: PropTypes.number.isRequired,
  govermentPayment: PropTypes.number.isRequired,
}

export default PaymentModel
