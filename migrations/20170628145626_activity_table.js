exports.up = function(knex, Promise) {
    return knex.schema.createTable('activity', function(table){
        table.increments('id');
        table.integer('athlete_id').references('id').inTable('athlete');
        table.string('type');
        table.string('distance');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('activity');
};
