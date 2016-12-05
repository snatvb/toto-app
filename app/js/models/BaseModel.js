/**
 * Created by snatvb on 03.12.16.
 */

function BaseModel () {
    this.data = [];
}

BaseModel.prototype = {
    getData: function () {
        return this.data || [];
    },
    add: function (data) {
        if(!(this.modelItem instanceof Object)) {
            console.warn('ModelItem is not Class');
            return;
        }
        this.data.push(new this.modelItem(data));
    },
    remove: function (item) {
        var index = this.data.indexOf(item);
        if(index !== -1) {
            this.data.splice(index, 1);
        } else {
            console.warn('Item in model data is not found');
        }
    }
};


module.exports = BaseModel;