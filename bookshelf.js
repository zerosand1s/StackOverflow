var knex = require('knex')(require('./knexfile')[process.env.NODE_ENV || 'development']);

var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

module.exports = bookshelf;
