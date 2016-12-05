/**
 * Created by snatvb on 03.12.16.
 */

(function(global) {

    global.Utils = require('./utils');
    global.AppEvents = new (require('./events'));

    function App () {
        this.init();
    }

    App.prototype = {
        init: function () {
            var EventsController = require('./controllers/events.js');
            new EventsController;
            var SelectDataController = require('./controllers/select-data.js');
            new SelectDataController;
            var ContactsController = require('./controllers/contacts.js');
            new ContactsController;
            var PersonsController = require('./controllers/persons.js');
            new PersonsController;
            var DealController = require('./controllers/deals.js');
            new DealController;
        }
    };

    new App();

})(window);