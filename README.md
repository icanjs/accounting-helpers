# accounting-helpers
Stache helpers for formatting money.

[![npm version](https://badge.fury.io/js/accounting-helpers.svg)](https://badge.fury.io/js/accounting-helpers)

[![NPM](https://nodei.co/npm/accounting-helpers.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/accounting-helpers/)

## Installation
```
npm install accounting-helpers --save
```

## Usage

Using CanJS's built-in support for StealJS, you can now import the module directly inside your templates.  For example, assuming we have a variable `amount` which holds the value `2333`.
```html
<can-import from="accounting-helpers"/>

This will return 2,333.00:
{{formatMoney amount}}

This will return 23.33:
{{formatCents amount}}
```

The two examples above will include live binding.  To opt out use the `Unbound` options, like this:
```html
<can-import from="accounting-helpers"/>

This will return 2,333.00 without live binding:
{{formatMoneyUnbound amount}}

This will return 23.33 without live binding:
{{formatCentsUnbound amount}}
```

## Contributing
Pull requests are welcome. Analyze the code. See where it needs improvement, and let me know. Please, help make it better!

## Authors

- [Marshall Thompson](https://github.com/marshallswain)

[![Built with StealJS](./build-with-stealjs.jpg)](http://StealJS.com)
