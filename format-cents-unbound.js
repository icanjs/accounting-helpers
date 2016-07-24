import accounting from 'accounting';

/**
 * Functions the same as formatMoney, but without live binding.
 * Can be used for a performance boost when live binding is not needed.
 * Values must be primitives.
 * @param  {String} propName  The name of the property to be formatted.
 * @return {String} An accounting-formatted currencty amount.
 */
export default function(propName, numberOfDecimals, nullval = undefined, options = {}) {
	if (typeof numberOfDecimals !== 'number'){
		numberOfDecimals = 2;
	}
	if (options.context[propName] === null && nullVal !== undefined) {
		return '';

	// Convert from cents into accounting float.
	} else {
		let prop = options.context[propName].toString();
		prop = prop.slice(0, prop.length - 2) + '.' + prop.slice(prop.length - 2, prop.length);
		prop = parseFloat(prop);
		return accounting.formatMoney(float, '', numberOfDecimals);
	}
}
