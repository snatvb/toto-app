/**
 * Created by snatvb on 03.12.16.
 */

var BaseView = require('./BaseView.js');
var EventRow = require('./components/event-row.js');
var EventAdd = require('./components/event-add.js');

/**
 * Вьюха, которая отрисовывает события
 * @class EventsView
 * @extends BaseView
 * @param model
 * @constructor
 */
function EventsView(model) {
    this.className = 'EventsView';
    BaseView.apply(this, arguments);
}

EventsView.prototype = Object.create(BaseView.prototype);
EventsView.prototype.constructor = BaseView;

var EVP = EventsView.prototype;

EVP.init = function () {
    BaseView.prototype.init.apply(this, arguments);
    this.eventRows = [];
};

EVP.renderTemplate = function (tmpl) {
    var self = this;
    var rendered =  Utils.renderTemplate(tmpl);
    rendered = Utils.htmlToElement(rendered);
    Utils.getTemplateComponent('event.html', function (tmplComponent) {
        self.renderRowsEvents(rendered, tmplComponent);
    });
};

EVP.renderEventAdd = function (tmpl, tmplComponent) {
    var eventAdd = new EventAdd(tmplComponent, {}, this);

    tmpl.appendChild(eventAdd.getComponent());

    this.endRender(tmpl);
};

EVP.endRender = function (tmpl) {

    if (this.element) {
        this.element.appendChild(tmpl);
    }
    if(this._showRows) {
        this.showRows();
    }
};
EVP.renderRowsEvents = function (tmpl, componentTmpl) {
    var self = this;
    var data = this.model.getData(); // получаем данные

    this.element.innerHTML = ''; // очистим

    for (var i = 0, max = data.length; i < max; i++) {
        var event = data[i];
        var evRow = new EventRow(componentTmpl, event, this);
        this.eventsBlock = tmpl.querySelector('.j-events-rows');
        this.eventRows.push(evRow);
        this.eventsBlock.appendChild(evRow.getComponent());
    }

    Utils.getTemplateComponent('event-add.html', function (tmplComponent) {
        self.renderEventAdd(tmpl, tmplComponent);
    });
};

EVP.showRows = function () {
    if(!this.eventsBlock) {
        console.warn('Events rows with class "j-events-rows" is not found.');
        return;
    }
    if(!Utils.hasClass(this.eventsBlock, 'show')) {
        this.eventsBlock.classList.add('show');
        this._showRows = true;
    }
};

EVP.removeRow = function (modelItem) {
    this.model.remove(modelItem);
};

module.exports = EventsView;