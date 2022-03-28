import { variables } from '$lib/variables';
import pg from 'pg'
const Pool = pg.Pool

const pool = new Pool({
  user: variables.DB_USER,
  host: variables.DB_HOST,
  database: variables.DB_NAME,
  password: variables.DB_PASSWORD
})

export default pool;