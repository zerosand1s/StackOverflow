var Bookshelf = require('../bookshelf');
require('./athlete_model');

var Activity = Bookshelf.Model.extend({
    tableName: 'activity',
    athlete: function () {
        return this.belongsTo('Athlete');
    }
});

module.exports = Bookshelf.model('Activity', Activity);
