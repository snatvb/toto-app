/**
 * Created by snatvb on 05.12.16.
 */



var BaseController = require('./BaseController.js');
var DealsView = require('../views/deals.js');
var DealsModel = require('../models/deals.js');

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
    this.eventName = 'Deals';
    this.model = new DealsModel;
    this.model.add({
        title: 'Сделать звонок',
        description: 'Запросить товары',
        company: 'ООО Склад НеоТехникс',
        phone: '+7 (800) 999-99-99'
    });
    this.view = new DealsView(this.model);
    this.view.render();

    this.listens();
};


module.exports = PersonsController;