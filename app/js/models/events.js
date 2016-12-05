/**
 * Created by snatvb on 03.12.16.
 */

var BaseModel = require('./BaseModel.js');
var Event = require('./model-items/event.js');

/**
 * Модель событий
 * @extends BaseModel
 * @class ModelEvents
 * @constructor
 */
function ModelEvents () {
    BaseModel.apply(this, arguments);
    this.modelItem = Event;
}

ModelEvents.prototype = Object.create(BaseModel.prototype);
ModelEvents.prototype.constructor = BaseModel;

module.exports = ModelEvents;