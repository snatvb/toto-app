/**
 * Created by snatvb on 05.12.16.
 */


var ToDoView = require('./ToDoView.js');
var ContactAdd = require('./components/person-add.js');

/**
 * Вьюха, которая отрисовывает кадры
 * @class PersonsView
 * @extends ToDoView
 * @param model
 * @constructor
 */
function PersonsView(model) {
    this.className = 'PersonsView';
    this.pathAddTemplate = 'person-add.html';
    this.pathRenderTemplate = 'person.html';
    this.Adder = ContactAdd;
    ToDoView.apply(this, arguments);
}

PersonsView.prototype = Object.create(ToDoView.prototype);
PersonsView.prototype.constructor = ToDoView;

var proto = PersonsView.prototype;

module.exports = PersonsView;