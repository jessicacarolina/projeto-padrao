import pg from 'pg';

const pool = new pg.Pool({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 5432,
});

export default pool;
