exports.up = function(knex, Promise) {
    return knex.schema.createTable('athlete', function(table){
        table.increments('id');
        table.string('firstname').notNullable();
        table.string('lastname').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('athlete');
};
