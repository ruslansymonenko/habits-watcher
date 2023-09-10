import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgress',
  password: 'root',
  host: 'localhost',
  port: 5432,
});

export default pool;
