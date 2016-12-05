/**
 * Created by snatvb on 04.12.16.
 */

var BaseModel = require('./BaseModel.js');
var Contacts = require('./model-items/contacts.js');

/**
 * Модель контактов
 * @extends BaseModel
 * @class ModelContacts
 * @constructor
 */
function ModelContacts () {
    BaseModel.apply(this, arguments);
    this.modelItem = Contacts;
}

ModelContacts.prototype = Object.create(BaseModel.prototype);
ModelContacts.prototype.constructor = BaseModel;

module.exports = ModelContacts;