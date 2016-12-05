/**
 * Created by snatvb on 05.12.16.
 */

var ToDoView = require('./ToDoView.js');
var DealAdd = require('./components/deal-add.js');

/**
 * Вьюха, которая отрисовывает дела
 * @class DealsView
 * @extends ToDoView
 * @param model
 * @constructor
 */
function DealsView(model) {
    this.className = 'DealsView';
    this.pathAddTemplate = 'deal-add.html';
    this.pathRenderTemplate = 'deal.html';
    this.Adder = DealAdd;
    ToDoView.apply(this, arguments);
}

DealsView.prototype = Object.create(ToDoView.prototype);
DealsView.prototype.constructor = ToDoView;

var proto = DealsView.prototype;

module.exports = DealsView;