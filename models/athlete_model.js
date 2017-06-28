var Bookshelf = require('../bookshelf');
require('./activity_model');

var Athlete = Bookshelf.Model.extend({
    tableName: 'athlete',
    activities: function () {
        return this.hasMany('Activity');
    }
});

module.exports = Bookshelf.model('Athlete', Athlete);
