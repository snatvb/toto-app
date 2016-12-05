/**
 * Created by snatvb on 05.12.16.
 */


var Adder = require('./adder.js');

/**
 * * Компонент для добавления дел
 * @class DealAdd
 * @extends BaseComponent
 * @param template
 * @param modelItem
 * @param {EventsView} parent
 * @constructor
 */
function DealAdd(template, modelItem, parent) {
    Adder.apply(this, arguments);
}


DealAdd.prototype = Object.create(Adder.prototype);
DealAdd.prototype.constructor = Adder;

var proto = DealAdd.prototype;

module.exports = DealAdd;