/**
 * Created by snatvb on 05.12.16.
 */


var BaseModel = require('./BaseModel.js');
var Person = require('./model-items/person.js');

/**
 * Модель сотрудников
 * @extends BaseModel
 * @class ModelPersons
 * @constructor
 */
function ModelPersons () {
    BaseModel.apply(this, arguments);
    this.modelItem = Person;
}

ModelPersons.prototype = Object.create(BaseModel.prototype);
ModelPersons.prototype.constructor = BaseModel;

module.exports = ModelPersons;