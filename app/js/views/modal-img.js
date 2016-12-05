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