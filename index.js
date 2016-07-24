import stache from 'can-stache';
import formatMoney from './format-money';
import formatMoneyUnbound from './format-money-unbound';
import formatCents from './format-cents';
import formatCentsUnbound from './format-cents-unbound';

can.stache.registerHelper('formatMoney', formatMoney);
can.stache.registerHelper('formatMoneyUnbound', formatMoneyUnbound);
can.stache.registerHelper('formatCents', formatCents);
can.stache.registerHelper('formatCentsUnbound', formatCentsUnbound);
