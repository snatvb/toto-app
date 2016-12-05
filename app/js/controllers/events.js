/**
 * Created by snatvb on 03.12.16.
 */

var BaseController = require('./BaseController.js');
var EventsView = require('../views/events.js');
var EventsModel = require('../models/events.js');

function EventsController () {
    BaseController.apply(this, arguments);
}

EventsController.prototype = Object.create(BaseController.prototype);
EventsController.prototype.constructor = BaseController;

var ECP = EventsController.prototype;
ECP.init = function () {
    this.events = new EventsModel;
    this.events.add({
        img: '/app/img/posts/1.jpg',
        title: 'Поездка в горы',
        specials: 'Исследование',
        description: 'Было это давно'
    });
    this.events.add({
        img: '/app/img/posts/1.jpg',
        title: 'Поездка в горы 2',
        specials: 'Исследование',
        description: 'Было это давно'
    });
    this.eventsView = new EventsView(this.events);
    this.eventsView.render();

    this.listens();
    //this.getTemplate('components/event.html', function (template) {
    //    Utils.renderTemplate(template, {img: 'test'});
    //});
};

ECP.listens = function () {
    var self = this;

    AppEvents.on('Events.addData', function (data) {
        self.events.add(data);
        self.eventsView.render();
    });
};

module.exports = EventsController;