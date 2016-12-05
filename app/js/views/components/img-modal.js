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