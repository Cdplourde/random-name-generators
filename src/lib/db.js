import { variables } from '$lib/variables';
import pg from 'pg'
const Pool = pg.Pool

const config = process.env.DB_USER ? 'postgresql://db-random-name-generators:w5amfX3mG9lFz4VH@app-b2225c53-4b10-4b8e-88c2-b2ce72d77ab8-do-user-9139609-0.b.db.ondigitalocean.com:25060/db-random-name-generators?sslmode=require' : {
  user: variables.DB_USER,
  host: variables.DB_HOST,
  database: variables.DB_NAME,
  password: variables.DB_PASSWORD,
  port: variables.DB_PORT,
  ssl: variables.DB_SSL == 'false' ? false : true
}

const pool = new Pool(config)

export default pool;