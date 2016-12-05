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