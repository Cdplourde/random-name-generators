import '$lib/variables';
import pg from 'pg'
const Pool = pg.Pool

console.log(process.env.CA_CERT)
const cxn = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  ssl: {
    rejectUnauthorized: true,
    ca: process.env.CA_CERT
  }
}

const pool = new Pool(cxn)

export default pool;