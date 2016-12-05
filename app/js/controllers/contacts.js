/**
 * Created by snatvb on 04.12.16.
 */


var BaseController = require('./BaseController.js');
var ContactsView = require('../views/contacts.js');
var ContactsModel = require('../models/contacts.js');

/**
 * @class ContactsController
 * @extends BaseController
 * @constructor
 */
function ContactsController () {
    BaseController.apply(this, arguments);
}

ContactsController.prototype = Object.create(BaseController.prototype);
ContactsController.prototype.constructor = BaseController;

var ECP = ContactsController.prototype;
ECP.init = function () {
    this.eventName = 'Contacts';
    this.model = new ContactsModel;
    this.model.add({
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'E-mail',
        phone: '+8 (999) 999-99-99',
        img: '/app/img/posts/1.jpg'
    });
    this.view = new ContactsView(this.model);
    this.view.render();

    this.listens();
};


module.exports = ContactsController;