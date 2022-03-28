process.env.PGPASSWORD ? '' : process.env.PGPASSWORD = import.meta.env.VITE_PGPASSWORD
process.env.PGUSER ? '' : process.env.PGUSER = import.meta.env.VITE_PGUSER
process.env.PGHOST ? '' : process.env.PGHOST = import.meta.env.VITE_PGHOST
process.env.PGDATABASE ? '' : process.env.PGDATABASE = import.meta.env.VITE_PGDATABASE
process.env.PGPORT ? '' : process.env.PGPORT = import.meta.env.VITE_PGPORT
process.env.PGSSLMODE ? '' : process.env.PGSSLMODE = import.meta.env.VITE_PGSSLMODE