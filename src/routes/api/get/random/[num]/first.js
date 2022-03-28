import db from '$lib/db';
import SQL from 'sql-template-strings';

export async function get({ params }) {
  // `params.id` comes from [id].js
  let item = await db.query(SQL`SELECT name FROM name WHERE category_id = 1 OR category_id = 2 ORDER BY RANDOM() LIMIT ${params.num}`)
  let rows = item.rows;
 
  if (item) {
    return {
      body: { rows }
    };
  }
 
  return {
    status: 404
  };
}