/**
 * Created by snatvb on 03.12.16.
 */

/**
 * Это класс, для наследования
 * другими представлениями
 * @class BaseView
 * @param model
 * @constructor
 */
function BaseView(model) {
    if (typeof this.className != 'string') {
        this.className = 'BaseView';
    }
    this.model = model;
    this.init();
}

BaseView.prototype = {
    init: function () {
        this.initDom();
    },
    initDom: function () {
        this.element = document.querySelector('.j-' + this.className);
    },
    render: function () {
        var self = this;
        Utils.getTemplate(this.getTemplatePath(), function(tmpl){
            self.renderTemplate(tmpl);
        });
    },
    renderTemplate: function (tmpl) {

    },
    getTemplatePath: function () {
        var result = this.className.toLocaleLowerCase();
        result = result.replace('view', '');
        return result.toLocaleLowerCase() + '.html';
    }
};

module.exports = BaseView;