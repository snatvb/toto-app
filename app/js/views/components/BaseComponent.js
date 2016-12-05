/**
 * Created by snatvb on 03.12.16.
 */

function BaseComponent (template, modelItem, parent) {
    this.template = template;
    this.modelItem = modelItem;
    this.parentView = parent;
    this.init();
}

BaseComponent.prototype = {
    init: function () {
        this.render();
    },
    render: function () {
        if(typeof this.template != 'string') {
            console.warn('Template is undefined');
            return;
        }
        var res = Utils.renderTemplate(this.template, this.modelItem);
        this.element = this.bindRender(res);
        return this.element;
    },
    setTemplate: function (template) {
        this.template = template;
    },
    bindRender: function (template) {
        template = Utils.htmlToElement(template);
        return template;
    },
    getComponent: function () {
        return this.element;
    }
};

module.exports = BaseComponent;