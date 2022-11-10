require('dotenv').config();
var Pool = require('pg').Pool;
var PG_URI = process.env.PG_URI;
var pool = new Pool({
    connectionString: PG_URI
});
module.exports = {
    query: function (text, params, callback) {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};
//# sourceMappingURL=db.js.map