import can from 'can';
import accounting from 'accounting';
/**
 * Functions the same as formatMoney, but without live binding.
 * Can be used for a performance boost when live binding is not needed.
 * Values must be primitives.
 * @param  {String} propName  The name of the property to be formatted.
 * @return {String} An accounting-formatted currencty amount.
 */
can.stache.registerHelper('formatCentsUnbound', function(propName, numberOfDecimals, nullval = undefined, options = {}) {
	if (typeof numberOfDecimals !== 'number'){
		numberOfDecimals = 2;
	}
	if (options.context[propName] === null && nullVal !== undefined) {
		return '';

	// Convert from cents into accounting float.
	} else {
		let int = parseInt(options.context[propName]),
			float = int / 100;

		return accounting.formatMoney(float, '', numberOfDecimals);
	}
});
