/**
 * Created by snatvb on 04.12.16.
 */


var BaseComponent = require('./BaseComponent.js');

/**
 * Просто модалка
 * @param template
 * @param modelItem
 * @param parent
 * @class ModalComponent
 * @extends BaseComponent
 * @constructor
 */
function ModalComponent(template, modelItem, parent) {
    BaseComponent.apply(this, arguments);
}

ModalComponent.prototype = Object.create(BaseComponent.prototype);
ModalComponent.prototype.constructor = BaseComponent;

var proto = ModalComponent.prototype;

proto.bindRender = function (template) {
    var self = this;
    template = Utils.htmlToElement(template);

    template.addEventListener('click', function (event) {
        event.preventDefault();
        var parent = Utils.parentHtmlByClass(event.target, 'j-container-modal');
        if (!parent) {
            self.remove();
        }
    });

    return template;
};

proto.remove = function () {
    this.parentView.removeModal();
    this.element.remove();
};

module.exports = ModalComponent;