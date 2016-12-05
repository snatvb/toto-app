/**
 * Created by snatvb on 03.12.16.
 */

var BaseComponent = require('./BaseComponent.js');

/**
 * Компонент для строки событий
 * @extends BaseComponent
 * @class EventRow
 * @constructor
 */
function EventRow () {
    BaseComponent.apply(this, arguments);
}


EventRow.prototype = Object.create(BaseComponent.prototype);
EventRow.prototype.constructor = BaseComponent;

var ERP = EventRow.prototype;

ERP.bindRender = function (template) {
    var self = this;

    template = Utils.htmlToElement(template);
    var remove = template.querySelector('.j-remove');

    remove.addEventListener('click', function(event) {
        event.preventDefault();
        self.remove();
    });
    return template;
};

ERP.remove = function () {
    this.parentView.removeRow(this.modelItem);
    this.element.remove();
};

module.exports = EventRow;