/**
 * Example
 * @version 0.0.1
 */
var MetaReponse = require('./MetaResponse');
var MetaData    = require('./MetaData');

var data1 = new MetaData();
var mr    = new MetaReponse();

data1.setId(3);
data1.setType('recipe');
data1.addAttribute('title', 'Risotto al funghi');
data1.addLink('self', 'http://www.monsite.com/recipe/3');
data1.addLink('next', 'http://www.monsite.com/recipe/4');
data1.addLink('prev', 'http://www.monsite.com/recipe/2');

mr.addLink('self', 'http://www.monsite.com/');
mr.addLink('next', 'http://www.monsite.com/next');

mr.addData(data1.getResponse());
mr.addData(data1);

//console.log(data1.getResponse());
console.log(mr.getResponse());