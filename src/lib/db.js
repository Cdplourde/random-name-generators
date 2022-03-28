import '$lib/variables';
import pg from 'pg'
if (!process.env.ISDEV) pg.defaults.ssl = true;
const Pool = pg.Pool

const pool = new Pool()

export default pool;