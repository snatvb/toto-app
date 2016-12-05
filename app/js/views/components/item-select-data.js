/**
 * Created by snatvb on 04.12.16.
 */


var BaseComponent = require('./BaseComponent.js');

/**
 * Компонент для выбора
 * @extends BaseComponent
 * @class ItemSelectData
 * @constructor
 */
function ItemSelectData (template, modelItem, parent) {
    BaseComponent.apply(this, arguments);
    this.parentView = parent;
}


ItemSelectData.prototype = Object.create(BaseComponent.prototype);
ItemSelectData.prototype.constructor = BaseComponent;

var ERP = ItemSelectData.prototype;

ERP.bindRender = function (template) {
    var self = this;

    template = Utils.htmlToElement(template);

    template.addEventListener('click', function(event) {
        event.preventDefault();
        self.parentView.showView(self.modelItem.title);
        self.parentView.hideList();
    });
    return template;
};


module.exports = ItemSelectData;