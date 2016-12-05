/**
 * Created by snatvb on 05.12.16.
 */

var BaseComponent = require('./BaseComponent.js');
var Adder = require('./adder.js');
var ModalImgView = require('../modal-img.js');

/**
 * * Компонент для добавления сотрудников
 * @class PersonAdd
 * @extends BaseComponent
 * @param template
 * @param modelItem
 * @param {EventsView} parent
 * @constructor
 */
function PersonAdd(template, modelItem, parent) {
    Adder.apply(this, arguments);
}


PersonAdd.prototype = Object.create(Adder.prototype);
PersonAdd.prototype.constructor = Adder;

var proto = PersonAdd.prototype;

module.exports = PersonAdd;