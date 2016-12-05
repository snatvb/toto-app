/**
 * Created by snatvb on 04.12.16.
 */

var Adder = require('./adder.js');

/**
 * * Компонент для добавления контактов
 * @class ContactAdd
 * @extends BaseComponent
 * @param template
 * @param modelItem
 * @param {EventsView} parent
 * @constructor
 */
function ContactAdd(template, modelItem, parent) {
    Adder.apply(this, arguments);
}


ContactAdd.prototype = Object.create(Adder.prototype);
ContactAdd.prototype.constructor = Adder;

var proto = ContactAdd.prototype;

module.exports = ContactAdd;