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