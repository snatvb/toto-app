/**
 * Created by snatvb on 04.12.16.
 */


var BaseController = require('./BaseController.js');
var SelectDataView = require('../views/select-data.js');

/**
 * Контроллер выподающего списка
 * @extends BaseController
 * @class SelectDataController
 * @constructor
 */
function SelectDataController () {
    BaseController.apply(this, arguments);
}

SelectDataController.prototype = Object.create(BaseController.prototype);
SelectDataController.prototype.constructor = BaseController;

var proto = SelectDataController.prototype;
proto.init = function () {
    this.selectDataView = new SelectDataView;
    this.selectDataView.render();
};

module.exports = SelectDataController;