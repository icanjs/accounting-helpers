import can from 'can';
import accounting from 'accounting';

/**
 * Converts an integer representing cents into an accounting-formatted string.
 * If live binding is not needed in a large list, you might
 * consider using the `formatMoneyFromCentsUnbound` alternative.
 * @param {Object} prop  The property to be formatted.
 * @param {Integer} numberOfDecimals  The number of decimal places desired.
 *                                    Default is 2.
 * @param {String or Number} nullVal  An optional value to use if the prop is null.
 *                   If not provided, 0.00 will be returned.
 * @return {String} An accounting-formatted currency amount.
 */
can.stache.registerHelper('formatCents', function(prop, numberOfDecimals = 2, nullVal = undefined) {
	prop = typeof prop === 'function' ? prop() : prop;
	numberOfDecimals = typeof numberOfDecimals === 'function' ? numberOfDecimals() : numberOfDecimals;

	if (typeof numberOfDecimals !== 'number'){
		numberOfDecimals = 2;
	}

	// There was no value, return the nullVal
	if (prop === null && nullVal !== undefined) {
		return nullVal;

	// Convert from cents into accounting float.
	} else {
		prop = prop / 100;
	  return accounting.formatMoney(prop, '', numberOfDecimals);
	}
});
