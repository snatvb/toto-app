/**
 * Created by snatvb on 04.12.16.
 */


var BaseComponent = require('./BaseComponent.js');
var Adder = require('./adder.js');
var ModalImgView = require('../modal-img.js');

/**
 * * Компонент для добавления событий
 * @class EventAdd
 * @extends BaseComponent
 * @param template
 * @param modelItem
 * @param {EventsView} parent
 * @constructor
 */
function EventAdd(template, modelItem, parent) {
    Adder.apply(this, arguments);
}


EventAdd.prototype = Object.create(Adder.prototype);
EventAdd.prototype.constructor = Adder;

var proto = EventAdd.prototype;

module.exports = EventAdd;