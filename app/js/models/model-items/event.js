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