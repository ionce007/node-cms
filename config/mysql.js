const mysql = require('mysql2/promise');
// 连接池pool（用于普通查询）
const pool = mysql.createPool({
    host: 'mysql.sqlpub.com:3306',
    user: 'hmionce',
    password: 'a4f26ba3886b4855',
    database: 'stockblog',
    // debug: true,
});

module.exports = pool;
