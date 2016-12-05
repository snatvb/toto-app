/**
 * Created by snatvb on 04.12.16.
 */

var BaseComponent = require('./BaseComponent.js');

/**
 * Компонент для строки
 * @extends BaseComponent
 * @class ToDoRow
 * @constructor
 */
function ToDoRow () {
    BaseComponent.apply(this, arguments);
}


ToDoRow.prototype = Object.create(BaseComponent.prototype);
ToDoRow.prototype.constructor = BaseComponent;

var proto = ToDoRow.prototype;

proto.bindRender = function (template) {
    var self = this;
    template = Utils.htmlToElement(template);
    var remove = template.querySelector('.j-remove');

    remove.addEventListener('click', function(event) {
        event.preventDefault();
        self.remove();
    });
    return template;
};

proto.remove = function () {
    this.parentView.removeRow(this.modelItem);
    this.element.remove();
};

module.exports = ToDoRow;