/**
 * Created by snatvb on 05.12.16.
 */



var BaseController = require('./BaseController.js');
var PersonsView = require('../views/persons.js');
var PersonsModel = require('../models/persons.js');

/**
 * @class PersonsController
 * @extends BaseController
 * @constructor
 */
function PersonsController () {
    BaseController.apply(this, arguments);
}

PersonsController.prototype = Object.create(BaseController.prototype);
PersonsController.prototype.constructor = BaseController;

var ECP = PersonsController.prototype;
ECP.init = function () {
    this.eventName = 'Persons';
    this.model = new PersonsModel;
    this.model.add({
        firstName: 'First Name',
        lastName: 'Last Name',
        phone: '+8 (999) 999-99-99',
        salary: 1000,
        position: 'CTO',
        department: 'Новая сфера',
        img: '/app/img/posts/1.jpg'
    });
    this.view = new PersonsView(this.model);
    this.view.render();

    this.listens();
};


module.exports = PersonsController;