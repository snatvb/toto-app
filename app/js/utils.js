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