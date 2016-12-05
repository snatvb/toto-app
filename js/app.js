(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers/BaseController.js","/controllers")
},{"buffer":39,"rH1JPG":41}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers/contacts.js","/controllers")
},{"../models/contacts.js":10,"../views/contacts.js":32,"./BaseController.js":1,"buffer":39,"rH1JPG":41}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers/deals.js","/controllers")
},{"../models/deals.js":11,"../views/deals.js":33,"./BaseController.js":1,"buffer":39,"rH1JPG":41}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 03.12.16.
 */

var BaseController = require('./BaseController.js');
var EventsView = require('../views/events.js');
var EventsModel = require('../models/events.js');

function EventsController () {
    BaseController.apply(this, arguments);
}

EventsController.prototype = Object.create(BaseController.prototype);
EventsController.prototype.constructor = BaseController;

var ECP = EventsController.prototype;
ECP.init = function () {
    this.events = new EventsModel;
    this.events.add({
        img: '/app/img/posts/1.jpg',
        title: 'Поездка в горы',
        specials: 'Исследование',
        description: 'Было это давно'
    });
    this.events.add({
        img: '/app/img/posts/1.jpg',
        title: 'Поездка в горы 2',
        specials: 'Исследование',
        description: 'Было это давно'
    });
    this.eventsView = new EventsView(this.events);
    this.eventsView.render();

    this.listens();
    //this.getTemplate('components/event.html', function (template) {
    //    Utils.renderTemplate(template, {img: 'test'});
    //});
};

ECP.listens = function () {
    var self = this;

    AppEvents.on('Events.addData', function (data) {
        self.events.add(data);
        self.eventsView.render();
    });
};

module.exports = EventsController;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers/events.js","/controllers")
},{"../models/events.js":12,"../views/events.js":34,"./BaseController.js":1,"buffer":39,"rH1JPG":41}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 05.12.16.
 */



var BaseController = require('./BaseController.js');
var PersonsView = require('../views/persons.js');
var PersonsModel = require('../models/persons.js');

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
    this.eventName = 'Persons';
    this.model = new PersonsModel;
    this.model.add({
        firstName: 'First Name',
        lastName: 'Last Name',
        phone: '+8 (999) 999-99-99',
        salary: 1000,
        position: 'CTO',
        department: 'Новая сфера',
        img: '/app/img/posts/1.jpg'
    });
    this.view = new PersonsView(this.model);
    this.view.render();

    this.listens();
};


module.exports = PersonsController;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers/persons.js","/controllers")
},{"../models/persons.js":17,"../views/persons.js":36,"./BaseController.js":1,"buffer":39,"rH1JPG":41}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers/select-data.js","/controllers")
},{"../views/select-data.js":37,"./BaseController.js":1,"buffer":39,"rH1JPG":41}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 04.12.16.
 */


var Events = function () {
    return this.init();
};

Events.prototype = {
    init: function () {
        this.ev = [];
        return this;
    },
    on: function (eventName, f) {
        if (!f) return;
        var e = {
            name: eventName,
            f: f
        };
        this.ev.push(e);
    },
    trigger: function (eventName, args) {
        for (var i = 0; i < this.ev.length; i++) {
            if (this.ev[i].name == eventName) {
                this.ev[i].f(args);
            }
        }
    }
};

module.exports = Events;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/events.js","/")
},{"buffer":39,"rH1JPG":41}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_7ce7fd92.js","/")
},{"./controllers/contacts.js":2,"./controllers/deals.js":3,"./controllers/events.js":4,"./controllers/persons.js":5,"./controllers/select-data.js":6,"./events":7,"./utils":18,"buffer":39,"rH1JPG":41}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/models/BaseModel.js","/models")
},{"buffer":39,"rH1JPG":41}],10:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/models/contacts.js","/models")
},{"./BaseModel.js":9,"./model-items/contacts.js":13,"buffer":39,"rH1JPG":41}],11:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/models/deals.js","/models")
},{"./BaseModel.js":9,"./model-items/deal.js":14,"buffer":39,"rH1JPG":41}],12:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/models/events.js","/models")
},{"./BaseModel.js":9,"./model-items/event.js":15,"buffer":39,"rH1JPG":41}],13:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 04.12.16.
 */

function Event (data) {
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.email = data.email || 'E-mail не указан';
    this.phone = data.phone || '';
    this.img = data.img;
}

Event.prototype = {};

module.exports = Event;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/models/model-items/contacts.js","/models/model-items")
},{"buffer":39,"rH1JPG":41}],14:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 05.12.16.
 */

function Deal (data) {
    this.title = data.title || '';
    this.description = data.description || '';
    this.company = data.company || '';
    this.phone = data.phone || '';
}


module.exports = Deal;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/models/model-items/deal.js","/models/model-items")
},{"buffer":39,"rH1JPG":41}],15:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 03.12.16.
 */

/**
 * События
 * @param {Object} data
 * @class Event
 * @constructor
 */
function Event (data) {
    this.title = data.title || '';
    this.specials = data.specials || '';
    this.description = data.description || '';
    this.img = data.img;
}

Event.prototype = {};

module.exports = Event;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/models/model-items/event.js","/models/model-items")
},{"buffer":39,"rH1JPG":41}],16:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 05.12.16.
 */

function Person (data) {
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.phone = data.phone || 'E-mail не указан';
    this.salary = data.salary || 0;
    this.position = data.position || 'Без должности';
    this.department = data.department || '';
    this.img = data.img;


    var self = this;
    this.salaryFormat = function () {
        return self.salary + ' руб.'
    }
}

Person.prototype = {
};

module.exports = Person;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/models/model-items/person.js","/models/model-items")
},{"buffer":39,"rH1JPG":41}],17:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/models/persons.js","/models")
},{"./BaseModel.js":9,"./model-items/person.js":16,"buffer":39,"rH1JPG":41}],18:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 03.12.16.
 */

var Utils = {
    renderTemplate: function (template, data) {
        var ptn = /\{\{\s*[a-zA-Z0-9._/:-]+?\s*\}\}/g;

        for (var key in data) {
            if (!data.hasOwnProperty(key)) continue;
            var value = data[key];
            //console.log(typeof key, value);
            if (typeof value == 'function') {
                value = value();
            }

            template = template.replace(new RegExp('{{' + key + '}}', 'g'), value);
        }
        template = template.replace(ptn, '');

        return template;
    },
    /**
     * Заменяем hmtl теги на безопасные символы
     * @param str
     * @returns {*}
     */
    escape: function (str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    },
    getTemplate: function (path, callBack) {
        var xhr = new XMLHttpRequest();


        xhr.open('GET', '/app/templates/' + path);


        xhr.onload = function () {
            if (xhr.status != 200) {
                console.error(xhr.status + ': ' + xhr.statusText, '/app/templates/' + path);
            } else {
                if (typeof callBack == 'function') {
                    callBack(xhr.responseText);
                }
            }
        };

        xhr.send();
    },
    getTemplateComponent: function (path, callBack) {
        this.getTemplate('components/' + path, callBack);
    },
    htmlToElement: function (html) {
        var template = document.createElement('template');
        template.innerHTML = html;
        return template.content.firstChild;
    },
    hasClass: function (html, className) {
        return html.className.indexOf(className) !== -1;
    },
    parentHtmlByClass: function (html, className) {
        var currElement = html;
        while (currElement.parentElement) {
            currElement = currElement.parentElement;
            if (this.hasClass(currElement, className)) {
                return currElement;
            }
        }
    },
    elementsByAttr: function (attribute, block) {
        var matchingElements = [];
        var allElements = block.getElementsByTagName('*');
        for (var i = 0, n = allElements.length; i < n; i++) {
            if (allElements[i].getAttribute(attribute) !== null) {
                // Element exists with attribute. Add to array.
                matchingElements.push(allElements[i]);
            }
        }
        return matchingElements;
    },
    validate: function (element) {
        var required = typeof element.getAttribute('required') == 'string';
        if (required && !element.value) {
            return false;
        }

        if (element.getAttribute('type') == 'email' && !!element.value) {
            if (!this.emialValid(element.value)) {
                return false;
            }
        }

        if (element.getAttribute('type') == 'tel' && !!element.value) {
            if (!this.phoneValid(element.value)) {
                return false;
            }
        }

        if (element.getAttribute('type') == 'number' && !!element.value) {
            if (!this.isNum(element.value)) {
                return false;
            }
        }

        return true;
    },
    emialValid: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    phoneValid: function (phone) {
        phone = phone.replace(/[^0-9]/gim,'');
        var re = /^((8|7|3)[\- ]?)(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/;
        return re.test(phone);
    },
    isNum: function (str) {
        str = str.trim();
        var re = /^[0-9]*$/;
        return re.test(str);
    },
    changeHtml: function (element, str) {
        if (element) {
            element.innerHTML = str;
        }
    }
};

module.exports = Utils;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/utils.js","/")
},{"buffer":39,"rH1JPG":41}],19:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 03.12.16.
 */

/**
 * Это класс, для наследования
 * другими представлениями
 * @class BaseView
 * @param model
 * @constructor
 */
function BaseView(model) {
    if (typeof this.className != 'string') {
        this.className = 'BaseView';
    }
    this.model = model;
    this.init();
}

BaseView.prototype = {
    init: function () {
        this.initDom();
    },
    initDom: function () {
        this.element = document.querySelector('.j-' + this.className);
    },
    render: function () {
        var self = this;
        Utils.getTemplate(this.getTemplatePath(), function(tmpl){
            self.renderTemplate(tmpl);
        });
    },
    renderTemplate: function (tmpl) {

    },
    getTemplatePath: function () {
        var result = this.className.toLocaleLowerCase();
        result = result.replace('view', '');
        return result.toLocaleLowerCase() + '.html';
    }
};

module.exports = BaseView;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/BaseView.js","/views")
},{"buffer":39,"rH1JPG":41}],20:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 04.12.16.
 */


var BaseView = require('./BaseView.js');
var ToDoRow = require('./components/todo-row.js');
var Adder = require('./components/adder.js');

/**
 * Вьюха, которая отрисовывает события
 * @class ToDoView
 * @extends BaseView
 * @param model
 * @constructor
 */
function ToDoView(model) {
    this.className = this.className || 'ToDoView';
    BaseView.apply(this, arguments);
    this.Adder = this.Adder || Adder;
    this.ToDoRow = this.ToDoRow || ToDoRow;
    this.pathAddTemplate = this.pathAddTemplate || 'contact-add.html';
    this.pathRenderTemplate = this.pathRenderTemplate || 'contact.html';
}

ToDoView.prototype = Object.create(BaseView.prototype);
ToDoView.prototype.constructor = BaseView;

var proto = ToDoView.prototype;

proto.init = function () {
    BaseView.prototype.init.apply(this, arguments);
    this.rows = [];
};

proto.renderTemplate = function (tmpl) {
    var self = this;
    var rendered =  Utils.renderTemplate(tmpl);
    rendered = Utils.htmlToElement(rendered);
    Utils.getTemplateComponent(this.pathRenderTemplate, function (tmplComponent) {
        self.renderRows(rendered, tmplComponent);
    });
};

proto.renderAdder = function (tmpl, tmplComponent) {
    var adder = new this.Adder(tmplComponent, {}, this);

    tmpl.appendChild(adder.getComponent());

    this.endRender(tmpl);
};

proto.endRender = function (tmpl) {

    if (this.element) {
        this.element.appendChild(tmpl);
    }
    if(this._showRows) {
        this.showRows();
    }
};
proto.renderRows = function (tmpl, componentTmpl) {
    var self = this;
    var data = this.model.getData(); // получаем данные

    this.element.innerHTML = ''; // очистим

    for (var i = 0, max = data.length; i < max; i++) {
        var rowData = data[i];
        var row = new this.ToDoRow(componentTmpl, rowData, this);
        this.rowsBlock = tmpl.querySelector('.j--rows');
        this.rows.push(row);
        this.rowsBlock.appendChild(row.getComponent());
    }

    Utils.getTemplateComponent(this.pathAddTemplate, function (tmplComponent) {
        self.renderAdder(tmpl, tmplComponent);
    });
};

proto.showRows = function () {
    if(!this.rowsBlock) {
        console.warn('Rows with class "j--rows" is not found.');
        return;
    }
    if(!Utils.hasClass(this.rowsBlock, 'show')) {
        this.rowsBlock.classList.add('show');
        this._showRows = true;
    }
};

proto.removeRow = function (modelItem) {
    this.model.remove(modelItem);
};

module.exports = ToDoView;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/ToDoView.js","/views")
},{"./BaseView.js":19,"./components/adder.js":22,"./components/todo-row.js":31,"buffer":39,"rH1JPG":41}],21:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 03.12.16.
 */

function BaseComponent (template, modelItem, parent) {
    this.template = template;
    this.modelItem = modelItem;
    this.parentView = parent;
    this.init();
}

BaseComponent.prototype = {
    init: function () {
        this.render();
    },
    render: function () {
        if(typeof this.template != 'string') {
            console.warn('Template is undefined');
            return;
        }
        var res = Utils.renderTemplate(this.template, this.modelItem);
        this.element = this.bindRender(res);
        return this.element;
    },
    setTemplate: function (template) {
        this.template = template;
    },
    bindRender: function (template) {
        template = Utils.htmlToElement(template);
        return template;
    },
    getComponent: function () {
        return this.element;
    }
};

module.exports = BaseComponent;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/components/BaseComponent.js","/views/components")
},{"buffer":39,"rH1JPG":41}],22:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 04.12.16.
 */

var BaseComponent = require('./BaseComponent.js');
var ModalImgView = require('../modal-img.js');

/**
 * * Компонент для добавления чего-либо
 * @class Adder
 * @extends BaseComponent
 * @param template
 * @param modelItem
 * @param {ToDoView} parent
 * @constructor
 */
function Adder(template, modelItem, parent) {
    BaseComponent.apply(this, arguments);
    this.parentView = parent;

    this.imgs = [
        {img: "https://c2.staticflickr.com/4/3117/3175014052_7484da1205_z.jpg"},
        {img: "https://c2.staticflickr.com/4/3262/3175014554_db597bbb73_z.jpg"},
        {img: "https://c2.staticflickr.com/4/3670/8813562512_229f5cf24a_z.jpg"},
        {img: "https://c1.staticflickr.com/9/8440/7787237516_b46aa5fabb_c.jpg"},
        {img: "https://c2.staticflickr.com/4/3404/3449526371_0454515b13_z.jpg"},
        {img: "https://c2.staticflickr.com/4/3602/3450323658_ab5961a0aa_z.jpg"},
        {img: "https://c1.staticflickr.com/3/2491/3751647375_4695b378de_z.jpg"},
        {img: "https://c1.staticflickr.com/3/2443/3752426198_ebe03fa615_z.jpg"},
        {img: "https://c2.staticflickr.com/2/1032/3175022066_57fce505be_z.jpg"},
        {img: "https://c1.staticflickr.com/3/2528/3751624573_08815f8950_z.jpg"}
    ];
}


Adder.prototype = Object.create(BaseComponent.prototype);
Adder.prototype.constructor = BaseComponent;

var ERP = Adder.prototype;

ERP.bindRender = function (template) {
    var self = this;
    template = Utils.htmlToElement(template);

    this.initHtml(template);

    this.showBtn.addEventListener('click', function (event) {
        event.preventDefault();
        self.parentView.showRows();
    });
    this.addBtn.addEventListener('click', function (event) {
        event.preventDefault();
        self.add();
    });
    if(this.addPhoto) {
        this.addPhoto.addEventListener('click', function (event) {
            event.preventDefault();
            self.showModalImg();
        });
    }

    return template;
};

ERP.initHtml = function (template) {
    this.showBtn = template.querySelector('.j-show-list');
    this.addBtn = template.querySelector('.j-add-event');
    this.addPhoto = template.querySelector('.j-add-photo');
    this.imgInput = template.querySelector('.j-img-input');
    this.addImg = template.querySelector('.j-add-img');
};

ERP.remove = function () {
    this.element.remove();
};

ERP.collectData = function () {
    var data = {};
    var valid = true;
    var elements = Utils.elementsByAttr('name', this.element);
    for (var i = 0, max = elements.length; i < max; i++) {
        var element = elements[i];
        var name = element.getAttribute('name');
        if (!Utils.validate(element)) {
            valid = false;
            element.classList.add('invalid');
            if (name === 'img') {
                this.addPhoto.classList.add('invalid');
            }
            continue;
        } else {
            element.classList.remove('invalid');
        }

        data[name] = element.value;
    }
    return valid ? data : null;
};

ERP.add = function () {
    var data = this.collectData();
    if (!data) {
        console.warn('Invalid data');
    } else {
        var eventName = this.parentView.className.replace('View', '');
        AppEvents.trigger(eventName + '.addData', data);
    }
};

ERP.showModalImg = function () {
    new ModalImgView(this.imgs, this);
};

ERP.chooseImg = function (index) {
    if(!this.imgs[index]) {
        console.warn('Image with index ' + index + ' is no found.');
        return;
    }
    this.unselectImgs();
    this.imgs[index].select = 'selected';
    this.imgInput.value = this.imgs[index].img;
    this.addImg.setAttribute('src', this.imgs[index].img);

};

ERP.unselectImgs = function () {
    for (var i = 0, max = this.imgs.length; i < max; i++) {
        var img = this.imgs[i];
        delete img.select;
    }
};

module.exports = Adder;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/components/adder.js","/views/components")
},{"../modal-img.js":35,"./BaseComponent.js":21,"buffer":39,"rH1JPG":41}],23:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 04.12.16.
 */

var Adder = require('./adder.js');

/**
 * * Компонент для добавления контактов
 * @class ContactAdd
 * @extends BaseComponent
 * @param template
 * @param modelItem
 * @param {EventsView} parent
 * @constructor
 */
function ContactAdd(template, modelItem, parent) {
    Adder.apply(this, arguments);
}


ContactAdd.prototype = Object.create(Adder.prototype);
ContactAdd.prototype.constructor = Adder;

var proto = ContactAdd.prototype;

module.exports = ContactAdd;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/components/contact-add.js","/views/components")
},{"./adder.js":22,"buffer":39,"rH1JPG":41}],24:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 05.12.16.
 */


var Adder = require('./adder.js');

/**
 * * Компонент для добавления дел
 * @class DealAdd
 * @extends BaseComponent
 * @param template
 * @param modelItem
 * @param {EventsView} parent
 * @constructor
 */
function DealAdd(template, modelItem, parent) {
    Adder.apply(this, arguments);
}


DealAdd.prototype = Object.create(Adder.prototype);
DealAdd.prototype.constructor = Adder;

var proto = DealAdd.prototype;

module.exports = DealAdd;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/components/deal-add.js","/views/components")
},{"./adder.js":22,"buffer":39,"rH1JPG":41}],25:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 04.12.16.
 */


var BaseComponent = require('./BaseComponent.js');
var Adder = require('./adder.js');
var ModalImgView = require('../modal-img.js');

/**
 * * Компонент для добавления событий
 * @class EventAdd
 * @extends BaseComponent
 * @param template
 * @param modelItem
 * @param {EventsView} parent
 * @constructor
 */
function EventAdd(template, modelItem, parent) {
    Adder.apply(this, arguments);
}


EventAdd.prototype = Object.create(Adder.prototype);
EventAdd.prototype.constructor = Adder;

var proto = EventAdd.prototype;

module.exports = EventAdd;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/components/event-add.js","/views/components")
},{"../modal-img.js":35,"./BaseComponent.js":21,"./adder.js":22,"buffer":39,"rH1JPG":41}],26:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 03.12.16.
 */

var BaseComponent = require('./BaseComponent.js');

/**
 * Компонент для строки событий
 * @extends BaseComponent
 * @class EventRow
 * @constructor
 */
function EventRow () {
    BaseComponent.apply(this, arguments);
}


EventRow.prototype = Object.create(BaseComponent.prototype);
EventRow.prototype.constructor = BaseComponent;

var ERP = EventRow.prototype;

ERP.bindRender = function (template) {
    var self = this;

    template = Utils.htmlToElement(template);
    var remove = template.querySelector('.j-remove');

    remove.addEventListener('click', function(event) {
        event.preventDefault();
        self.remove();
    });
    return template;
};

ERP.remove = function () {
    this.parentView.removeRow(this.modelItem);
    this.element.remove();
};

module.exports = EventRow;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/components/event-row.js","/views/components")
},{"./BaseComponent.js":21,"buffer":39,"rH1JPG":41}],27:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 04.12.16.
 */

var BaseComponent = require('./BaseComponent.js');

/**
 * Это компонент для выбора картинки в модалке
 * @extends BaseComponent
 * @calss ImgModal
 * @param template
 * @param modelItem
 * @param parent
 * @constructor
 */
function ImgModal(template, modelItem, parent) {
    BaseComponent.apply(this, arguments);
}

ImgModal.prototype = Object.create(BaseComponent.prototype);
ImgModal.prototype.constructor = BaseComponent;
var proto = ImgModal.prototype;

proto.bindRender = function (template) {
    var self = this;
    template = Utils.htmlToElement(template);

    this.imgBlock = template.querySelector('.j-img-for-choose');
    this.imgBlock.addEventListener('click', function (event) {
        event.preventDefault();
        self.parentView.chooseImg(self.modelItem);
    });
    return template;
};

module.exports = ImgModal;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/components/img-modal.js","/views/components")
},{"./BaseComponent.js":21,"buffer":39,"rH1JPG":41}],28:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 04.12.16.
 */


var BaseComponent = require('./BaseComponent.js');

/**
 * Компонент для выбора
 * @extends BaseComponent
 * @class ItemSelectData
 * @constructor
 */
function ItemSelectData (template, modelItem, parent) {
    BaseComponent.apply(this, arguments);
    this.parentView = parent;
}


ItemSelectData.prototype = Object.create(BaseComponent.prototype);
ItemSelectData.prototype.constructor = BaseComponent;

var ERP = ItemSelectData.prototype;

ERP.bindRender = function (template) {
    var self = this;

    template = Utils.htmlToElement(template);

    template.addEventListener('click', function(event) {
        event.preventDefault();
        self.parentView.showView(self.modelItem.title);
        self.parentView.hideList();
    });
    return template;
};


module.exports = ItemSelectData;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/components/item-select-data.js","/views/components")
},{"./BaseComponent.js":21,"buffer":39,"rH1JPG":41}],29:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 04.12.16.
 */


var BaseComponent = require('./BaseComponent.js');

/**
 * Просто модалка
 * @param template
 * @param modelItem
 * @param parent
 * @class ModalComponent
 * @extends BaseComponent
 * @constructor
 */
function ModalComponent(template, modelItem, parent) {
    BaseComponent.apply(this, arguments);
}

ModalComponent.prototype = Object.create(BaseComponent.prototype);
ModalComponent.prototype.constructor = BaseComponent;

var proto = ModalComponent.prototype;

proto.bindRender = function (template) {
    var self = this;
    template = Utils.htmlToElement(template);

    template.addEventListener('click', function (event) {
        event.preventDefault();
        var parent = Utils.parentHtmlByClass(event.target, 'j-container-modal');
        if (!parent) {
            self.remove();
        }
    });

    return template;
};

proto.remove = function () {
    this.parentView.removeModal();
    this.element.remove();
};

module.exports = ModalComponent;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/components/modal.js","/views/components")
},{"./BaseComponent.js":21,"buffer":39,"rH1JPG":41}],30:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 05.12.16.
 */

var BaseComponent = require('./BaseComponent.js');
var Adder = require('./adder.js');
var ModalImgView = require('../modal-img.js');

/**
 * * Компонент для добавления сотрудников
 * @class PersonAdd
 * @extends BaseComponent
 * @param template
 * @param modelItem
 * @param {EventsView} parent
 * @constructor
 */
function PersonAdd(template, modelItem, parent) {
    Adder.apply(this, arguments);
}


PersonAdd.prototype = Object.create(Adder.prototype);
PersonAdd.prototype.constructor = Adder;

var proto = PersonAdd.prototype;

module.exports = PersonAdd;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/components/person-add.js","/views/components")
},{"../modal-img.js":35,"./BaseComponent.js":21,"./adder.js":22,"buffer":39,"rH1JPG":41}],31:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 04.12.16.
 */

var BaseComponent = require('./BaseComponent.js');

/**
 * Компонент для строки
 * @extends BaseComponent
 * @class ToDoRow
 * @constructor
 */
function ToDoRow () {
    BaseComponent.apply(this, arguments);
}


ToDoRow.prototype = Object.create(BaseComponent.prototype);
ToDoRow.prototype.constructor = BaseComponent;

var proto = ToDoRow.prototype;

proto.bindRender = function (template) {
    var self = this;
    template = Utils.htmlToElement(template);
    var remove = template.querySelector('.j-remove');

    remove.addEventListener('click', function(event) {
        event.preventDefault();
        self.remove();
    });
    return template;
};

proto.remove = function () {
    this.parentView.removeRow(this.modelItem);
    this.element.remove();
};

module.exports = ToDoRow;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/components/todo-row.js","/views/components")
},{"./BaseComponent.js":21,"buffer":39,"rH1JPG":41}],32:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 04.12.16.
 */

var ToDoView = require('./ToDoView.js');
var ContactAdd = require('./components/contact-add.js');

/**
 * Вьюха, которая отрисовывает события
 * @class ContactsView
 * @extends ToDoView
 * @param model
 * @constructor
 */
function ContactsView(model) {
    this.className = 'ContactsView';
    this.addTemplate = 'contact-add.html';
    this.Adder = ContactAdd;
    ToDoView.apply(this, arguments);
}

ContactsView.prototype = Object.create(ToDoView.prototype);
ContactsView.prototype.constructor = ToDoView;

var proto = ContactsView.prototype;

module.exports = ContactsView;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/contacts.js","/views")
},{"./ToDoView.js":20,"./components/contact-add.js":23,"buffer":39,"rH1JPG":41}],33:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 05.12.16.
 */

var ToDoView = require('./ToDoView.js');
var DealAdd = require('./components/deal-add.js');

/**
 * Вьюха, которая отрисовывает дела
 * @class DealsView
 * @extends ToDoView
 * @param model
 * @constructor
 */
function DealsView(model) {
    this.className = 'DealsView';
    this.pathAddTemplate = 'deal-add.html';
    this.pathRenderTemplate = 'deal.html';
    this.Adder = DealAdd;
    ToDoView.apply(this, arguments);
}

DealsView.prototype = Object.create(ToDoView.prototype);
DealsView.prototype.constructor = ToDoView;

var proto = DealsView.prototype;

module.exports = DealsView;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/deals.js","/views")
},{"./ToDoView.js":20,"./components/deal-add.js":24,"buffer":39,"rH1JPG":41}],34:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 03.12.16.
 */

var BaseView = require('./BaseView.js');
var EventRow = require('./components/event-row.js');
var EventAdd = require('./components/event-add.js');

/**
 * Вьюха, которая отрисовывает события
 * @class EventsView
 * @extends BaseView
 * @param model
 * @constructor
 */
function EventsView(model) {
    this.className = 'EventsView';
    BaseView.apply(this, arguments);
}

EventsView.prototype = Object.create(BaseView.prototype);
EventsView.prototype.constructor = BaseView;

var EVP = EventsView.prototype;

EVP.init = function () {
    BaseView.prototype.init.apply(this, arguments);
    this.eventRows = [];
};

EVP.renderTemplate = function (tmpl) {
    var self = this;
    var rendered =  Utils.renderTemplate(tmpl);
    rendered = Utils.htmlToElement(rendered);
    Utils.getTemplateComponent('event.html', function (tmplComponent) {
        self.renderRowsEvents(rendered, tmplComponent);
    });
};

EVP.renderEventAdd = function (tmpl, tmplComponent) {
    var eventAdd = new EventAdd(tmplComponent, {}, this);

    tmpl.appendChild(eventAdd.getComponent());

    this.endRender(tmpl);
};

EVP.endRender = function (tmpl) {

    if (this.element) {
        this.element.appendChild(tmpl);
    }
    if(this._showRows) {
        this.showRows();
    }
};
EVP.renderRowsEvents = function (tmpl, componentTmpl) {
    var self = this;
    var data = this.model.getData(); // получаем данные

    this.element.innerHTML = ''; // очистим

    for (var i = 0, max = data.length; i < max; i++) {
        var event = data[i];
        var evRow = new EventRow(componentTmpl, event, this);
        this.eventsBlock = tmpl.querySelector('.j-events-rows');
        this.eventRows.push(evRow);
        this.eventsBlock.appendChild(evRow.getComponent());
    }

    Utils.getTemplateComponent('event-add.html', function (tmplComponent) {
        self.renderEventAdd(tmpl, tmplComponent);
    });
};

EVP.showRows = function () {
    if(!this.eventsBlock) {
        console.warn('Events rows with class "j-events-rows" is not found.');
        return;
    }
    if(!Utils.hasClass(this.eventsBlock, 'show')) {
        this.eventsBlock.classList.add('show');
        this._showRows = true;
    }
};

EVP.removeRow = function (modelItem) {
    this.model.remove(modelItem);
};

module.exports = EventsView;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/events.js","/views")
},{"./BaseView.js":19,"./components/event-add.js":25,"./components/event-row.js":26,"buffer":39,"rH1JPG":41}],35:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 04.12.16.
 */
var BaseView = require('./BaseView.js');
var ImgComponent = require('./components/img-modal.js');
var ModalComponent = require('./components/modal.js');

/**
 * Вьюха для модалки с изображениями
 * @class ModalImgView
 * @extends BaseView
 * @param model
 * @constructor
 * @param parent
 */
function ModalImgView (model, parent) {
    this.className = 'ModalImgView';
    BaseView.apply(this, arguments);
    this.parent = parent;
    this.imgs = [];
}

ModalImgView.prototype = Object.create(BaseView.prototype);
ModalImgView.prototype.constructor = BaseView;
var proto = ModalImgView.prototype;

proto.init = function () {
    BaseView.prototype.init.apply(this, arguments);
    this.render();
};

proto.renderTemplate = function (tmpl) {
    tmpl = Utils.htmlToElement(tmpl);
    var self = this;

    Utils.getTemplateComponent('modal.html', function (modalTmpl) {
        self.renderModal(tmpl, modalTmpl);
    });
};

proto.renderModal = function (tmpl, modalTmpl) {
    var self = this;

    this.modal = new ModalComponent(modalTmpl, {}, this);
    this.tmpl = this.modal.getComponent();
    this.bodyModal = this.tmpl.querySelector('.j-body');
    this.imgsTmpl = tmpl;
    this.bodyModal.appendChild(tmpl);

    Utils.getTemplateComponent('image-for-modal.html', function (imgTmpl) {
        self.renderImgComponent(imgTmpl);
    });
};

proto.renderImgComponent = function (imgTmpl) {
    for (var i = 0, max = this.model.length; i < max; i++) {
        var item = this.model[i];
        var img = new ImgComponent(imgTmpl, item, this);
        this.imgs.push(img);
        this.imgsTmpl.appendChild(img.getComponent());
    }

    this.endRender();
};

proto.endRender = function () {
    if (this.element) {
        this.element.appendChild(this.tmpl);
    }
};

proto.chooseImg = function (img) {
    var index = this.model.indexOf(img);
    if(index !== -1) {
        this.parent.chooseImg(index);
    } else {
        console.warn('This img is not found.');
    }

    this.modal.remove();
    this.removeModal();
};

proto.removeModal = function () {
    delete this.modal;
};

module.exports = ModalImgView;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/modal-img.js","/views")
},{"./BaseView.js":19,"./components/img-modal.js":27,"./components/modal.js":29,"buffer":39,"rH1JPG":41}],36:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 05.12.16.
 */


var ToDoView = require('./ToDoView.js');
var ContactAdd = require('./components/person-add.js');

/**
 * Вьюха, которая отрисовывает кадры
 * @class PersonsView
 * @extends ToDoView
 * @param model
 * @constructor
 */
function PersonsView(model) {
    this.className = 'PersonsView';
    this.pathAddTemplate = 'person-add.html';
    this.pathRenderTemplate = 'person.html';
    this.Adder = ContactAdd;
    ToDoView.apply(this, arguments);
}

PersonsView.prototype = Object.create(ToDoView.prototype);
PersonsView.prototype.constructor = ToDoView;

var proto = PersonsView.prototype;

module.exports = PersonsView;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/persons.js","/views")
},{"./ToDoView.js":20,"./components/person-add.js":30,"buffer":39,"rH1JPG":41}],37:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/**
 * Created by snatvb on 04.12.16.
 */


var BaseView = require('./BaseView.js');
var ItemSelectData = require('./components/item-select-data.js');

/**
 * Вьюха, которая отрисовывает события
 * @class SelectDataView
 * @extends BaseView
 * @param model
 * @constructor
 */
function SelectDataView(model) {
    this.className = 'SelectDataView';
    BaseView.apply(this, arguments);
}

SelectDataView.prototype = Object.create(BaseView.prototype);
SelectDataView.prototype.constructor = BaseView;

var proto = SelectDataView.prototype;

proto.init = function () {
    BaseView.prototype.init.apply(this, arguments);
    this.selectData = {
        Contacts: '.j-ContactsView',
        Persons: '.j-PersonsView',
        Deals: '.j-DealsView',
        Events: '.j-EventsView'
    };
    this.elementsSelect = [];
    this.titleBtn = 'Select Data';
};

proto.renderTemplate = function (tmpl) {
    var self = this;
    var rendered =  Utils.renderTemplate(tmpl, {title: this.titleBtn});
    rendered = Utils.htmlToElement(rendered);
    Utils.getTemplateComponent('select-data.html', function (tmplComponent) {
        self.renderList(rendered, tmplComponent);
    });
};

proto.renderList = function (tmpl, selectTmpl) {
    this.listContain = tmpl.querySelector('.j-items-select-data');
    for (var key in this.selectData) {
        if (!this.selectData.hasOwnProperty(key)) continue;
        var item = new ItemSelectData(selectTmpl, {title:key}, this);
        this.elementsSelect.push(item);
        this.listContain.appendChild(item.getComponent());
    }

    this.listeners(tmpl);
    this.element.appendChild(tmpl);
};

proto.listeners = function (tmpl) {
    var self = this;

    this.btn = tmpl.querySelector('.j-btn-select');
    this.btn.addEventListener('click', function (event) {
        event.preventDefault();
        self.toggleList(this);
    });
    document.body.addEventListener('click', function (event) {
        var parent = Utils.parentHtmlByClass(event.target, 'j-select-data-parent');
        if (!parent) {
            self.hideList();
        }
    });
};

proto.toggleList = function (btn) {
    if(!Utils.hasClass(btn, 'open')) {
        btn.classList.add('open');
        this.listContain.classList.add('show');
    } else {
        btn.classList.remove('open');
        this.listContain.classList.remove('show');
    }
};
proto.hideList = function () {
    this.btn.classList.remove('open');
    this.listContain.classList.remove('show');
};

proto.showView = function (keyShow) {
    Utils.changeHtml(this.btn, this.titleBtn);
    for (var key in this.selectData) {
        if (!this.selectData.hasOwnProperty(key)) continue;
        var classView = this.selectData[key];
        var block = document.querySelector(classView);

        if (!block) {
            console.warn('Selector ' + classView + ' is wrong.');
            continue;
        }

        if (key === keyShow) {
            Utils.changeHtml(this.btn, keyShow);
            block.classList.add('show');
        } else {
            block.classList.remove('show');
        }
    }
};


module.exports = SelectDataView;
}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views/select-data.js","/views")
},{"./BaseView.js":19,"./components/item-select-data.js":28,"buffer":39,"rH1JPG":41}],38:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/base64-js/lib/b64.js","/../../node_modules/base64-js/lib")
},{"buffer":39,"rH1JPG":41}],39:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/buffer/index.js","/../../node_modules/buffer")
},{"base64-js":38,"buffer":39,"ieee754":40,"rH1JPG":41}],40:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/ieee754/index.js","/../../node_modules/ieee754")
},{"buffer":39,"rH1JPG":41}],41:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("rH1JPG"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/process/browser.js","/../../node_modules/process")
},{"buffer":39,"rH1JPG":41}]},{},[8])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXdhdnNlbmluL1Byb2plY3RzL3Rlc3RUYXNrX1RPRE9fTGlzdC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2FuZHJld2F2c2VuaW4vUHJvamVjdHMvdGVzdFRhc2tfVE9ET19MaXN0L2FwcC9qcy9jb250cm9sbGVycy9CYXNlQ29udHJvbGxlci5qcyIsIi9Vc2Vycy9hbmRyZXdhdnNlbmluL1Byb2plY3RzL3Rlc3RUYXNrX1RPRE9fTGlzdC9hcHAvanMvY29udHJvbGxlcnMvY29udGFjdHMuanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3QvYXBwL2pzL2NvbnRyb2xsZXJzL2RlYWxzLmpzIiwiL1VzZXJzL2FuZHJld2F2c2VuaW4vUHJvamVjdHMvdGVzdFRhc2tfVE9ET19MaXN0L2FwcC9qcy9jb250cm9sbGVycy9ldmVudHMuanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3QvYXBwL2pzL2NvbnRyb2xsZXJzL3BlcnNvbnMuanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3QvYXBwL2pzL2NvbnRyb2xsZXJzL3NlbGVjdC1kYXRhLmpzIiwiL1VzZXJzL2FuZHJld2F2c2VuaW4vUHJvamVjdHMvdGVzdFRhc2tfVE9ET19MaXN0L2FwcC9qcy9ldmVudHMuanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3QvYXBwL2pzL2Zha2VfN2NlN2ZkOTIuanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3QvYXBwL2pzL21vZGVscy9CYXNlTW9kZWwuanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3QvYXBwL2pzL21vZGVscy9jb250YWN0cy5qcyIsIi9Vc2Vycy9hbmRyZXdhdnNlbmluL1Byb2plY3RzL3Rlc3RUYXNrX1RPRE9fTGlzdC9hcHAvanMvbW9kZWxzL2RlYWxzLmpzIiwiL1VzZXJzL2FuZHJld2F2c2VuaW4vUHJvamVjdHMvdGVzdFRhc2tfVE9ET19MaXN0L2FwcC9qcy9tb2RlbHMvZXZlbnRzLmpzIiwiL1VzZXJzL2FuZHJld2F2c2VuaW4vUHJvamVjdHMvdGVzdFRhc2tfVE9ET19MaXN0L2FwcC9qcy9tb2RlbHMvbW9kZWwtaXRlbXMvY29udGFjdHMuanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3QvYXBwL2pzL21vZGVscy9tb2RlbC1pdGVtcy9kZWFsLmpzIiwiL1VzZXJzL2FuZHJld2F2c2VuaW4vUHJvamVjdHMvdGVzdFRhc2tfVE9ET19MaXN0L2FwcC9qcy9tb2RlbHMvbW9kZWwtaXRlbXMvZXZlbnQuanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3QvYXBwL2pzL21vZGVscy9tb2RlbC1pdGVtcy9wZXJzb24uanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3QvYXBwL2pzL21vZGVscy9wZXJzb25zLmpzIiwiL1VzZXJzL2FuZHJld2F2c2VuaW4vUHJvamVjdHMvdGVzdFRhc2tfVE9ET19MaXN0L2FwcC9qcy91dGlscy5qcyIsIi9Vc2Vycy9hbmRyZXdhdnNlbmluL1Byb2plY3RzL3Rlc3RUYXNrX1RPRE9fTGlzdC9hcHAvanMvdmlld3MvQmFzZVZpZXcuanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3QvYXBwL2pzL3ZpZXdzL1RvRG9WaWV3LmpzIiwiL1VzZXJzL2FuZHJld2F2c2VuaW4vUHJvamVjdHMvdGVzdFRhc2tfVE9ET19MaXN0L2FwcC9qcy92aWV3cy9jb21wb25lbnRzL0Jhc2VDb21wb25lbnQuanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3QvYXBwL2pzL3ZpZXdzL2NvbXBvbmVudHMvYWRkZXIuanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3QvYXBwL2pzL3ZpZXdzL2NvbXBvbmVudHMvY29udGFjdC1hZGQuanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3QvYXBwL2pzL3ZpZXdzL2NvbXBvbmVudHMvZGVhbC1hZGQuanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3QvYXBwL2pzL3ZpZXdzL2NvbXBvbmVudHMvZXZlbnQtYWRkLmpzIiwiL1VzZXJzL2FuZHJld2F2c2VuaW4vUHJvamVjdHMvdGVzdFRhc2tfVE9ET19MaXN0L2FwcC9qcy92aWV3cy9jb21wb25lbnRzL2V2ZW50LXJvdy5qcyIsIi9Vc2Vycy9hbmRyZXdhdnNlbmluL1Byb2plY3RzL3Rlc3RUYXNrX1RPRE9fTGlzdC9hcHAvanMvdmlld3MvY29tcG9uZW50cy9pbWctbW9kYWwuanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3QvYXBwL2pzL3ZpZXdzL2NvbXBvbmVudHMvaXRlbS1zZWxlY3QtZGF0YS5qcyIsIi9Vc2Vycy9hbmRyZXdhdnNlbmluL1Byb2plY3RzL3Rlc3RUYXNrX1RPRE9fTGlzdC9hcHAvanMvdmlld3MvY29tcG9uZW50cy9tb2RhbC5qcyIsIi9Vc2Vycy9hbmRyZXdhdnNlbmluL1Byb2plY3RzL3Rlc3RUYXNrX1RPRE9fTGlzdC9hcHAvanMvdmlld3MvY29tcG9uZW50cy9wZXJzb24tYWRkLmpzIiwiL1VzZXJzL2FuZHJld2F2c2VuaW4vUHJvamVjdHMvdGVzdFRhc2tfVE9ET19MaXN0L2FwcC9qcy92aWV3cy9jb21wb25lbnRzL3RvZG8tcm93LmpzIiwiL1VzZXJzL2FuZHJld2F2c2VuaW4vUHJvamVjdHMvdGVzdFRhc2tfVE9ET19MaXN0L2FwcC9qcy92aWV3cy9jb250YWN0cy5qcyIsIi9Vc2Vycy9hbmRyZXdhdnNlbmluL1Byb2plY3RzL3Rlc3RUYXNrX1RPRE9fTGlzdC9hcHAvanMvdmlld3MvZGVhbHMuanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3QvYXBwL2pzL3ZpZXdzL2V2ZW50cy5qcyIsIi9Vc2Vycy9hbmRyZXdhdnNlbmluL1Byb2plY3RzL3Rlc3RUYXNrX1RPRE9fTGlzdC9hcHAvanMvdmlld3MvbW9kYWwtaW1nLmpzIiwiL1VzZXJzL2FuZHJld2F2c2VuaW4vUHJvamVjdHMvdGVzdFRhc2tfVE9ET19MaXN0L2FwcC9qcy92aWV3cy9wZXJzb25zLmpzIiwiL1VzZXJzL2FuZHJld2F2c2VuaW4vUHJvamVjdHMvdGVzdFRhc2tfVE9ET19MaXN0L2FwcC9qcy92aWV3cy9zZWxlY3QtZGF0YS5qcyIsIi9Vc2Vycy9hbmRyZXdhdnNlbmluL1Byb2plY3RzL3Rlc3RUYXNrX1RPRE9fTGlzdC9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCIvVXNlcnMvYW5kcmV3YXZzZW5pbi9Qcm9qZWN0cy90ZXN0VGFza19UT0RPX0xpc3Qvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIi9Vc2Vycy9hbmRyZXdhdnNlbmluL1Byb2plY3RzL3Rlc3RUYXNrX1RPRE9fTGlzdC9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIi9Vc2Vycy9hbmRyZXdhdnNlbmluL1Byb2plY3RzL3Rlc3RUYXNrX1RPRE9fTGlzdC9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHNuYXR2YiBvbiAwMy4xMi4xNi5cbiAqL1xuXG5mdW5jdGlvbiBCYXNlQ29udHJvbGxlcigpIHtcbiAgICB0aGlzLmluaXQoKTtcbn1cblxuQmFzZUNvbnRyb2xsZXIucHJvdG90eXBlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ldmVudE5hbWUgPSAnQmFzZUNvbnRyb2xsZXInO1xuICAgICAgICB0aGlzLmxpc3RlbnMoKTtcbiAgICB9LFxuICAgIGxpc3RlbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIEFwcEV2ZW50cy5vbih0aGlzLmV2ZW50TmFtZSArICcuYWRkRGF0YScsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBzZWxmLm1vZGVsLmFkZChkYXRhKTtcbiAgICAgICAgICAgIHNlbGYudmlldy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlQ29udHJvbGxlcjtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29udHJvbGxlcnMvQmFzZUNvbnRyb2xsZXIuanNcIixcIi9jb250cm9sbGVyc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxuICogQ3JlYXRlZCBieSBzbmF0dmIgb24gMDQuMTIuMTYuXG4gKi9cblxuXG52YXIgQmFzZUNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0Jhc2VDb250cm9sbGVyLmpzJyk7XG52YXIgQ29udGFjdHNWaWV3ID0gcmVxdWlyZSgnLi4vdmlld3MvY29udGFjdHMuanMnKTtcbnZhciBDb250YWN0c01vZGVsID0gcmVxdWlyZSgnLi4vbW9kZWxzL2NvbnRhY3RzLmpzJyk7XG5cbi8qKlxuICogQGNsYXNzIENvbnRhY3RzQ29udHJvbGxlclxuICogQGV4dGVuZHMgQmFzZUNvbnRyb2xsZXJcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDb250YWN0c0NvbnRyb2xsZXIgKCkge1xuICAgIEJhc2VDb250cm9sbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbkNvbnRhY3RzQ29udHJvbGxlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VDb250cm9sbGVyLnByb3RvdHlwZSk7XG5Db250YWN0c0NvbnRyb2xsZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmFzZUNvbnRyb2xsZXI7XG5cbnZhciBFQ1AgPSBDb250YWN0c0NvbnRyb2xsZXIucHJvdG90eXBlO1xuRUNQLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ldmVudE5hbWUgPSAnQ29udGFjdHMnO1xuICAgIHRoaXMubW9kZWwgPSBuZXcgQ29udGFjdHNNb2RlbDtcbiAgICB0aGlzLm1vZGVsLmFkZCh7XG4gICAgICAgIGZpcnN0TmFtZTogJ0ZpcnN0IE5hbWUnLFxuICAgICAgICBsYXN0TmFtZTogJ0xhc3QgTmFtZScsXG4gICAgICAgIGVtYWlsOiAnRS1tYWlsJyxcbiAgICAgICAgcGhvbmU6ICcrOCAoOTk5KSA5OTktOTktOTknLFxuICAgICAgICBpbWc6ICcvYXBwL2ltZy9wb3N0cy8xLmpwZydcbiAgICB9KTtcbiAgICB0aGlzLnZpZXcgPSBuZXcgQ29udGFjdHNWaWV3KHRoaXMubW9kZWwpO1xuICAgIHRoaXMudmlldy5yZW5kZXIoKTtcblxuICAgIHRoaXMubGlzdGVucygpO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRhY3RzQ29udHJvbGxlcjtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29udHJvbGxlcnMvY29udGFjdHMuanNcIixcIi9jb250cm9sbGVyc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxuICogQ3JlYXRlZCBieSBzbmF0dmIgb24gMDUuMTIuMTYuXG4gKi9cblxuXG5cbnZhciBCYXNlQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vQmFzZUNvbnRyb2xsZXIuanMnKTtcbnZhciBEZWFsc1ZpZXcgPSByZXF1aXJlKCcuLi92aWV3cy9kZWFscy5qcycpO1xudmFyIERlYWxzTW9kZWwgPSByZXF1aXJlKCcuLi9tb2RlbHMvZGVhbHMuanMnKTtcblxuLyoqXG4gKiBAY2xhc3MgUGVyc29uc0NvbnRyb2xsZXJcbiAqIEBleHRlbmRzIEJhc2VDb250cm9sbGVyXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUGVyc29uc0NvbnRyb2xsZXIgKCkge1xuICAgIEJhc2VDb250cm9sbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cblBlcnNvbnNDb250cm9sbGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZUNvbnRyb2xsZXIucHJvdG90eXBlKTtcblBlcnNvbnNDb250cm9sbGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJhc2VDb250cm9sbGVyO1xuXG52YXIgRUNQID0gUGVyc29uc0NvbnRyb2xsZXIucHJvdG90eXBlO1xuRUNQLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ldmVudE5hbWUgPSAnRGVhbHMnO1xuICAgIHRoaXMubW9kZWwgPSBuZXcgRGVhbHNNb2RlbDtcbiAgICB0aGlzLm1vZGVsLmFkZCh7XG4gICAgICAgIHRpdGxlOiAn0KHQtNC10LvQsNGC0Ywg0LfQstC+0L3QvtC6JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICfQl9Cw0L/RgNC+0YHQuNGC0Ywg0YLQvtCy0LDRgNGLJyxcbiAgICAgICAgY29tcGFueTogJ9Ce0J7QniDQodC60LvQsNC0INCd0LXQvtCi0LXRhdC90LjQutGBJyxcbiAgICAgICAgcGhvbmU6ICcrNyAoODAwKSA5OTktOTktOTknXG4gICAgfSk7XG4gICAgdGhpcy52aWV3ID0gbmV3IERlYWxzVmlldyh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLnZpZXcucmVuZGVyKCk7XG5cbiAgICB0aGlzLmxpc3RlbnMoKTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBQZXJzb25zQ29udHJvbGxlcjtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29udHJvbGxlcnMvZGVhbHMuanNcIixcIi9jb250cm9sbGVyc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxuICogQ3JlYXRlZCBieSBzbmF0dmIgb24gMDMuMTIuMTYuXG4gKi9cblxudmFyIEJhc2VDb250cm9sbGVyID0gcmVxdWlyZSgnLi9CYXNlQ29udHJvbGxlci5qcycpO1xudmFyIEV2ZW50c1ZpZXcgPSByZXF1aXJlKCcuLi92aWV3cy9ldmVudHMuanMnKTtcbnZhciBFdmVudHNNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVscy9ldmVudHMuanMnKTtcblxuZnVuY3Rpb24gRXZlbnRzQ29udHJvbGxlciAoKSB7XG4gICAgQmFzZUNvbnRyb2xsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuRXZlbnRzQ29udHJvbGxlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VDb250cm9sbGVyLnByb3RvdHlwZSk7XG5FdmVudHNDb250cm9sbGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJhc2VDb250cm9sbGVyO1xuXG52YXIgRUNQID0gRXZlbnRzQ29udHJvbGxlci5wcm90b3R5cGU7XG5FQ1AuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudHNNb2RlbDtcbiAgICB0aGlzLmV2ZW50cy5hZGQoe1xuICAgICAgICBpbWc6ICcvYXBwL2ltZy9wb3N0cy8xLmpwZycsXG4gICAgICAgIHRpdGxlOiAn0J/QvtC10LfQtNC60LAg0LIg0LPQvtGA0YsnLFxuICAgICAgICBzcGVjaWFsczogJ9CY0YHRgdC70LXQtNC+0LLQsNC90LjQtScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0JHRi9C70L4g0Y3RgtC+INC00LDQstC90L4nXG4gICAgfSk7XG4gICAgdGhpcy5ldmVudHMuYWRkKHtcbiAgICAgICAgaW1nOiAnL2FwcC9pbWcvcG9zdHMvMS5qcGcnLFxuICAgICAgICB0aXRsZTogJ9Cf0L7QtdC30LTQutCwINCyINCz0L7RgNGLIDInLFxuICAgICAgICBzcGVjaWFsczogJ9CY0YHRgdC70LXQtNC+0LLQsNC90LjQtScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn0JHRi9C70L4g0Y3RgtC+INC00LDQstC90L4nXG4gICAgfSk7XG4gICAgdGhpcy5ldmVudHNWaWV3ID0gbmV3IEV2ZW50c1ZpZXcodGhpcy5ldmVudHMpO1xuICAgIHRoaXMuZXZlbnRzVmlldy5yZW5kZXIoKTtcblxuICAgIHRoaXMubGlzdGVucygpO1xuICAgIC8vdGhpcy5nZXRUZW1wbGF0ZSgnY29tcG9uZW50cy9ldmVudC5odG1sJywgZnVuY3Rpb24gKHRlbXBsYXRlKSB7XG4gICAgLy8gICAgVXRpbHMucmVuZGVyVGVtcGxhdGUodGVtcGxhdGUsIHtpbWc6ICd0ZXN0J30pO1xuICAgIC8vfSk7XG59O1xuXG5FQ1AubGlzdGVucyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBBcHBFdmVudHMub24oJ0V2ZW50cy5hZGREYXRhJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgc2VsZi5ldmVudHMuYWRkKGRhdGEpO1xuICAgICAgICBzZWxmLmV2ZW50c1ZpZXcucmVuZGVyKCk7XG4gICAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50c0NvbnRyb2xsZXI7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbnRyb2xsZXJzL2V2ZW50cy5qc1wiLFwiL2NvbnRyb2xsZXJzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHNuYXR2YiBvbiAwNS4xMi4xNi5cbiAqL1xuXG5cblxudmFyIEJhc2VDb250cm9sbGVyID0gcmVxdWlyZSgnLi9CYXNlQ29udHJvbGxlci5qcycpO1xudmFyIFBlcnNvbnNWaWV3ID0gcmVxdWlyZSgnLi4vdmlld3MvcGVyc29ucy5qcycpO1xudmFyIFBlcnNvbnNNb2RlbCA9IHJlcXVpcmUoJy4uL21vZGVscy9wZXJzb25zLmpzJyk7XG5cbi8qKlxuICogQGNsYXNzIFBlcnNvbnNDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBCYXNlQ29udHJvbGxlclxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFBlcnNvbnNDb250cm9sbGVyICgpIHtcbiAgICBCYXNlQ29udHJvbGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5QZXJzb25zQ29udHJvbGxlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VDb250cm9sbGVyLnByb3RvdHlwZSk7XG5QZXJzb25zQ29udHJvbGxlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCYXNlQ29udHJvbGxlcjtcblxudmFyIEVDUCA9IFBlcnNvbnNDb250cm9sbGVyLnByb3RvdHlwZTtcbkVDUC5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZXZlbnROYW1lID0gJ1BlcnNvbnMnO1xuICAgIHRoaXMubW9kZWwgPSBuZXcgUGVyc29uc01vZGVsO1xuICAgIHRoaXMubW9kZWwuYWRkKHtcbiAgICAgICAgZmlyc3ROYW1lOiAnRmlyc3QgTmFtZScsXG4gICAgICAgIGxhc3ROYW1lOiAnTGFzdCBOYW1lJyxcbiAgICAgICAgcGhvbmU6ICcrOCAoOTk5KSA5OTktOTktOTknLFxuICAgICAgICBzYWxhcnk6IDEwMDAsXG4gICAgICAgIHBvc2l0aW9uOiAnQ1RPJyxcbiAgICAgICAgZGVwYXJ0bWVudDogJ9Cd0L7QstCw0Y8g0YHRhNC10YDQsCcsXG4gICAgICAgIGltZzogJy9hcHAvaW1nL3Bvc3RzLzEuanBnJ1xuICAgIH0pO1xuICAgIHRoaXMudmlldyA9IG5ldyBQZXJzb25zVmlldyh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLnZpZXcucmVuZGVyKCk7XG5cbiAgICB0aGlzLmxpc3RlbnMoKTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBQZXJzb25zQ29udHJvbGxlcjtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29udHJvbGxlcnMvcGVyc29ucy5qc1wiLFwiL2NvbnRyb2xsZXJzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHNuYXR2YiBvbiAwNC4xMi4xNi5cbiAqL1xuXG5cbnZhciBCYXNlQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vQmFzZUNvbnRyb2xsZXIuanMnKTtcbnZhciBTZWxlY3REYXRhVmlldyA9IHJlcXVpcmUoJy4uL3ZpZXdzL3NlbGVjdC1kYXRhLmpzJyk7XG5cbi8qKlxuICog0JrQvtC90YLRgNC+0LvQu9C10YAg0LLRi9C/0L7QtNCw0Y7RidC10LPQviDRgdC/0LjRgdC60LBcbiAqIEBleHRlbmRzIEJhc2VDb250cm9sbGVyXG4gKiBAY2xhc3MgU2VsZWN0RGF0YUNvbnRyb2xsZXJcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTZWxlY3REYXRhQ29udHJvbGxlciAoKSB7XG4gICAgQmFzZUNvbnRyb2xsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuU2VsZWN0RGF0YUNvbnRyb2xsZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlQ29udHJvbGxlci5wcm90b3R5cGUpO1xuU2VsZWN0RGF0YUNvbnRyb2xsZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmFzZUNvbnRyb2xsZXI7XG5cbnZhciBwcm90byA9IFNlbGVjdERhdGFDb250cm9sbGVyLnByb3RvdHlwZTtcbnByb3RvLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZWxlY3REYXRhVmlldyA9IG5ldyBTZWxlY3REYXRhVmlldztcbiAgICB0aGlzLnNlbGVjdERhdGFWaWV3LnJlbmRlcigpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3REYXRhQ29udHJvbGxlcjtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvY29udHJvbGxlcnMvc2VsZWN0LWRhdGEuanNcIixcIi9jb250cm9sbGVyc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxuICogQ3JlYXRlZCBieSBzbmF0dmIgb24gMDQuMTIuMTYuXG4gKi9cblxuXG52YXIgRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmluaXQoKTtcbn07XG5cbkV2ZW50cy5wcm90b3R5cGUgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmV2ID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgb246IGZ1bmN0aW9uIChldmVudE5hbWUsIGYpIHtcbiAgICAgICAgaWYgKCFmKSByZXR1cm47XG4gICAgICAgIHZhciBlID0ge1xuICAgICAgICAgICAgbmFtZTogZXZlbnROYW1lLFxuICAgICAgICAgICAgZjogZlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmV2LnB1c2goZSk7XG4gICAgfSxcbiAgICB0cmlnZ2VyOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBhcmdzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZXZbaV0ubmFtZSA9PSBldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2W2ldLmYoYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50cztcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvZXZlbnRzLmpzXCIsXCIvXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHNuYXR2YiBvbiAwMy4xMi4xNi5cbiAqL1xuXG4oZnVuY3Rpb24oZ2xvYmFsKSB7XG5cbiAgICBnbG9iYWwuVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG4gICAgZ2xvYmFsLkFwcEV2ZW50cyA9IG5ldyAocmVxdWlyZSgnLi9ldmVudHMnKSk7XG5cbiAgICBmdW5jdGlvbiBBcHAgKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBBcHAucHJvdG90eXBlID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgRXZlbnRzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvZXZlbnRzLmpzJyk7XG4gICAgICAgICAgICBuZXcgRXZlbnRzQ29udHJvbGxlcjtcbiAgICAgICAgICAgIHZhciBTZWxlY3REYXRhQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvc2VsZWN0LWRhdGEuanMnKTtcbiAgICAgICAgICAgIG5ldyBTZWxlY3REYXRhQ29udHJvbGxlcjtcbiAgICAgICAgICAgIHZhciBDb250YWN0c0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2NvbnRhY3RzLmpzJyk7XG4gICAgICAgICAgICBuZXcgQ29udGFjdHNDb250cm9sbGVyO1xuICAgICAgICAgICAgdmFyIFBlcnNvbnNDb250cm9sbGVyID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9wZXJzb25zLmpzJyk7XG4gICAgICAgICAgICBuZXcgUGVyc29uc0NvbnRyb2xsZXI7XG4gICAgICAgICAgICB2YXIgRGVhbENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2RlYWxzLmpzJyk7XG4gICAgICAgICAgICBuZXcgRGVhbENvbnRyb2xsZXI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbmV3IEFwcCgpO1xuXG59KSh3aW5kb3cpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9mYWtlXzdjZTdmZDkyLmpzXCIsXCIvXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHNuYXR2YiBvbiAwMy4xMi4xNi5cbiAqL1xuXG5mdW5jdGlvbiBCYXNlTW9kZWwgKCkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xufVxuXG5CYXNlTW9kZWwucHJvdG90eXBlID0ge1xuICAgIGdldERhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSB8fCBbXTtcbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYoISh0aGlzLm1vZGVsSXRlbSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTW9kZWxJdGVtIGlzIG5vdCBDbGFzcycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKG5ldyB0aGlzLm1vZGVsSXRlbShkYXRhKSk7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZGF0YS5pbmRleE9mKGl0ZW0pO1xuICAgICAgICBpZihpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdJdGVtIGluIG1vZGVsIGRhdGEgaXMgbm90IGZvdW5kJyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZU1vZGVsO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9tb2RlbHMvQmFzZU1vZGVsLmpzXCIsXCIvbW9kZWxzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHNuYXR2YiBvbiAwNC4xMi4xNi5cbiAqL1xuXG52YXIgQmFzZU1vZGVsID0gcmVxdWlyZSgnLi9CYXNlTW9kZWwuanMnKTtcbnZhciBDb250YWN0cyA9IHJlcXVpcmUoJy4vbW9kZWwtaXRlbXMvY29udGFjdHMuanMnKTtcblxuLyoqXG4gKiDQnNC+0LTQtdC70Ywg0LrQvtC90YLQsNC60YLQvtCyXG4gKiBAZXh0ZW5kcyBCYXNlTW9kZWxcbiAqIEBjbGFzcyBNb2RlbENvbnRhY3RzXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTW9kZWxDb250YWN0cyAoKSB7XG4gICAgQmFzZU1vZGVsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5tb2RlbEl0ZW0gPSBDb250YWN0cztcbn1cblxuTW9kZWxDb250YWN0cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VNb2RlbC5wcm90b3R5cGUpO1xuTW9kZWxDb250YWN0cy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCYXNlTW9kZWw7XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kZWxDb250YWN0cztcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbW9kZWxzL2NvbnRhY3RzLmpzXCIsXCIvbW9kZWxzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHNuYXR2YiBvbiAwNS4xMi4xNi5cbiAqL1xuXG52YXIgQmFzZU1vZGVsID0gcmVxdWlyZSgnLi9CYXNlTW9kZWwuanMnKTtcbnZhciBEZWFsID0gcmVxdWlyZSgnLi9tb2RlbC1pdGVtcy9kZWFsLmpzJyk7XG5cbi8qKlxuICog0JzQvtC00LXQu9GMINC00LXQu1xuICogQGV4dGVuZHMgQmFzZU1vZGVsXG4gKiBAY2xhc3MgTW9kZWxEZWFsc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE1vZGVsRGVhbHMgKCkge1xuICAgIEJhc2VNb2RlbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMubW9kZWxJdGVtID0gRGVhbDtcbn1cblxuTW9kZWxEZWFscy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VNb2RlbC5wcm90b3R5cGUpO1xuTW9kZWxEZWFscy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCYXNlTW9kZWw7XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kZWxEZWFscztcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbW9kZWxzL2RlYWxzLmpzXCIsXCIvbW9kZWxzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHNuYXR2YiBvbiAwMy4xMi4xNi5cbiAqL1xuXG52YXIgQmFzZU1vZGVsID0gcmVxdWlyZSgnLi9CYXNlTW9kZWwuanMnKTtcbnZhciBFdmVudCA9IHJlcXVpcmUoJy4vbW9kZWwtaXRlbXMvZXZlbnQuanMnKTtcblxuLyoqXG4gKiDQnNC+0LTQtdC70Ywg0YHQvtCx0YvRgtC40LlcbiAqIEBleHRlbmRzIEJhc2VNb2RlbFxuICogQGNsYXNzIE1vZGVsRXZlbnRzXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTW9kZWxFdmVudHMgKCkge1xuICAgIEJhc2VNb2RlbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMubW9kZWxJdGVtID0gRXZlbnQ7XG59XG5cbk1vZGVsRXZlbnRzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZU1vZGVsLnByb3RvdHlwZSk7XG5Nb2RlbEV2ZW50cy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCYXNlTW9kZWw7XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kZWxFdmVudHM7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL21vZGVscy9ldmVudHMuanNcIixcIi9tb2RlbHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcbiAqIENyZWF0ZWQgYnkgc25hdHZiIG9uIDA0LjEyLjE2LlxuICovXG5cbmZ1bmN0aW9uIEV2ZW50IChkYXRhKSB7XG4gICAgdGhpcy5maXJzdE5hbWUgPSBkYXRhLmZpcnN0TmFtZSB8fCAnJztcbiAgICB0aGlzLmxhc3ROYW1lID0gZGF0YS5sYXN0TmFtZSB8fCAnJztcbiAgICB0aGlzLmVtYWlsID0gZGF0YS5lbWFpbCB8fCAnRS1tYWlsINC90LUg0YPQutCw0LfQsNC9JztcbiAgICB0aGlzLnBob25lID0gZGF0YS5waG9uZSB8fCAnJztcbiAgICB0aGlzLmltZyA9IGRhdGEuaW1nO1xufVxuXG5FdmVudC5wcm90b3R5cGUgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudDtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbW9kZWxzL21vZGVsLWl0ZW1zL2NvbnRhY3RzLmpzXCIsXCIvbW9kZWxzL21vZGVsLWl0ZW1zXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHNuYXR2YiBvbiAwNS4xMi4xNi5cbiAqL1xuXG5mdW5jdGlvbiBEZWFsIChkYXRhKSB7XG4gICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGUgfHwgJyc7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRhdGEuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgdGhpcy5jb21wYW55ID0gZGF0YS5jb21wYW55IHx8ICcnO1xuICAgIHRoaXMucGhvbmUgPSBkYXRhLnBob25lIHx8ICcnO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gRGVhbDtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbW9kZWxzL21vZGVsLWl0ZW1zL2RlYWwuanNcIixcIi9tb2RlbHMvbW9kZWwtaXRlbXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcbiAqIENyZWF0ZWQgYnkgc25hdHZiIG9uIDAzLjEyLjE2LlxuICovXG5cbi8qKlxuICog0KHQvtCx0YvRgtC40Y9cbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gKiBAY2xhc3MgRXZlbnRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBFdmVudCAoZGF0YSkge1xuICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlIHx8ICcnO1xuICAgIHRoaXMuc3BlY2lhbHMgPSBkYXRhLnNwZWNpYWxzIHx8ICcnO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkYXRhLmRlc2NyaXB0aW9uIHx8ICcnO1xuICAgIHRoaXMuaW1nID0gZGF0YS5pbWc7XG59XG5cbkV2ZW50LnByb3RvdHlwZSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9tb2RlbHMvbW9kZWwtaXRlbXMvZXZlbnQuanNcIixcIi9tb2RlbHMvbW9kZWwtaXRlbXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcbiAqIENyZWF0ZWQgYnkgc25hdHZiIG9uIDA1LjEyLjE2LlxuICovXG5cbmZ1bmN0aW9uIFBlcnNvbiAoZGF0YSkge1xuICAgIHRoaXMuZmlyc3ROYW1lID0gZGF0YS5maXJzdE5hbWUgfHwgJyc7XG4gICAgdGhpcy5sYXN0TmFtZSA9IGRhdGEubGFzdE5hbWUgfHwgJyc7XG4gICAgdGhpcy5waG9uZSA9IGRhdGEucGhvbmUgfHwgJ0UtbWFpbCDQvdC1INGD0LrQsNC30LDQvSc7XG4gICAgdGhpcy5zYWxhcnkgPSBkYXRhLnNhbGFyeSB8fCAwO1xuICAgIHRoaXMucG9zaXRpb24gPSBkYXRhLnBvc2l0aW9uIHx8ICfQkdC10Lcg0LTQvtC70LbQvdC+0YHRgtC4JztcbiAgICB0aGlzLmRlcGFydG1lbnQgPSBkYXRhLmRlcGFydG1lbnQgfHwgJyc7XG4gICAgdGhpcy5pbWcgPSBkYXRhLmltZztcblxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuc2FsYXJ5Rm9ybWF0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2VsZi5zYWxhcnkgKyAnINGA0YPQsS4nXG4gICAgfVxufVxuXG5QZXJzb24ucHJvdG90eXBlID0ge1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQZXJzb247XG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL21vZGVscy9tb2RlbC1pdGVtcy9wZXJzb24uanNcIixcIi9tb2RlbHMvbW9kZWwtaXRlbXNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcbiAqIENyZWF0ZWQgYnkgc25hdHZiIG9uIDA1LjEyLjE2LlxuICovXG5cblxudmFyIEJhc2VNb2RlbCA9IHJlcXVpcmUoJy4vQmFzZU1vZGVsLmpzJyk7XG52YXIgUGVyc29uID0gcmVxdWlyZSgnLi9tb2RlbC1pdGVtcy9wZXJzb24uanMnKTtcblxuLyoqXG4gKiDQnNC+0LTQtdC70Ywg0YHQvtGC0YDRg9C00L3QuNC60L7QslxuICogQGV4dGVuZHMgQmFzZU1vZGVsXG4gKiBAY2xhc3MgTW9kZWxQZXJzb25zXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTW9kZWxQZXJzb25zICgpIHtcbiAgICBCYXNlTW9kZWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLm1vZGVsSXRlbSA9IFBlcnNvbjtcbn1cblxuTW9kZWxQZXJzb25zLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZU1vZGVsLnByb3RvdHlwZSk7XG5Nb2RlbFBlcnNvbnMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmFzZU1vZGVsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGVsUGVyc29ucztcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbW9kZWxzL3BlcnNvbnMuanNcIixcIi9tb2RlbHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcbiAqIENyZWF0ZWQgYnkgc25hdHZiIG9uIDAzLjEyLjE2LlxuICovXG5cbnZhciBVdGlscyA9IHtcbiAgICByZW5kZXJUZW1wbGF0ZTogZnVuY3Rpb24gKHRlbXBsYXRlLCBkYXRhKSB7XG4gICAgICAgIHZhciBwdG4gPSAvXFx7XFx7XFxzKlthLXpBLVowLTkuXy86LV0rP1xccypcXH1cXH0vZztcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKCFkYXRhLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0eXBlb2Yga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShuZXcgUmVnRXhwKCd7eycgKyBrZXkgKyAnfX0nLCAnZycpLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKHB0biwgJycpO1xuXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqINCX0LDQvNC10L3Rj9C10LwgaG10bCDRgtC10LPQuCDQvdCwINCx0LXQt9C+0L/QsNGB0L3Ri9C1INGB0LjQvNCy0L7Qu9GLXG4gICAgICogQHBhcmFtIHN0clxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGVzY2FwZTogZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jyk7XG4gICAgfSxcbiAgICBnZXRUZW1wbGF0ZTogZnVuY3Rpb24gKHBhdGgsIGNhbGxCYWNrKSB7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCAnL2FwcC90ZW1wbGF0ZXMvJyArIHBhdGgpO1xuXG5cbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzICE9IDIwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoeGhyLnN0YXR1cyArICc6ICcgKyB4aHIuc3RhdHVzVGV4dCwgJy9hcHAvdGVtcGxhdGVzLycgKyBwYXRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsQmFjayA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH0sXG4gICAgZ2V0VGVtcGxhdGVDb21wb25lbnQ6IGZ1bmN0aW9uIChwYXRoLCBjYWxsQmFjaykge1xuICAgICAgICB0aGlzLmdldFRlbXBsYXRlKCdjb21wb25lbnRzLycgKyBwYXRoLCBjYWxsQmFjayk7XG4gICAgfSxcbiAgICBodG1sVG9FbGVtZW50OiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xuICAgIH0sXG4gICAgaGFzQ2xhc3M6IGZ1bmN0aW9uIChodG1sLCBjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGh0bWwuY2xhc3NOYW1lLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gLTE7XG4gICAgfSxcbiAgICBwYXJlbnRIdG1sQnlDbGFzczogZnVuY3Rpb24gKGh0bWwsIGNsYXNzTmFtZSkge1xuICAgICAgICB2YXIgY3VyckVsZW1lbnQgPSBodG1sO1xuICAgICAgICB3aGlsZSAoY3VyckVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgY3VyckVsZW1lbnQgPSBjdXJyRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2xhc3MoY3VyckVsZW1lbnQsIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VyckVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGVsZW1lbnRzQnlBdHRyOiBmdW5jdGlvbiAoYXR0cmlidXRlLCBibG9jaykge1xuICAgICAgICB2YXIgbWF0Y2hpbmdFbGVtZW50cyA9IFtdO1xuICAgICAgICB2YXIgYWxsRWxlbWVudHMgPSBibG9jay5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbiA9IGFsbEVsZW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgaWYgKGFsbEVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gRWxlbWVudCBleGlzdHMgd2l0aCBhdHRyaWJ1dGUuIEFkZCB0byBhcnJheS5cbiAgICAgICAgICAgICAgICBtYXRjaGluZ0VsZW1lbnRzLnB1c2goYWxsRWxlbWVudHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaGluZ0VsZW1lbnRzO1xuICAgIH0sXG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciByZXF1aXJlZCA9IHR5cGVvZiBlbGVtZW50LmdldEF0dHJpYnV0ZSgncmVxdWlyZWQnKSA9PSAnc3RyaW5nJztcbiAgICAgICAgaWYgKHJlcXVpcmVkICYmICFlbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PSAnZW1haWwnICYmICEhZWxlbWVudC52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVtaWFsVmFsaWQoZWxlbWVudC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PSAndGVsJyAmJiAhIWVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5waG9uZVZhbGlkKGVsZW1lbnQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT0gJ251bWJlcicgJiYgISFlbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNOdW0oZWxlbWVudC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGVtaWFsVmFsaWQ6IGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICB2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xuICAgIH0sXG4gICAgcGhvbmVWYWxpZDogZnVuY3Rpb24gKHBob25lKSB7XG4gICAgICAgIHBob25lID0gcGhvbmUucmVwbGFjZSgvW14wLTldL2dpbSwnJyk7XG4gICAgICAgIHZhciByZSA9IC9eKCg4fDd8MylbXFwtIF0/KShcXCg/XFxkezN9XFwpP1tcXC0gXT8pP1tcXGRcXC0gXXsxMH0kLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QocGhvbmUpO1xuICAgIH0sXG4gICAgaXNOdW06IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgc3RyID0gc3RyLnRyaW0oKTtcbiAgICAgICAgdmFyIHJlID0gL15bMC05XSokLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3Qoc3RyKTtcbiAgICB9LFxuICAgIGNoYW5nZUh0bWw6IGZ1bmN0aW9uIChlbGVtZW50LCBzdHIpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gc3RyO1xuICAgICAgICB9XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVdGlscztcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdXRpbHMuanNcIixcIi9cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcbiAqIENyZWF0ZWQgYnkgc25hdHZiIG9uIDAzLjEyLjE2LlxuICovXG5cbi8qKlxuICog0K3RgtC+INC60LvQsNGB0YEsINC00LvRjyDQvdCw0YHQu9C10LTQvtCy0LDQvdC40Y9cbiAqINC00YDRg9Cz0LjQvNC4INC/0YDQtdC00YHRgtCw0LLQu9C10L3QuNGP0LzQuFxuICogQGNsYXNzIEJhc2VWaWV3XG4gKiBAcGFyYW0gbW9kZWxcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBCYXNlVmlldyhtb2RlbCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5jbGFzc05hbWUgIT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSAnQmFzZVZpZXcnO1xuICAgIH1cbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5pbml0KCk7XG59XG5cbkJhc2VWaWV3LnByb3RvdHlwZSA9IHtcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5pdERvbSgpO1xuICAgIH0sXG4gICAgaW5pdERvbTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuai0nICsgdGhpcy5jbGFzc05hbWUpO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgVXRpbHMuZ2V0VGVtcGxhdGUodGhpcy5nZXRUZW1wbGF0ZVBhdGgoKSwgZnVuY3Rpb24odG1wbCl7XG4gICAgICAgICAgICBzZWxmLnJlbmRlclRlbXBsYXRlKHRtcGwpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHJlbmRlclRlbXBsYXRlOiBmdW5jdGlvbiAodG1wbCkge1xuXG4gICAgfSxcbiAgICBnZXRUZW1wbGF0ZVBhdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuY2xhc3NOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKCd2aWV3JywgJycpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LnRvTG9jYWxlTG93ZXJDYXNlKCkgKyAnLmh0bWwnO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzZVZpZXc7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3ZpZXdzL0Jhc2VWaWV3LmpzXCIsXCIvdmlld3NcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcbiAqIENyZWF0ZWQgYnkgc25hdHZiIG9uIDA0LjEyLjE2LlxuICovXG5cblxudmFyIEJhc2VWaWV3ID0gcmVxdWlyZSgnLi9CYXNlVmlldy5qcycpO1xudmFyIFRvRG9Sb3cgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdG9kby1yb3cuanMnKTtcbnZhciBBZGRlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hZGRlci5qcycpO1xuXG4vKipcbiAqINCS0YzRjtGF0LAsINC60L7RgtC+0YDQsNGPINC+0YLRgNC40YHQvtCy0YvQstCw0LXRgiDRgdC+0LHRi9GC0LjRj1xuICogQGNsYXNzIFRvRG9WaWV3XG4gKiBAZXh0ZW5kcyBCYXNlVmlld1xuICogQHBhcmFtIG1vZGVsXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gVG9Eb1ZpZXcobW9kZWwpIHtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lIHx8ICdUb0RvVmlldyc7XG4gICAgQmFzZVZpZXcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLkFkZGVyID0gdGhpcy5BZGRlciB8fCBBZGRlcjtcbiAgICB0aGlzLlRvRG9Sb3cgPSB0aGlzLlRvRG9Sb3cgfHwgVG9Eb1JvdztcbiAgICB0aGlzLnBhdGhBZGRUZW1wbGF0ZSA9IHRoaXMucGF0aEFkZFRlbXBsYXRlIHx8ICdjb250YWN0LWFkZC5odG1sJztcbiAgICB0aGlzLnBhdGhSZW5kZXJUZW1wbGF0ZSA9IHRoaXMucGF0aFJlbmRlclRlbXBsYXRlIHx8ICdjb250YWN0Lmh0bWwnO1xufVxuXG5Ub0RvVmlldy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VWaWV3LnByb3RvdHlwZSk7XG5Ub0RvVmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCYXNlVmlldztcblxudmFyIHByb3RvID0gVG9Eb1ZpZXcucHJvdG90eXBlO1xuXG5wcm90by5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIEJhc2VWaWV3LnByb3RvdHlwZS5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5yb3dzID0gW107XG59O1xuXG5wcm90by5yZW5kZXJUZW1wbGF0ZSA9IGZ1bmN0aW9uICh0bXBsKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciByZW5kZXJlZCA9ICBVdGlscy5yZW5kZXJUZW1wbGF0ZSh0bXBsKTtcbiAgICByZW5kZXJlZCA9IFV0aWxzLmh0bWxUb0VsZW1lbnQocmVuZGVyZWQpO1xuICAgIFV0aWxzLmdldFRlbXBsYXRlQ29tcG9uZW50KHRoaXMucGF0aFJlbmRlclRlbXBsYXRlLCBmdW5jdGlvbiAodG1wbENvbXBvbmVudCkge1xuICAgICAgICBzZWxmLnJlbmRlclJvd3MocmVuZGVyZWQsIHRtcGxDb21wb25lbnQpO1xuICAgIH0pO1xufTtcblxucHJvdG8ucmVuZGVyQWRkZXIgPSBmdW5jdGlvbiAodG1wbCwgdG1wbENvbXBvbmVudCkge1xuICAgIHZhciBhZGRlciA9IG5ldyB0aGlzLkFkZGVyKHRtcGxDb21wb25lbnQsIHt9LCB0aGlzKTtcblxuICAgIHRtcGwuYXBwZW5kQ2hpbGQoYWRkZXIuZ2V0Q29tcG9uZW50KCkpO1xuXG4gICAgdGhpcy5lbmRSZW5kZXIodG1wbCk7XG59O1xuXG5wcm90by5lbmRSZW5kZXIgPSBmdW5jdGlvbiAodG1wbCkge1xuXG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodG1wbCk7XG4gICAgfVxuICAgIGlmKHRoaXMuX3Nob3dSb3dzKSB7XG4gICAgICAgIHRoaXMuc2hvd1Jvd3MoKTtcbiAgICB9XG59O1xucHJvdG8ucmVuZGVyUm93cyA9IGZ1bmN0aW9uICh0bXBsLCBjb21wb25lbnRUbXBsKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBkYXRhID0gdGhpcy5tb2RlbC5nZXREYXRhKCk7IC8vINC/0L7Qu9GD0YfQsNC10Lwg0LTQsNC90L3Ri9C1XG5cbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7IC8vINC+0YfQuNGB0YLQuNC8XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbWF4ID0gZGF0YS5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICB2YXIgcm93RGF0YSA9IGRhdGFbaV07XG4gICAgICAgIHZhciByb3cgPSBuZXcgdGhpcy5Ub0RvUm93KGNvbXBvbmVudFRtcGwsIHJvd0RhdGEsIHRoaXMpO1xuICAgICAgICB0aGlzLnJvd3NCbG9jayA9IHRtcGwucXVlcnlTZWxlY3RvcignLmotLXJvd3MnKTtcbiAgICAgICAgdGhpcy5yb3dzLnB1c2gocm93KTtcbiAgICAgICAgdGhpcy5yb3dzQmxvY2suYXBwZW5kQ2hpbGQocm93LmdldENvbXBvbmVudCgpKTtcbiAgICB9XG5cbiAgICBVdGlscy5nZXRUZW1wbGF0ZUNvbXBvbmVudCh0aGlzLnBhdGhBZGRUZW1wbGF0ZSwgZnVuY3Rpb24gKHRtcGxDb21wb25lbnQpIHtcbiAgICAgICAgc2VsZi5yZW5kZXJBZGRlcih0bXBsLCB0bXBsQ29tcG9uZW50KTtcbiAgICB9KTtcbn07XG5cbnByb3RvLnNob3dSb3dzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKCF0aGlzLnJvd3NCbG9jaykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1Jvd3Mgd2l0aCBjbGFzcyBcImotLXJvd3NcIiBpcyBub3QgZm91bmQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoIVV0aWxzLmhhc0NsYXNzKHRoaXMucm93c0Jsb2NrLCAnc2hvdycpKSB7XG4gICAgICAgIHRoaXMucm93c0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgdGhpcy5fc2hvd1Jvd3MgPSB0cnVlO1xuICAgIH1cbn07XG5cbnByb3RvLnJlbW92ZVJvdyA9IGZ1bmN0aW9uIChtb2RlbEl0ZW0pIHtcbiAgICB0aGlzLm1vZGVsLnJlbW92ZShtb2RlbEl0ZW0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb0RvVmlldztcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdmlld3MvVG9Eb1ZpZXcuanNcIixcIi92aWV3c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxuICogQ3JlYXRlZCBieSBzbmF0dmIgb24gMDMuMTIuMTYuXG4gKi9cblxuZnVuY3Rpb24gQmFzZUNvbXBvbmVudCAodGVtcGxhdGUsIG1vZGVsSXRlbSwgcGFyZW50KSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMubW9kZWxJdGVtID0gbW9kZWxJdGVtO1xuICAgIHRoaXMucGFyZW50VmlldyA9IHBhcmVudDtcbiAgICB0aGlzLmluaXQoKTtcbn1cblxuQmFzZUNvbXBvbmVudC5wcm90b3R5cGUgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLnRlbXBsYXRlICE9ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RlbXBsYXRlIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXMgPSBVdGlscy5yZW5kZXJUZW1wbGF0ZSh0aGlzLnRlbXBsYXRlLCB0aGlzLm1vZGVsSXRlbSk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuYmluZFJlbmRlcihyZXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH0sXG4gICAgc2V0VGVtcGxhdGU6IGZ1bmN0aW9uICh0ZW1wbGF0ZSkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgfSxcbiAgICBiaW5kUmVuZGVyOiBmdW5jdGlvbiAodGVtcGxhdGUpIHtcbiAgICAgICAgdGVtcGxhdGUgPSBVdGlscy5odG1sVG9FbGVtZW50KHRlbXBsYXRlKTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH0sXG4gICAgZ2V0Q29tcG9uZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCYXNlQ29tcG9uZW50O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi92aWV3cy9jb21wb25lbnRzL0Jhc2VDb21wb25lbnQuanNcIixcIi92aWV3cy9jb21wb25lbnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHNuYXR2YiBvbiAwNC4xMi4xNi5cbiAqL1xuXG52YXIgQmFzZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vQmFzZUNvbXBvbmVudC5qcycpO1xudmFyIE1vZGFsSW1nVmlldyA9IHJlcXVpcmUoJy4uL21vZGFsLWltZy5qcycpO1xuXG4vKipcbiAqICog0JrQvtC80L/QvtC90LXQvdGCINC00LvRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDRh9C10LPQvi3Qu9C40LHQvlxuICogQGNsYXNzIEFkZGVyXG4gKiBAZXh0ZW5kcyBCYXNlQ29tcG9uZW50XG4gKiBAcGFyYW0gdGVtcGxhdGVcbiAqIEBwYXJhbSBtb2RlbEl0ZW1cbiAqIEBwYXJhbSB7VG9Eb1ZpZXd9IHBhcmVudFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEFkZGVyKHRlbXBsYXRlLCBtb2RlbEl0ZW0sIHBhcmVudCkge1xuICAgIEJhc2VDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLnBhcmVudFZpZXcgPSBwYXJlbnQ7XG5cbiAgICB0aGlzLmltZ3MgPSBbXG4gICAgICAgIHtpbWc6IFwiaHR0cHM6Ly9jMi5zdGF0aWNmbGlja3IuY29tLzQvMzExNy8zMTc1MDE0MDUyXzc0ODRkYTEyMDVfei5qcGdcIn0sXG4gICAgICAgIHtpbWc6IFwiaHR0cHM6Ly9jMi5zdGF0aWNmbGlja3IuY29tLzQvMzI2Mi8zMTc1MDE0NTU0X2RiNTk3YmJiNzNfei5qcGdcIn0sXG4gICAgICAgIHtpbWc6IFwiaHR0cHM6Ly9jMi5zdGF0aWNmbGlja3IuY29tLzQvMzY3MC84ODEzNTYyNTEyXzIyOWY1Y2YyNGFfei5qcGdcIn0sXG4gICAgICAgIHtpbWc6IFwiaHR0cHM6Ly9jMS5zdGF0aWNmbGlja3IuY29tLzkvODQ0MC83Nzg3MjM3NTE2X2I0NmFhNWZhYmJfYy5qcGdcIn0sXG4gICAgICAgIHtpbWc6IFwiaHR0cHM6Ly9jMi5zdGF0aWNmbGlja3IuY29tLzQvMzQwNC8zNDQ5NTI2MzcxXzA0NTQ1MTViMTNfei5qcGdcIn0sXG4gICAgICAgIHtpbWc6IFwiaHR0cHM6Ly9jMi5zdGF0aWNmbGlja3IuY29tLzQvMzYwMi8zNDUwMzIzNjU4X2FiNTk2MWEwYWFfei5qcGdcIn0sXG4gICAgICAgIHtpbWc6IFwiaHR0cHM6Ly9jMS5zdGF0aWNmbGlja3IuY29tLzMvMjQ5MS8zNzUxNjQ3Mzc1XzQ2OTViMzc4ZGVfei5qcGdcIn0sXG4gICAgICAgIHtpbWc6IFwiaHR0cHM6Ly9jMS5zdGF0aWNmbGlja3IuY29tLzMvMjQ0My8zNzUyNDI2MTk4X2ViZTAzZmE2MTVfei5qcGdcIn0sXG4gICAgICAgIHtpbWc6IFwiaHR0cHM6Ly9jMi5zdGF0aWNmbGlja3IuY29tLzIvMTAzMi8zMTc1MDIyMDY2XzU3ZmNlNTA1YmVfei5qcGdcIn0sXG4gICAgICAgIHtpbWc6IFwiaHR0cHM6Ly9jMS5zdGF0aWNmbGlja3IuY29tLzMvMjUyOC8zNzUxNjI0NTczXzA4ODE1Zjg5NTBfei5qcGdcIn1cbiAgICBdO1xufVxuXG5cbkFkZGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZUNvbXBvbmVudC5wcm90b3R5cGUpO1xuQWRkZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmFzZUNvbXBvbmVudDtcblxudmFyIEVSUCA9IEFkZGVyLnByb3RvdHlwZTtcblxuRVJQLmJpbmRSZW5kZXIgPSBmdW5jdGlvbiAodGVtcGxhdGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGVtcGxhdGUgPSBVdGlscy5odG1sVG9FbGVtZW50KHRlbXBsYXRlKTtcblxuICAgIHRoaXMuaW5pdEh0bWwodGVtcGxhdGUpO1xuXG4gICAgdGhpcy5zaG93QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNlbGYucGFyZW50Vmlldy5zaG93Um93cygpO1xuICAgIH0pO1xuICAgIHRoaXMuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNlbGYuYWRkKCk7XG4gICAgfSk7XG4gICAgaWYodGhpcy5hZGRQaG90bykge1xuICAgICAgICB0aGlzLmFkZFBob3RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2VsZi5zaG93TW9kYWxJbWcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufTtcblxuRVJQLmluaXRIdG1sID0gZnVuY3Rpb24gKHRlbXBsYXRlKSB7XG4gICAgdGhpcy5zaG93QnRuID0gdGVtcGxhdGUucXVlcnlTZWxlY3RvcignLmotc2hvdy1saXN0Jyk7XG4gICAgdGhpcy5hZGRCdG4gPSB0ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCcuai1hZGQtZXZlbnQnKTtcbiAgICB0aGlzLmFkZFBob3RvID0gdGVtcGxhdGUucXVlcnlTZWxlY3RvcignLmotYWRkLXBob3RvJyk7XG4gICAgdGhpcy5pbWdJbnB1dCA9IHRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJy5qLWltZy1pbnB1dCcpO1xuICAgIHRoaXMuYWRkSW1nID0gdGVtcGxhdGUucXVlcnlTZWxlY3RvcignLmotYWRkLWltZycpO1xufTtcblxuRVJQLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG59O1xuXG5FUlAuY29sbGVjdERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRhdGEgPSB7fTtcbiAgICB2YXIgdmFsaWQgPSB0cnVlO1xuICAgIHZhciBlbGVtZW50cyA9IFV0aWxzLmVsZW1lbnRzQnlBdHRyKCduYW1lJywgdGhpcy5lbGVtZW50KTtcbiAgICBmb3IgKHZhciBpID0gMCwgbWF4ID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgdmFyIG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgICBpZiAoIVV0aWxzLnZhbGlkYXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ2ltZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFBob3RvLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW25hbWVdID0gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkID8gZGF0YSA6IG51bGw7XG59O1xuXG5FUlAuYWRkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5jb2xsZWN0RGF0YSgpO1xuICAgIGlmICghZGF0YSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgZGF0YScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSB0aGlzLnBhcmVudFZpZXcuY2xhc3NOYW1lLnJlcGxhY2UoJ1ZpZXcnLCAnJyk7XG4gICAgICAgIEFwcEV2ZW50cy50cmlnZ2VyKGV2ZW50TmFtZSArICcuYWRkRGF0YScsIGRhdGEpO1xuICAgIH1cbn07XG5cbkVSUC5zaG93TW9kYWxJbWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgbmV3IE1vZGFsSW1nVmlldyh0aGlzLmltZ3MsIHRoaXMpO1xufTtcblxuRVJQLmNob29zZUltZyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGlmKCF0aGlzLmltZ3NbaW5kZXhdKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignSW1hZ2Ugd2l0aCBpbmRleCAnICsgaW5kZXggKyAnIGlzIG5vIGZvdW5kLicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudW5zZWxlY3RJbWdzKCk7XG4gICAgdGhpcy5pbWdzW2luZGV4XS5zZWxlY3QgPSAnc2VsZWN0ZWQnO1xuICAgIHRoaXMuaW1nSW5wdXQudmFsdWUgPSB0aGlzLmltZ3NbaW5kZXhdLmltZztcbiAgICB0aGlzLmFkZEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRoaXMuaW1nc1tpbmRleF0uaW1nKTtcblxufTtcblxuRVJQLnVuc2VsZWN0SW1ncyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbWF4ID0gdGhpcy5pbWdzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgIHZhciBpbWcgPSB0aGlzLmltZ3NbaV07XG4gICAgICAgIGRlbGV0ZSBpbWcuc2VsZWN0O1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWRkZXI7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3ZpZXdzL2NvbXBvbmVudHMvYWRkZXIuanNcIixcIi92aWV3cy9jb21wb25lbnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHNuYXR2YiBvbiAwNC4xMi4xNi5cbiAqL1xuXG52YXIgQWRkZXIgPSByZXF1aXJlKCcuL2FkZGVyLmpzJyk7XG5cbi8qKlxuICogKiDQmtC+0LzQv9C+0L3QtdC90YIg0LTQu9GPINC00L7QsdCw0LLQu9C10L3QuNGPINC60L7QvdGC0LDQutGC0L7QslxuICogQGNsYXNzIENvbnRhY3RBZGRcbiAqIEBleHRlbmRzIEJhc2VDb21wb25lbnRcbiAqIEBwYXJhbSB0ZW1wbGF0ZVxuICogQHBhcmFtIG1vZGVsSXRlbVxuICogQHBhcmFtIHtFdmVudHNWaWV3fSBwYXJlbnRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDb250YWN0QWRkKHRlbXBsYXRlLCBtb2RlbEl0ZW0sIHBhcmVudCkge1xuICAgIEFkZGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cblxuQ29udGFjdEFkZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFkZGVyLnByb3RvdHlwZSk7XG5Db250YWN0QWRkLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFkZGVyO1xuXG52YXIgcHJvdG8gPSBDb250YWN0QWRkLnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250YWN0QWRkO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi92aWV3cy9jb21wb25lbnRzL2NvbnRhY3QtYWRkLmpzXCIsXCIvdmlld3MvY29tcG9uZW50c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxuICogQ3JlYXRlZCBieSBzbmF0dmIgb24gMDUuMTIuMTYuXG4gKi9cblxuXG52YXIgQWRkZXIgPSByZXF1aXJlKCcuL2FkZGVyLmpzJyk7XG5cbi8qKlxuICogKiDQmtC+0LzQv9C+0L3QtdC90YIg0LTQu9GPINC00L7QsdCw0LLQu9C10L3QuNGPINC00LXQu1xuICogQGNsYXNzIERlYWxBZGRcbiAqIEBleHRlbmRzIEJhc2VDb21wb25lbnRcbiAqIEBwYXJhbSB0ZW1wbGF0ZVxuICogQHBhcmFtIG1vZGVsSXRlbVxuICogQHBhcmFtIHtFdmVudHNWaWV3fSBwYXJlbnRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBEZWFsQWRkKHRlbXBsYXRlLCBtb2RlbEl0ZW0sIHBhcmVudCkge1xuICAgIEFkZGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cblxuRGVhbEFkZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFkZGVyLnByb3RvdHlwZSk7XG5EZWFsQWRkLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFkZGVyO1xuXG52YXIgcHJvdG8gPSBEZWFsQWRkLnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZWFsQWRkO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi92aWV3cy9jb21wb25lbnRzL2RlYWwtYWRkLmpzXCIsXCIvdmlld3MvY29tcG9uZW50c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxuICogQ3JlYXRlZCBieSBzbmF0dmIgb24gMDQuMTIuMTYuXG4gKi9cblxuXG52YXIgQmFzZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vQmFzZUNvbXBvbmVudC5qcycpO1xudmFyIEFkZGVyID0gcmVxdWlyZSgnLi9hZGRlci5qcycpO1xudmFyIE1vZGFsSW1nVmlldyA9IHJlcXVpcmUoJy4uL21vZGFsLWltZy5qcycpO1xuXG4vKipcbiAqICog0JrQvtC80L/QvtC90LXQvdGCINC00LvRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDRgdC+0LHRi9GC0LjQuVxuICogQGNsYXNzIEV2ZW50QWRkXG4gKiBAZXh0ZW5kcyBCYXNlQ29tcG9uZW50XG4gKiBAcGFyYW0gdGVtcGxhdGVcbiAqIEBwYXJhbSBtb2RlbEl0ZW1cbiAqIEBwYXJhbSB7RXZlbnRzVmlld30gcGFyZW50XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gRXZlbnRBZGQodGVtcGxhdGUsIG1vZGVsSXRlbSwgcGFyZW50KSB7XG4gICAgQWRkZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuXG5FdmVudEFkZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFkZGVyLnByb3RvdHlwZSk7XG5FdmVudEFkZC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBZGRlcjtcblxudmFyIHByb3RvID0gRXZlbnRBZGQucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50QWRkO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi92aWV3cy9jb21wb25lbnRzL2V2ZW50LWFkZC5qc1wiLFwiL3ZpZXdzL2NvbXBvbmVudHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcbiAqIENyZWF0ZWQgYnkgc25hdHZiIG9uIDAzLjEyLjE2LlxuICovXG5cbnZhciBCYXNlQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9CYXNlQ29tcG9uZW50LmpzJyk7XG5cbi8qKlxuICog0JrQvtC80L/QvtC90LXQvdGCINC00LvRjyDRgdGC0YDQvtC60Lgg0YHQvtCx0YvRgtC40LlcbiAqIEBleHRlbmRzIEJhc2VDb21wb25lbnRcbiAqIEBjbGFzcyBFdmVudFJvd1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEV2ZW50Um93ICgpIHtcbiAgICBCYXNlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cblxuRXZlbnRSb3cucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlQ29tcG9uZW50LnByb3RvdHlwZSk7XG5FdmVudFJvdy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCYXNlQ29tcG9uZW50O1xuXG52YXIgRVJQID0gRXZlbnRSb3cucHJvdG90eXBlO1xuXG5FUlAuYmluZFJlbmRlciA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRlbXBsYXRlID0gVXRpbHMuaHRtbFRvRWxlbWVudCh0ZW1wbGF0ZSk7XG4gICAgdmFyIHJlbW92ZSA9IHRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJy5qLXJlbW92ZScpO1xuXG4gICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2VsZi5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59O1xuXG5FUlAucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucGFyZW50Vmlldy5yZW1vdmVSb3codGhpcy5tb2RlbEl0ZW0pO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRSb3c7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3ZpZXdzL2NvbXBvbmVudHMvZXZlbnQtcm93LmpzXCIsXCIvdmlld3MvY29tcG9uZW50c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxuICogQ3JlYXRlZCBieSBzbmF0dmIgb24gMDQuMTIuMTYuXG4gKi9cblxudmFyIEJhc2VDb21wb25lbnQgPSByZXF1aXJlKCcuL0Jhc2VDb21wb25lbnQuanMnKTtcblxuLyoqXG4gKiDQrdGC0L4g0LrQvtC80L/QvtC90LXQvdGCINC00LvRjyDQstGL0LHQvtGA0LAg0LrQsNGA0YLQuNC90LrQuCDQsiDQvNC+0LTQsNC70LrQtVxuICogQGV4dGVuZHMgQmFzZUNvbXBvbmVudFxuICogQGNhbHNzIEltZ01vZGFsXG4gKiBAcGFyYW0gdGVtcGxhdGVcbiAqIEBwYXJhbSBtb2RlbEl0ZW1cbiAqIEBwYXJhbSBwYXJlbnRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBJbWdNb2RhbCh0ZW1wbGF0ZSwgbW9kZWxJdGVtLCBwYXJlbnQpIHtcbiAgICBCYXNlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbkltZ01vZGFsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZUNvbXBvbmVudC5wcm90b3R5cGUpO1xuSW1nTW9kYWwucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmFzZUNvbXBvbmVudDtcbnZhciBwcm90byA9IEltZ01vZGFsLnByb3RvdHlwZTtcblxucHJvdG8uYmluZFJlbmRlciA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0ZW1wbGF0ZSA9IFV0aWxzLmh0bWxUb0VsZW1lbnQodGVtcGxhdGUpO1xuXG4gICAgdGhpcy5pbWdCbG9jayA9IHRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJy5qLWltZy1mb3ItY2hvb3NlJyk7XG4gICAgdGhpcy5pbWdCbG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZWxmLnBhcmVudFZpZXcuY2hvb3NlSW1nKHNlbGYubW9kZWxJdGVtKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEltZ01vZGFsO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi92aWV3cy9jb21wb25lbnRzL2ltZy1tb2RhbC5qc1wiLFwiL3ZpZXdzL2NvbXBvbmVudHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcbiAqIENyZWF0ZWQgYnkgc25hdHZiIG9uIDA0LjEyLjE2LlxuICovXG5cblxudmFyIEJhc2VDb21wb25lbnQgPSByZXF1aXJlKCcuL0Jhc2VDb21wb25lbnQuanMnKTtcblxuLyoqXG4gKiDQmtC+0LzQv9C+0L3QtdC90YIg0LTQu9GPINCy0YvQsdC+0YDQsFxuICogQGV4dGVuZHMgQmFzZUNvbXBvbmVudFxuICogQGNsYXNzIEl0ZW1TZWxlY3REYXRhXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSXRlbVNlbGVjdERhdGEgKHRlbXBsYXRlLCBtb2RlbEl0ZW0sIHBhcmVudCkge1xuICAgIEJhc2VDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLnBhcmVudFZpZXcgPSBwYXJlbnQ7XG59XG5cblxuSXRlbVNlbGVjdERhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlQ29tcG9uZW50LnByb3RvdHlwZSk7XG5JdGVtU2VsZWN0RGF0YS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCYXNlQ29tcG9uZW50O1xuXG52YXIgRVJQID0gSXRlbVNlbGVjdERhdGEucHJvdG90eXBlO1xuXG5FUlAuYmluZFJlbmRlciA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRlbXBsYXRlID0gVXRpbHMuaHRtbFRvRWxlbWVudCh0ZW1wbGF0ZSk7XG5cbiAgICB0ZW1wbGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNlbGYucGFyZW50Vmlldy5zaG93VmlldyhzZWxmLm1vZGVsSXRlbS50aXRsZSk7XG4gICAgICAgIHNlbGYucGFyZW50Vmlldy5oaWRlTGlzdCgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBJdGVtU2VsZWN0RGF0YTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdmlld3MvY29tcG9uZW50cy9pdGVtLXNlbGVjdC1kYXRhLmpzXCIsXCIvdmlld3MvY29tcG9uZW50c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxuICogQ3JlYXRlZCBieSBzbmF0dmIgb24gMDQuMTIuMTYuXG4gKi9cblxuXG52YXIgQmFzZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vQmFzZUNvbXBvbmVudC5qcycpO1xuXG4vKipcbiAqINCf0YDQvtGB0YLQviDQvNC+0LTQsNC70LrQsFxuICogQHBhcmFtIHRlbXBsYXRlXG4gKiBAcGFyYW0gbW9kZWxJdGVtXG4gKiBAcGFyYW0gcGFyZW50XG4gKiBAY2xhc3MgTW9kYWxDb21wb25lbnRcbiAqIEBleHRlbmRzIEJhc2VDb21wb25lbnRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBNb2RhbENvbXBvbmVudCh0ZW1wbGF0ZSwgbW9kZWxJdGVtLCBwYXJlbnQpIHtcbiAgICBCYXNlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbk1vZGFsQ29tcG9uZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZUNvbXBvbmVudC5wcm90b3R5cGUpO1xuTW9kYWxDb21wb25lbnQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmFzZUNvbXBvbmVudDtcblxudmFyIHByb3RvID0gTW9kYWxDb21wb25lbnQucHJvdG90eXBlO1xuXG5wcm90by5iaW5kUmVuZGVyID0gZnVuY3Rpb24gKHRlbXBsYXRlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRlbXBsYXRlID0gVXRpbHMuaHRtbFRvRWxlbWVudCh0ZW1wbGF0ZSk7XG5cbiAgICB0ZW1wbGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgcGFyZW50ID0gVXRpbHMucGFyZW50SHRtbEJ5Q2xhc3MoZXZlbnQudGFyZ2V0LCAnai1jb250YWluZXItbW9kYWwnKTtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbnByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnBhcmVudFZpZXcucmVtb3ZlTW9kYWwoKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGFsQ29tcG9uZW50O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi92aWV3cy9jb21wb25lbnRzL21vZGFsLmpzXCIsXCIvdmlld3MvY29tcG9uZW50c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxuICogQ3JlYXRlZCBieSBzbmF0dmIgb24gMDUuMTIuMTYuXG4gKi9cblxudmFyIEJhc2VDb21wb25lbnQgPSByZXF1aXJlKCcuL0Jhc2VDb21wb25lbnQuanMnKTtcbnZhciBBZGRlciA9IHJlcXVpcmUoJy4vYWRkZXIuanMnKTtcbnZhciBNb2RhbEltZ1ZpZXcgPSByZXF1aXJlKCcuLi9tb2RhbC1pbWcuanMnKTtcblxuLyoqXG4gKiAqINCa0L7QvNC/0L7QvdC10L3RgiDQtNC70Y8g0LTQvtCx0LDQstC70LXQvdC40Y8g0YHQvtGC0YDRg9C00L3QuNC60L7QslxuICogQGNsYXNzIFBlcnNvbkFkZFxuICogQGV4dGVuZHMgQmFzZUNvbXBvbmVudFxuICogQHBhcmFtIHRlbXBsYXRlXG4gKiBAcGFyYW0gbW9kZWxJdGVtXG4gKiBAcGFyYW0ge0V2ZW50c1ZpZXd9IHBhcmVudFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFBlcnNvbkFkZCh0ZW1wbGF0ZSwgbW9kZWxJdGVtLCBwYXJlbnQpIHtcbiAgICBBZGRlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5cblBlcnNvbkFkZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEFkZGVyLnByb3RvdHlwZSk7XG5QZXJzb25BZGQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWRkZXI7XG5cbnZhciBwcm90byA9IFBlcnNvbkFkZC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gUGVyc29uQWRkO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi92aWV3cy9jb21wb25lbnRzL3BlcnNvbi1hZGQuanNcIixcIi92aWV3cy9jb21wb25lbnRzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHNuYXR2YiBvbiAwNC4xMi4xNi5cbiAqL1xuXG52YXIgQmFzZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vQmFzZUNvbXBvbmVudC5qcycpO1xuXG4vKipcbiAqINCa0L7QvNC/0L7QvdC10L3RgiDQtNC70Y8g0YHRgtGA0L7QutC4XG4gKiBAZXh0ZW5kcyBCYXNlQ29tcG9uZW50XG4gKiBAY2xhc3MgVG9Eb1Jvd1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFRvRG9Sb3cgKCkge1xuICAgIEJhc2VDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuXG5Ub0RvUm93LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZUNvbXBvbmVudC5wcm90b3R5cGUpO1xuVG9Eb1Jvdy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCYXNlQ29tcG9uZW50O1xuXG52YXIgcHJvdG8gPSBUb0RvUm93LnByb3RvdHlwZTtcblxucHJvdG8uYmluZFJlbmRlciA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0ZW1wbGF0ZSA9IFV0aWxzLmh0bWxUb0VsZW1lbnQodGVtcGxhdGUpO1xuICAgIHZhciByZW1vdmUgPSB0ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCcuai1yZW1vdmUnKTtcblxuICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNlbGYucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufTtcblxucHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucGFyZW50Vmlldy5yZW1vdmVSb3codGhpcy5tb2RlbEl0ZW0pO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVG9Eb1Jvdztcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdmlld3MvY29tcG9uZW50cy90b2RvLXJvdy5qc1wiLFwiL3ZpZXdzL2NvbXBvbmVudHNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKipcbiAqIENyZWF0ZWQgYnkgc25hdHZiIG9uIDA0LjEyLjE2LlxuICovXG5cbnZhciBUb0RvVmlldyA9IHJlcXVpcmUoJy4vVG9Eb1ZpZXcuanMnKTtcbnZhciBDb250YWN0QWRkID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvbnRhY3QtYWRkLmpzJyk7XG5cbi8qKlxuICog0JLRjNGO0YXQsCwg0LrQvtGC0L7RgNCw0Y8g0L7RgtGA0LjRgdC+0LLRi9Cy0LDQtdGCINGB0L7QsdGL0YLQuNGPXG4gKiBAY2xhc3MgQ29udGFjdHNWaWV3XG4gKiBAZXh0ZW5kcyBUb0RvVmlld1xuICogQHBhcmFtIG1vZGVsXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ29udGFjdHNWaWV3KG1vZGVsKSB7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnQ29udGFjdHNWaWV3JztcbiAgICB0aGlzLmFkZFRlbXBsYXRlID0gJ2NvbnRhY3QtYWRkLmh0bWwnO1xuICAgIHRoaXMuQWRkZXIgPSBDb250YWN0QWRkO1xuICAgIFRvRG9WaWV3LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbkNvbnRhY3RzVmlldy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRvRG9WaWV3LnByb3RvdHlwZSk7XG5Db250YWN0c1ZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVG9Eb1ZpZXc7XG5cbnZhciBwcm90byA9IENvbnRhY3RzVmlldy5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGFjdHNWaWV3O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi92aWV3cy9jb250YWN0cy5qc1wiLFwiL3ZpZXdzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHNuYXR2YiBvbiAwNS4xMi4xNi5cbiAqL1xuXG52YXIgVG9Eb1ZpZXcgPSByZXF1aXJlKCcuL1RvRG9WaWV3LmpzJyk7XG52YXIgRGVhbEFkZCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9kZWFsLWFkZC5qcycpO1xuXG4vKipcbiAqINCS0YzRjtGF0LAsINC60L7RgtC+0YDQsNGPINC+0YLRgNC40YHQvtCy0YvQstCw0LXRgiDQtNC10LvQsFxuICogQGNsYXNzIERlYWxzVmlld1xuICogQGV4dGVuZHMgVG9Eb1ZpZXdcbiAqIEBwYXJhbSBtb2RlbFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIERlYWxzVmlldyhtb2RlbCkge1xuICAgIHRoaXMuY2xhc3NOYW1lID0gJ0RlYWxzVmlldyc7XG4gICAgdGhpcy5wYXRoQWRkVGVtcGxhdGUgPSAnZGVhbC1hZGQuaHRtbCc7XG4gICAgdGhpcy5wYXRoUmVuZGVyVGVtcGxhdGUgPSAnZGVhbC5odG1sJztcbiAgICB0aGlzLkFkZGVyID0gRGVhbEFkZDtcbiAgICBUb0RvVmlldy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5EZWFsc1ZpZXcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUb0RvVmlldy5wcm90b3R5cGUpO1xuRGVhbHNWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRvRG9WaWV3O1xuXG52YXIgcHJvdG8gPSBEZWFsc1ZpZXcucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERlYWxzVmlldztcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdmlld3MvZGVhbHMuanNcIixcIi92aWV3c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxuICogQ3JlYXRlZCBieSBzbmF0dmIgb24gMDMuMTIuMTYuXG4gKi9cblxudmFyIEJhc2VWaWV3ID0gcmVxdWlyZSgnLi9CYXNlVmlldy5qcycpO1xudmFyIEV2ZW50Um93ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2V2ZW50LXJvdy5qcycpO1xudmFyIEV2ZW50QWRkID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2V2ZW50LWFkZC5qcycpO1xuXG4vKipcbiAqINCS0YzRjtGF0LAsINC60L7RgtC+0YDQsNGPINC+0YLRgNC40YHQvtCy0YvQstCw0LXRgiDRgdC+0LHRi9GC0LjRj1xuICogQGNsYXNzIEV2ZW50c1ZpZXdcbiAqIEBleHRlbmRzIEJhc2VWaWV3XG4gKiBAcGFyYW0gbW9kZWxcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBFdmVudHNWaWV3KG1vZGVsKSB7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnRXZlbnRzVmlldyc7XG4gICAgQmFzZVZpZXcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuRXZlbnRzVmlldy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEJhc2VWaWV3LnByb3RvdHlwZSk7XG5FdmVudHNWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJhc2VWaWV3O1xuXG52YXIgRVZQID0gRXZlbnRzVmlldy5wcm90b3R5cGU7XG5cbkVWUC5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIEJhc2VWaWV3LnByb3RvdHlwZS5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5ldmVudFJvd3MgPSBbXTtcbn07XG5cbkVWUC5yZW5kZXJUZW1wbGF0ZSA9IGZ1bmN0aW9uICh0bXBsKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciByZW5kZXJlZCA9ICBVdGlscy5yZW5kZXJUZW1wbGF0ZSh0bXBsKTtcbiAgICByZW5kZXJlZCA9IFV0aWxzLmh0bWxUb0VsZW1lbnQocmVuZGVyZWQpO1xuICAgIFV0aWxzLmdldFRlbXBsYXRlQ29tcG9uZW50KCdldmVudC5odG1sJywgZnVuY3Rpb24gKHRtcGxDb21wb25lbnQpIHtcbiAgICAgICAgc2VsZi5yZW5kZXJSb3dzRXZlbnRzKHJlbmRlcmVkLCB0bXBsQ29tcG9uZW50KTtcbiAgICB9KTtcbn07XG5cbkVWUC5yZW5kZXJFdmVudEFkZCA9IGZ1bmN0aW9uICh0bXBsLCB0bXBsQ29tcG9uZW50KSB7XG4gICAgdmFyIGV2ZW50QWRkID0gbmV3IEV2ZW50QWRkKHRtcGxDb21wb25lbnQsIHt9LCB0aGlzKTtcblxuICAgIHRtcGwuYXBwZW5kQ2hpbGQoZXZlbnRBZGQuZ2V0Q29tcG9uZW50KCkpO1xuXG4gICAgdGhpcy5lbmRSZW5kZXIodG1wbCk7XG59O1xuXG5FVlAuZW5kUmVuZGVyID0gZnVuY3Rpb24gKHRtcGwpIHtcblxuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRtcGwpO1xuICAgIH1cbiAgICBpZih0aGlzLl9zaG93Um93cykge1xuICAgICAgICB0aGlzLnNob3dSb3dzKCk7XG4gICAgfVxufTtcbkVWUC5yZW5kZXJSb3dzRXZlbnRzID0gZnVuY3Rpb24gKHRtcGwsIGNvbXBvbmVudFRtcGwpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGRhdGEgPSB0aGlzLm1vZGVsLmdldERhdGEoKTsgLy8g0L/QvtC70YPRh9Cw0LXQvCDQtNCw0L3QvdGL0LVcblxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnJzsgLy8g0L7Rh9C40YHRgtC40LxcblxuICAgIGZvciAodmFyIGkgPSAwLCBtYXggPSBkYXRhLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgIHZhciBldmVudCA9IGRhdGFbaV07XG4gICAgICAgIHZhciBldlJvdyA9IG5ldyBFdmVudFJvdyhjb21wb25lbnRUbXBsLCBldmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMuZXZlbnRzQmxvY2sgPSB0bXBsLnF1ZXJ5U2VsZWN0b3IoJy5qLWV2ZW50cy1yb3dzJyk7XG4gICAgICAgIHRoaXMuZXZlbnRSb3dzLnB1c2goZXZSb3cpO1xuICAgICAgICB0aGlzLmV2ZW50c0Jsb2NrLmFwcGVuZENoaWxkKGV2Um93LmdldENvbXBvbmVudCgpKTtcbiAgICB9XG5cbiAgICBVdGlscy5nZXRUZW1wbGF0ZUNvbXBvbmVudCgnZXZlbnQtYWRkLmh0bWwnLCBmdW5jdGlvbiAodG1wbENvbXBvbmVudCkge1xuICAgICAgICBzZWxmLnJlbmRlckV2ZW50QWRkKHRtcGwsIHRtcGxDb21wb25lbnQpO1xuICAgIH0pO1xufTtcblxuRVZQLnNob3dSb3dzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKCF0aGlzLmV2ZW50c0Jsb2NrKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignRXZlbnRzIHJvd3Mgd2l0aCBjbGFzcyBcImotZXZlbnRzLXJvd3NcIiBpcyBub3QgZm91bmQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoIVV0aWxzLmhhc0NsYXNzKHRoaXMuZXZlbnRzQmxvY2ssICdzaG93JykpIHtcbiAgICAgICAgdGhpcy5ldmVudHNCbG9jay5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgIHRoaXMuX3Nob3dSb3dzID0gdHJ1ZTtcbiAgICB9XG59O1xuXG5FVlAucmVtb3ZlUm93ID0gZnVuY3Rpb24gKG1vZGVsSXRlbSkge1xuICAgIHRoaXMubW9kZWwucmVtb3ZlKG1vZGVsSXRlbSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50c1ZpZXc7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3ZpZXdzL2V2ZW50cy5qc1wiLFwiL3ZpZXdzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHNuYXR2YiBvbiAwNC4xMi4xNi5cbiAqL1xudmFyIEJhc2VWaWV3ID0gcmVxdWlyZSgnLi9CYXNlVmlldy5qcycpO1xudmFyIEltZ0NvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9pbWctbW9kYWwuanMnKTtcbnZhciBNb2RhbENvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9tb2RhbC5qcycpO1xuXG4vKipcbiAqINCS0YzRjtGF0LAg0LTQu9GPINC80L7QtNCw0LvQutC4INGBINC40LfQvtCx0YDQsNC20LXQvdC40Y/QvNC4XG4gKiBAY2xhc3MgTW9kYWxJbWdWaWV3XG4gKiBAZXh0ZW5kcyBCYXNlVmlld1xuICogQHBhcmFtIG1vZGVsXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gTW9kYWxJbWdWaWV3IChtb2RlbCwgcGFyZW50KSB7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnTW9kYWxJbWdWaWV3JztcbiAgICBCYXNlVmlldy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuaW1ncyA9IFtdO1xufVxuXG5Nb2RhbEltZ1ZpZXcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlVmlldy5wcm90b3R5cGUpO1xuTW9kYWxJbWdWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJhc2VWaWV3O1xudmFyIHByb3RvID0gTW9kYWxJbWdWaWV3LnByb3RvdHlwZTtcblxucHJvdG8uaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBCYXNlVmlldy5wcm90b3R5cGUuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMucmVuZGVyKCk7XG59O1xuXG5wcm90by5yZW5kZXJUZW1wbGF0ZSA9IGZ1bmN0aW9uICh0bXBsKSB7XG4gICAgdG1wbCA9IFV0aWxzLmh0bWxUb0VsZW1lbnQodG1wbCk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgVXRpbHMuZ2V0VGVtcGxhdGVDb21wb25lbnQoJ21vZGFsLmh0bWwnLCBmdW5jdGlvbiAobW9kYWxUbXBsKSB7XG4gICAgICAgIHNlbGYucmVuZGVyTW9kYWwodG1wbCwgbW9kYWxUbXBsKTtcbiAgICB9KTtcbn07XG5cbnByb3RvLnJlbmRlck1vZGFsID0gZnVuY3Rpb24gKHRtcGwsIG1vZGFsVG1wbCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMubW9kYWwgPSBuZXcgTW9kYWxDb21wb25lbnQobW9kYWxUbXBsLCB7fSwgdGhpcyk7XG4gICAgdGhpcy50bXBsID0gdGhpcy5tb2RhbC5nZXRDb21wb25lbnQoKTtcbiAgICB0aGlzLmJvZHlNb2RhbCA9IHRoaXMudG1wbC5xdWVyeVNlbGVjdG9yKCcuai1ib2R5Jyk7XG4gICAgdGhpcy5pbWdzVG1wbCA9IHRtcGw7XG4gICAgdGhpcy5ib2R5TW9kYWwuYXBwZW5kQ2hpbGQodG1wbCk7XG5cbiAgICBVdGlscy5nZXRUZW1wbGF0ZUNvbXBvbmVudCgnaW1hZ2UtZm9yLW1vZGFsLmh0bWwnLCBmdW5jdGlvbiAoaW1nVG1wbCkge1xuICAgICAgICBzZWxmLnJlbmRlckltZ0NvbXBvbmVudChpbWdUbXBsKTtcbiAgICB9KTtcbn07XG5cbnByb3RvLnJlbmRlckltZ0NvbXBvbmVudCA9IGZ1bmN0aW9uIChpbWdUbXBsKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIG1heCA9IHRoaXMubW9kZWwubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLm1vZGVsW2ldO1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltZ0NvbXBvbmVudChpbWdUbXBsLCBpdGVtLCB0aGlzKTtcbiAgICAgICAgdGhpcy5pbWdzLnB1c2goaW1nKTtcbiAgICAgICAgdGhpcy5pbWdzVG1wbC5hcHBlbmRDaGlsZChpbWcuZ2V0Q29tcG9uZW50KCkpO1xuICAgIH1cblxuICAgIHRoaXMuZW5kUmVuZGVyKCk7XG59O1xuXG5wcm90by5lbmRSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy50bXBsKTtcbiAgICB9XG59O1xuXG5wcm90by5jaG9vc2VJbWcgPSBmdW5jdGlvbiAoaW1nKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5tb2RlbC5pbmRleE9mKGltZyk7XG4gICAgaWYoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMucGFyZW50LmNob29zZUltZyhpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdUaGlzIGltZyBpcyBub3QgZm91bmQuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5tb2RhbC5yZW1vdmUoKTtcbiAgICB0aGlzLnJlbW92ZU1vZGFsKCk7XG59O1xuXG5wcm90by5yZW1vdmVNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBkZWxldGUgdGhpcy5tb2RhbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kYWxJbWdWaWV3O1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi92aWV3cy9tb2RhbC1pbWcuanNcIixcIi92aWV3c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxuICogQ3JlYXRlZCBieSBzbmF0dmIgb24gMDUuMTIuMTYuXG4gKi9cblxuXG52YXIgVG9Eb1ZpZXcgPSByZXF1aXJlKCcuL1RvRG9WaWV3LmpzJyk7XG52YXIgQ29udGFjdEFkZCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9wZXJzb24tYWRkLmpzJyk7XG5cbi8qKlxuICog0JLRjNGO0YXQsCwg0LrQvtGC0L7RgNCw0Y8g0L7RgtGA0LjRgdC+0LLRi9Cy0LDQtdGCINC60LDQtNGA0YtcbiAqIEBjbGFzcyBQZXJzb25zVmlld1xuICogQGV4dGVuZHMgVG9Eb1ZpZXdcbiAqIEBwYXJhbSBtb2RlbFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFBlcnNvbnNWaWV3KG1vZGVsKSB7XG4gICAgdGhpcy5jbGFzc05hbWUgPSAnUGVyc29uc1ZpZXcnO1xuICAgIHRoaXMucGF0aEFkZFRlbXBsYXRlID0gJ3BlcnNvbi1hZGQuaHRtbCc7XG4gICAgdGhpcy5wYXRoUmVuZGVyVGVtcGxhdGUgPSAncGVyc29uLmh0bWwnO1xuICAgIHRoaXMuQWRkZXIgPSBDb250YWN0QWRkO1xuICAgIFRvRG9WaWV3LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cblBlcnNvbnNWaWV3LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVG9Eb1ZpZXcucHJvdG90eXBlKTtcblBlcnNvbnNWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRvRG9WaWV3O1xuXG52YXIgcHJvdG8gPSBQZXJzb25zVmlldy5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gUGVyc29uc1ZpZXc7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3ZpZXdzL3BlcnNvbnMuanNcIixcIi92aWV3c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qKlxuICogQ3JlYXRlZCBieSBzbmF0dmIgb24gMDQuMTIuMTYuXG4gKi9cblxuXG52YXIgQmFzZVZpZXcgPSByZXF1aXJlKCcuL0Jhc2VWaWV3LmpzJyk7XG52YXIgSXRlbVNlbGVjdERhdGEgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvaXRlbS1zZWxlY3QtZGF0YS5qcycpO1xuXG4vKipcbiAqINCS0YzRjtGF0LAsINC60L7RgtC+0YDQsNGPINC+0YLRgNC40YHQvtCy0YvQstCw0LXRgiDRgdC+0LHRi9GC0LjRj1xuICogQGNsYXNzIFNlbGVjdERhdGFWaWV3XG4gKiBAZXh0ZW5kcyBCYXNlVmlld1xuICogQHBhcmFtIG1vZGVsXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU2VsZWN0RGF0YVZpZXcobW9kZWwpIHtcbiAgICB0aGlzLmNsYXNzTmFtZSA9ICdTZWxlY3REYXRhVmlldyc7XG4gICAgQmFzZVZpZXcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuU2VsZWN0RGF0YVZpZXcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlVmlldy5wcm90b3R5cGUpO1xuU2VsZWN0RGF0YVZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQmFzZVZpZXc7XG5cbnZhciBwcm90byA9IFNlbGVjdERhdGFWaWV3LnByb3RvdHlwZTtcblxucHJvdG8uaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBCYXNlVmlldy5wcm90b3R5cGUuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuc2VsZWN0RGF0YSA9IHtcbiAgICAgICAgQ29udGFjdHM6ICcuai1Db250YWN0c1ZpZXcnLFxuICAgICAgICBQZXJzb25zOiAnLmotUGVyc29uc1ZpZXcnLFxuICAgICAgICBEZWFsczogJy5qLURlYWxzVmlldycsXG4gICAgICAgIEV2ZW50czogJy5qLUV2ZW50c1ZpZXcnXG4gICAgfTtcbiAgICB0aGlzLmVsZW1lbnRzU2VsZWN0ID0gW107XG4gICAgdGhpcy50aXRsZUJ0biA9ICdTZWxlY3QgRGF0YSc7XG59O1xuXG5wcm90by5yZW5kZXJUZW1wbGF0ZSA9IGZ1bmN0aW9uICh0bXBsKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciByZW5kZXJlZCA9ICBVdGlscy5yZW5kZXJUZW1wbGF0ZSh0bXBsLCB7dGl0bGU6IHRoaXMudGl0bGVCdG59KTtcbiAgICByZW5kZXJlZCA9IFV0aWxzLmh0bWxUb0VsZW1lbnQocmVuZGVyZWQpO1xuICAgIFV0aWxzLmdldFRlbXBsYXRlQ29tcG9uZW50KCdzZWxlY3QtZGF0YS5odG1sJywgZnVuY3Rpb24gKHRtcGxDb21wb25lbnQpIHtcbiAgICAgICAgc2VsZi5yZW5kZXJMaXN0KHJlbmRlcmVkLCB0bXBsQ29tcG9uZW50KTtcbiAgICB9KTtcbn07XG5cbnByb3RvLnJlbmRlckxpc3QgPSBmdW5jdGlvbiAodG1wbCwgc2VsZWN0VG1wbCkge1xuICAgIHRoaXMubGlzdENvbnRhaW4gPSB0bXBsLnF1ZXJ5U2VsZWN0b3IoJy5qLWl0ZW1zLXNlbGVjdC1kYXRhJyk7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuc2VsZWN0RGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0RGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcbiAgICAgICAgdmFyIGl0ZW0gPSBuZXcgSXRlbVNlbGVjdERhdGEoc2VsZWN0VG1wbCwge3RpdGxlOmtleX0sIHRoaXMpO1xuICAgICAgICB0aGlzLmVsZW1lbnRzU2VsZWN0LnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMubGlzdENvbnRhaW4uYXBwZW5kQ2hpbGQoaXRlbS5nZXRDb21wb25lbnQoKSk7XG4gICAgfVxuXG4gICAgdGhpcy5saXN0ZW5lcnModG1wbCk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRtcGwpO1xufTtcblxucHJvdG8ubGlzdGVuZXJzID0gZnVuY3Rpb24gKHRtcGwpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmJ0biA9IHRtcGwucXVlcnlTZWxlY3RvcignLmotYnRuLXNlbGVjdCcpO1xuICAgIHRoaXMuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNlbGYudG9nZ2xlTGlzdCh0aGlzKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBVdGlscy5wYXJlbnRIdG1sQnlDbGFzcyhldmVudC50YXJnZXQsICdqLXNlbGVjdC1kYXRhLXBhcmVudCcpO1xuICAgICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAgICAgc2VsZi5oaWRlTGlzdCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5wcm90by50b2dnbGVMaXN0ID0gZnVuY3Rpb24gKGJ0bikge1xuICAgIGlmKCFVdGlscy5oYXNDbGFzcyhidG4sICdvcGVuJykpIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgdGhpcy5saXN0Q29udGFpbi5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgdGhpcy5saXN0Q29udGFpbi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgfVxufTtcbnByb3RvLmhpZGVMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICB0aGlzLmxpc3RDb250YWluLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbn07XG5cbnByb3RvLnNob3dWaWV3ID0gZnVuY3Rpb24gKGtleVNob3cpIHtcbiAgICBVdGlscy5jaGFuZ2VIdG1sKHRoaXMuYnRuLCB0aGlzLnRpdGxlQnRuKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5zZWxlY3REYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3REYXRhLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuICAgICAgICB2YXIgY2xhc3NWaWV3ID0gdGhpcy5zZWxlY3REYXRhW2tleV07XG4gICAgICAgIHZhciBibG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NWaWV3KTtcblxuICAgICAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1NlbGVjdG9yICcgKyBjbGFzc1ZpZXcgKyAnIGlzIHdyb25nLicpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09PSBrZXlTaG93KSB7XG4gICAgICAgICAgICBVdGlscy5jaGFuZ2VIdG1sKHRoaXMuYnRuLCBrZXlTaG93KTtcbiAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3REYXRhVmlldztcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwickgxSlBHXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdmlld3Mvc2VsZWN0LWRhdGEuanNcIixcIi92aWV3c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbnZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cdHZhciBQTFVTX1VSTF9TQUZFID0gJy0nLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIX1VSTF9TQUZFID0gJ18nLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUyB8fFxuXHRcdCAgICBjb2RlID09PSBQTFVTX1VSTF9TQUZFKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSCB8fFxuXHRcdCAgICBjb2RlID09PSBTTEFTSF9VUkxfU0FGRSlcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRleHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0ZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAodGhpcy5iYXNlNjRqcyA9IHt9KSA6IGV4cG9ydHMpKVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MlxuXG4vKipcbiAqIElmIGBCdWZmZXIuX3VzZVR5cGVkQXJyYXlzYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKGNvbXBhdGlibGUgZG93biB0byBJRTYpXG4gKi9cbkJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBEZXRlY3QgaWYgYnJvd3NlciBzdXBwb3J0cyBUeXBlZCBBcnJheXMuIFN1cHBvcnRlZCBicm93c2VycyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLFxuICAvLyBDaHJvbWUgNyssIFNhZmFyaSA1LjErLCBPcGVyYSAxMS42KywgaU9TIDQuMisuIElmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYWRkaW5nXG4gIC8vIHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcywgdGhlbiB0aGF0J3MgdGhlIHNhbWUgYXMgbm8gYFVpbnQ4QXJyYXlgIHN1cHBvcnRcbiAgLy8gYmVjYXVzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gYWRkIGFsbCB0aGUgbm9kZSBCdWZmZXIgQVBJIG1ldGhvZHMuIFRoaXMgaXMgYW4gaXNzdWVcbiAgLy8gaW4gRmlyZWZveCA0LTI5LiBOb3cgZml4ZWQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOFxuICB0cnkge1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMClcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIGFyci5mb28gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9XG4gICAgcmV0dXJuIDQyID09PSBhcnIuZm9vKCkgJiZcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAvLyBDaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59KSgpXG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybylcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBzdWJqZWN0XG5cbiAgLy8gV29ya2Fyb3VuZDogbm9kZSdzIGJhc2U2NCBpbXBsZW1lbnRhdGlvbiBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgc3RyaW5nc1xuICAvLyB3aGlsZSBiYXNlNjQtanMgZG9lcyBub3QuXG4gIGlmIChlbmNvZGluZyA9PT0gJ2Jhc2U2NCcgJiYgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBzdWJqZWN0ID0gc3RyaW5ndHJpbShzdWJqZWN0KVxuICAgIHdoaWxlIChzdWJqZWN0Lmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICAgIHN1YmplY3QgPSBzdWJqZWN0ICsgJz0nXG4gICAgfVxuICB9XG5cbiAgLy8gRmluZCB0aGUgbGVuZ3RoXG4gIHZhciBsZW5ndGhcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0KVxuICBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChzdWJqZWN0LCBlbmNvZGluZylcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QubGVuZ3RoKSAvLyBhc3N1bWUgdGhhdCBvYmplY3QgaXMgYXJyYXktbGlrZVxuICBlbHNlXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCBuZWVkcyB0byBiZSBhIG51bWJlciwgYXJyYXkgb3Igc3RyaW5nLicpXG5cbiAgdmFyIGJ1ZlxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIC8vIFByZWZlcnJlZDogUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBidWYgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIFRISVMgaW5zdGFuY2Ugb2YgQnVmZmVyIChjcmVhdGVkIGJ5IGBuZXdgKVxuICAgIGJ1ZiA9IHRoaXNcbiAgICBidWYubGVuZ3RoID0gbGVuZ3RoXG4gICAgYnVmLl9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmIHR5cGVvZiBzdWJqZWN0LmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgLy8gU3BlZWQgb3B0aW1pemF0aW9uIC0tIHVzZSBzZXQgaWYgd2UncmUgY29weWluZyBmcm9tIGEgdHlwZWQgYXJyYXlcbiAgICBidWYuX3NldChzdWJqZWN0KVxuICB9IGVsc2UgaWYgKGlzQXJyYXlpc2goc3ViamVjdCkpIHtcbiAgICAvLyBUcmVhdCBhcnJheS1pc2ggb2JqZWN0cyBhcyBhIGJ5dGUgYXJyYXlcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkpXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3QucmVhZFVJbnQ4KGkpXG4gICAgICBlbHNlXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3RbaV1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBidWYud3JpdGUoc3ViamVjdCwgMCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgIW5vWmVybykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuLy8gU1RBVElDIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiAoYikge1xuICByZXR1cm4gISEoYiAhPT0gbnVsbCAmJiBiICE9PSB1bmRlZmluZWQgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gZnVuY3Rpb24gKHN0ciwgZW5jb2RpbmcpIHtcbiAgdmFyIHJldFxuICBzdHIgPSBzdHIgKyAnJ1xuICBzd2l0Y2ggKGVuY29kaW5nIHx8ICd1dGY4Jykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoIC8gMlxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdyYXcnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAqIDJcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gKGxpc3QsIHRvdGFsTGVuZ3RoKSB7XG4gIGFzc2VydChpc0FycmF5KGxpc3QpLCAnVXNhZ2U6IEJ1ZmZlci5jb25jYXQobGlzdCwgW3RvdGFsTGVuZ3RoXSlcXG4nICtcbiAgICAgICdsaXN0IHNob3VsZCBiZSBhbiBBcnJheS4nKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH0gZWxzZSBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB0b3RhbExlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICB0b3RhbExlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxMZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcih0b3RhbExlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBCVUZGRVIgSU5TVEFOQ0UgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gX2hleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgYXNzZXJ0KHN0ckxlbiAlIDIgPT09IDAsICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYnl0ZSA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBhc3NlcnQoIWlzTmFOKGJ5dGUpLCAnSW52YWxpZCBoZXggc3RyaW5nJylcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlXG4gIH1cbiAgQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPSBpICogMlxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBfdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2FzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2JpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIF9hc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBTdXBwb3J0IGJvdGggKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKVxuICAvLyBhbmQgdGhlIGxlZ2FjeSAoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpXG4gIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgaWYgKCFpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2UgeyAgLy8gbGVnYWN5XG4gICAgdmFyIHN3YXAgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgb2Zmc2V0ID0gbGVuZ3RoXG4gICAgbGVuZ3RoID0gc3dhcFxuICB9XG5cbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcbiAgc3RhcnQgPSBOdW1iZXIoc3RhcnQpIHx8IDBcbiAgZW5kID0gKGVuZCAhPT0gdW5kZWZpbmVkKVxuICAgID8gTnVtYmVyKGVuZClcbiAgICA6IGVuZCA9IHNlbGYubGVuZ3RoXG5cbiAgLy8gRmFzdHBhdGggZW1wdHkgc3RyaW5nc1xuICBpZiAoZW5kID09PSBzdGFydClcbiAgICByZXR1cm4gJydcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0X3N0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzXG5cbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKCF0YXJnZXRfc3RhcnQpIHRhcmdldF9zdGFydCA9IDBcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCBzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdzb3VyY2VFbmQgPCBzb3VyY2VTdGFydCcpXG4gIGFzc2VydCh0YXJnZXRfc3RhcnQgPj0gMCAmJiB0YXJnZXRfc3RhcnQgPCB0YXJnZXQubGVuZ3RoLFxuICAgICAgJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSBzb3VyY2UubGVuZ3RoLCAnc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aClcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCA8IGVuZCAtIHN0YXJ0KVxuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgKyBzdGFydFxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmIChsZW4gPCAxMDAgfHwgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRfc3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRfc3RhcnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBfdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9ICcnXG4gIHZhciB0bXAgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoYnVmW2ldIDw9IDB4N0YpIHtcbiAgICAgIHJlcyArPSBkZWNvZGVVdGY4Q2hhcih0bXApICsgU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gICAgICB0bXAgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgKz0gJyUnICsgYnVmW2ldLnRvU3RyaW5nKDE2KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMgKyBkZWNvZGVVdGY4Q2hhcih0bXApXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKylcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gX2JpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIF9hc2NpaVNsaWNlKGJ1Ziwgc3RhcnQsIGVuZClcbn1cblxuZnVuY3Rpb24gX2hleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSsxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSBjbGFtcChzdGFydCwgbGVuLCAwKVxuICBlbmQgPSBjbGFtcChlbmQsIGxlbiwgbGVuKVxuXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5fYXVnbWVudCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgdmFyIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgICByZXR1cm4gbmV3QnVmXG4gIH1cbn1cblxuLy8gYGdldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLmdldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMucmVhZFVJbnQ4KG9mZnNldClcbn1cblxuLy8gYHNldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHYsIG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLnNldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMud3JpdGVVSW50OCh2LCBvZmZzZXQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgdmFsID0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICB9IGVsc2Uge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDJdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgICB2YWwgfD0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0ICsgM10gPDwgMjQgPj4+IDApXG4gIH0gZWxzZSB7XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMV0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMl0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAzXVxuICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0XSA8PCAyNCA+Pj4gMClcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsXG4gICAgICAgICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICB2YXIgbmVnID0gdGhpc1tvZmZzZXRdICYgMHg4MFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQxNihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MzIoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMDAwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZmZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRmxvYXQgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWREb3VibGUgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuXG5cbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCAyKTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAgICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZmZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2YsIC0weDgwKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICB0aGlzLndyaXRlVUludDgodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICB0aGlzLndyaXRlVUludDgoMHhmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmLCAtMHg4MDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQxNihidWYsIDB4ZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQzMihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MzIoYnVmLCAweGZmZmZmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCxcbiAgICAgICAgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBmaWxsKHZhbHVlLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXZhbHVlKSB2YWx1ZSA9IDBcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kKSBlbmQgPSB0aGlzLmxlbmd0aFxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5jaGFyQ29kZUF0KDApXG4gIH1cblxuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpLCAndmFsdWUgaXMgbm90IGEgbnVtYmVyJylcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgdGhpcy5sZW5ndGgsICdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSB0aGlzLmxlbmd0aCwgJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHRoaXNbaV0gPSB2YWx1ZVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG91dCA9IFtdXG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgb3V0W2ldID0gdG9IZXgodGhpc1tpXSlcbiAgICBpZiAoaSA9PT0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUykge1xuICAgICAgb3V0W2kgKyAxXSA9ICcuLi4nXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIG91dC5qb2luKCcgJykgKyAnPidcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpXG4gICAgICAgIGJ1ZltpXSA9IHRoaXNbaV1cbiAgICAgIHJldHVybiBidWYuYnVmZmVyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgZ2V0L3NldCBtZXRob2RzIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX2dldCA9IGFyci5nZXRcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZCwgd2lsbCBiZSByZW1vdmVkIGluIG5vZGUgMC4xMytcbiAgYXJyLmdldCA9IEJQLmdldFxuICBhcnIuc2V0ID0gQlAuc2V0XG5cbiAgYXJyLndyaXRlID0gQlAud3JpdGVcbiAgYXJyLnRvU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvTG9jYWxlU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvSlNPTiA9IEJQLnRvSlNPTlxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50OCA9IEJQLnJlYWRVSW50OFxuICBhcnIucmVhZFVJbnQxNkxFID0gQlAucmVhZFVJbnQxNkxFXG4gIGFyci5yZWFkVUludDE2QkUgPSBCUC5yZWFkVUludDE2QkVcbiAgYXJyLnJlYWRVSW50MzJMRSA9IEJQLnJlYWRVSW50MzJMRVxuICBhcnIucmVhZFVJbnQzMkJFID0gQlAucmVhZFVJbnQzMkJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludDggPSBCUC53cml0ZUludDhcbiAgYXJyLndyaXRlSW50MTZMRSA9IEJQLndyaXRlSW50MTZMRVxuICBhcnIud3JpdGVJbnQxNkJFID0gQlAud3JpdGVJbnQxNkJFXG4gIGFyci53cml0ZUludDMyTEUgPSBCUC53cml0ZUludDMyTEVcbiAgYXJyLndyaXRlSW50MzJCRSA9IEJQLndyaXRlSW50MzJCRVxuICBhcnIud3JpdGVGbG9hdExFID0gQlAud3JpdGVGbG9hdExFXG4gIGFyci53cml0ZUZsb2F0QkUgPSBCUC53cml0ZUZsb2F0QkVcbiAgYXJyLndyaXRlRG91YmxlTEUgPSBCUC53cml0ZURvdWJsZUxFXG4gIGFyci53cml0ZURvdWJsZUJFID0gQlAud3JpdGVEb3VibGVCRVxuICBhcnIuZmlsbCA9IEJQLmZpbGxcbiAgYXJyLmluc3BlY3QgPSBCUC5pbnNwZWN0XG4gIGFyci50b0FycmF5QnVmZmVyID0gQlAudG9BcnJheUJ1ZmZlclxuXG4gIHJldHVybiBhcnJcbn1cblxuLy8gc2xpY2Uoc3RhcnQsIGVuZClcbmZ1bmN0aW9uIGNsYW1wIChpbmRleCwgbGVuLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgaW5kZXggPSB+fmluZGV4OyAgLy8gQ29lcmNlIHRvIGludGVnZXIuXG4gIGlmIChpbmRleCA+PSBsZW4pIHJldHVybiBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICBpbmRleCArPSBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICByZXR1cm4gMFxufVxuXG5mdW5jdGlvbiBjb2VyY2UgKGxlbmd0aCkge1xuICAvLyBDb2VyY2UgbGVuZ3RoIHRvIGEgbnVtYmVyIChwb3NzaWJseSBOYU4pLCByb3VuZCB1cFxuICAvLyBpbiBjYXNlIGl0J3MgZnJhY3Rpb25hbCAoZS5nLiAxMjMuNDU2KSB0aGVuIGRvIGFcbiAgLy8gZG91YmxlIG5lZ2F0ZSB0byBjb2VyY2UgYSBOYU4gdG8gMC4gRWFzeSwgcmlnaHQ/XG4gIGxlbmd0aCA9IH5+TWF0aC5jZWlsKCtsZW5ndGgpXG4gIHJldHVybiBsZW5ndGggPCAwID8gMCA6IGxlbmd0aFxufVxuXG5mdW5jdGlvbiBpc0FycmF5IChzdWJqZWN0KSB7XG4gIHJldHVybiAoQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoc3ViamVjdCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ViamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgfSkoc3ViamVjdClcbn1cblxuZnVuY3Rpb24gaXNBcnJheWlzaCAoc3ViamVjdCkge1xuICByZXR1cm4gaXNBcnJheShzdWJqZWN0KSB8fCBCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkgfHxcbiAgICAgIHN1YmplY3QgJiYgdHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2Ygc3ViamVjdC5sZW5ndGggPT09ICdudW1iZXInXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaWYgKGIgPD0gMHg3RilcbiAgICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHN0YXJ0ID0gaVxuICAgICAgaWYgKGIgPj0gMHhEODAwICYmIGIgPD0gMHhERkZGKSBpKytcbiAgICAgIHZhciBoID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci5zbGljZShzdGFydCwgaSsxKSkuc3Vic3RyKDEpLnNwbGl0KCclJylcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaC5sZW5ndGg7IGorKylcbiAgICAgICAgYnl0ZUFycmF5LnB1c2gocGFyc2VJbnQoaFtqXSwgMTYpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShzdHIpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgcG9zXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpXG4gICAgICBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGRlY29kZVV0ZjhDaGFyIChzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSAvLyBVVEYgOCBpbnZhbGlkIGNoYXJcbiAgfVxufVxuXG4vKlxuICogV2UgaGF2ZSB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdmFsdWUgaXMgYSB2YWxpZCBpbnRlZ2VyLiBUaGlzIG1lYW5zIHRoYXQgaXRcbiAqIGlzIG5vbi1uZWdhdGl2ZS4gSXQgaGFzIG5vIGZyYWN0aW9uYWwgY29tcG9uZW50IGFuZCB0aGF0IGl0IGRvZXMgbm90XG4gKiBleGNlZWQgdGhlIG1heGltdW0gYWxsb3dlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gdmVyaWZ1aW50ICh2YWx1ZSwgbWF4KSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA+PSAwLCAnc3BlY2lmaWVkIGEgbmVnYXRpdmUgdmFsdWUgZm9yIHdyaXRpbmcgYW4gdW5zaWduZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgaXMgbGFyZ2VyIHRoYW4gbWF4aW11bSB2YWx1ZSBmb3IgdHlwZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmc2ludCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmSUVFRTc1NCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG59XG5cbmZ1bmN0aW9uIGFzc2VydCAodGVzdCwgbWVzc2FnZSkge1xuICBpZiAoIXRlc3QpIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8ICdGYWlsZWQgYXNzZXJ0aW9uJylcbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2J1ZmZlclwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInJIMUpQR1wiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2llZWU3NTRcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5wcm9jZXNzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuU2V0SW1tZWRpYXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJySDFKUEdcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3NcIikiXX0=
