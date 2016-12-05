/**
 * Created by snatvb on 04.12.16.
 */


var BaseView = require('./BaseView.js');
var ToDoRow = require('./components/todo-row.js');
var Adder = require('./components/adder.js');

/**
 * Вьюха, которая отрисовывает события
 * @class ToDoView
 * @extends BaseView
 * @param model
 * @constructor
 */
function ToDoView(model) {
    this.className = this.className || 'ToDoView';
    BaseView.apply(this, arguments);
    this.Adder = this.Adder || Adder;
    this.ToDoRow = this.ToDoRow || ToDoRow;
    this.pathAddTemplate = this.pathAddTemplate || 'contact-add.html';
    this.pathRenderTemplate = this.pathRenderTemplate || 'contact.html';
}

ToDoView.prototype = Object.create(BaseView.prototype);
ToDoView.prototype.constructor = BaseView;

var proto = ToDoView.prototype;

proto.init = function () {
    BaseView.prototype.init.apply(this, arguments);
    this.rows = [];
};

proto.renderTemplate = function (tmpl) {
    var self = this;
    var rendered =  Utils.renderTemplate(tmpl);
    rendered = Utils.htmlToElement(rendered);
    Utils.getTemplateComponent(this.pathRenderTemplate, function (tmplComponent) {
        self.renderRows(rendered, tmplComponent);
    });
};

proto.renderAdder = function (tmpl, tmplComponent) {
    var adder = new this.Adder(tmplComponent, {}, this);

    tmpl.appendChild(adder.getComponent());

    this.endRender(tmpl);
};

proto.endRender = function (tmpl) {

    if (this.element) {
        this.element.appendChild(tmpl);
    }
    if(this._showRows) {
        this.showRows();
    }
};
proto.renderRows = function (tmpl, componentTmpl) {
    var self = this;
    var data = this.model.getData(); // получаем данные

    this.element.innerHTML = ''; // очистим

    for (var i = 0, max = data.length; i < max; i++) {
        var rowData = data[i];
        var row = new this.ToDoRow(componentTmpl, rowData, this);
        this.rowsBlock = tmpl.querySelector('.j--rows');
        this.rows.push(row);
        this.rowsBlock.appendChild(row.getComponent());
    }

    Utils.getTemplateComponent(this.pathAddTemplate, function (tmplComponent) {
        self.renderAdder(tmpl, tmplComponent);
    });
};

proto.showRows = function () {
    if(!this.rowsBlock) {
        console.warn('Rows with class "j--rows" is not found.');
        return;
    }
    if(!Utils.hasClass(this.rowsBlock, 'show')) {
        this.rowsBlock.classList.add('show');
        this._showRows = true;
    }
};

proto.removeRow = function (modelItem) {
    this.model.remove(modelItem);
};

module.exports = ToDoView;