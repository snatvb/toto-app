/**
 * Created by snatvb on 03.12.16.
 */

function BaseController() {
    this.init();
}

BaseController.prototype = {
    init: function () {
        this.eventName = 'BaseController';
        this.listens();
    },
    listens: function () {
        var self = this;

        AppEvents.on(this.eventName + '.addData', function (data) {
            self.model.add(data);
            self.view.render();
        });
    }
};

module.exports = BaseController;