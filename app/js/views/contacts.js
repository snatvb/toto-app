/**
 * Created by snatvb on 04.12.16.
 */

var ToDoView = require('./ToDoView.js');
var ContactAdd = require('./components/contact-add.js');

/**
 * Вьюха, которая отрисовывает события
 * @class ContactsView
 * @extends ToDoView
 * @param model
 * @constructor
 */
function ContactsView(model) {
    this.className = 'ContactsView';
    this.addTemplate = 'contact-add.html';
    this.Adder = ContactAdd;
    ToDoView.apply(this, arguments);
}

ContactsView.prototype = Object.create(ToDoView.prototype);
ContactsView.prototype.constructor = ToDoView;

var proto = ContactsView.prototype;

module.exports = ContactsView;