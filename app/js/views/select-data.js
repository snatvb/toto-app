/**
 * Created by snatvb on 04.12.16.
 */


var BaseView = require('./BaseView.js');
var ItemSelectData = require('./components/item-select-data.js');

/**
 * Вьюха, которая отрисовывает события
 * @class SelectDataView
 * @extends BaseView
 * @param model
 * @constructor
 */
function SelectDataView(model) {
    this.className = 'SelectDataView';
    BaseView.apply(this, arguments);
}

SelectDataView.prototype = Object.create(BaseView.prototype);
SelectDataView.prototype.constructor = BaseView;

var proto = SelectDataView.prototype;

proto.init = function () {
    BaseView.prototype.init.apply(this, arguments);
    this.selectData = {
        Contacts: '.j-ContactsView',
        Persons: '.j-PersonsView',
        Deals: '.j-DealsView',
        Events: '.j-EventsView'
    };
    this.elementsSelect = [];
    this.titleBtn = 'Select Data';
};

proto.renderTemplate = function (tmpl) {
    var self = this;
    var rendered =  Utils.renderTemplate(tmpl, {title: this.titleBtn});
    rendered = Utils.htmlToElement(rendered);
    Utils.getTemplateComponent('select-data.html', function (tmplComponent) {
        self.renderList(rendered, tmplComponent);
    });
};

proto.renderList = function (tmpl, selectTmpl) {
    this.listContain = tmpl.querySelector('.j-items-select-data');
    for (var key in this.selectData) {
        if (!this.selectData.hasOwnProperty(key)) continue;
        var item = new ItemSelectData(selectTmpl, {title:key}, this);
        this.elementsSelect.push(item);
        this.listContain.appendChild(item.getComponent());
    }

    this.listeners(tmpl);
    this.element.appendChild(tmpl);
};

proto.listeners = function (tmpl) {
    var self = this;

    this.btn = tmpl.querySelector('.j-btn-select');
    this.btn.addEventListener('click', function (event) {
        event.preventDefault();
        self.toggleList(this);
    });
    document.body.addEventListener('click', function (event) {
        var parent = Utils.parentHtmlByClass(event.target, 'j-select-data-parent');
        if (!parent) {
            self.hideList();
        }
    });
};

proto.toggleList = function (btn) {
    if(!Utils.hasClass(btn, 'open')) {
        btn.classList.add('open');
        this.listContain.classList.add('show');
    } else {
        btn.classList.remove('open');
        this.listContain.classList.remove('show');
    }
};
proto.hideList = function () {
    this.btn.classList.remove('open');
    this.listContain.classList.remove('show');
};

proto.showView = function (keyShow) {
    Utils.changeHtml(this.btn, this.titleBtn);
    for (var key in this.selectData) {
        if (!this.selectData.hasOwnProperty(key)) continue;
        var classView = this.selectData[key];
        var block = document.querySelector(classView);

        if (!block) {
            console.warn('Selector ' + classView + ' is wrong.');
            continue;
        }

        if (key === keyShow) {
            Utils.changeHtml(this.btn, keyShow);
            block.classList.add('show');
        } else {
            block.classList.remove('show');
        }
    }
};


module.exports = SelectDataView;