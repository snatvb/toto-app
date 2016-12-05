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