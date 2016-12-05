/**
 * Created by snatvb on 05.12.16.
 */

var BaseModel = require('./BaseModel.js');
var Deal = require('./model-items/deal.js');

/**
 * Модель дел
 * @extends BaseModel
 * @class ModelDeals
 * @constructor
 */
function ModelDeals () {
    BaseModel.apply(this, arguments);
    this.modelItem = Deal;
}

ModelDeals.prototype = Object.create(BaseModel.prototype);
ModelDeals.prototype.constructor = BaseModel;

module.exports = ModelDeals;