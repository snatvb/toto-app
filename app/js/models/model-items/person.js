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