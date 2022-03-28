import { variables } from '$lib/variables';
import { Pool } from 'pg'

const pool = new Pool({
  user: variables.DB_USER,
  host: variables.DB_HOST,
  database: variables.DB_NAME,
  password: variables.DB_PASSWORD
})

export default pool;