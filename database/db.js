import { Pool } from "pg"


const conn = new Pool({
    user: "postgres",
    password: "postgresD",
    database: "postgres",
    host: "127.0.0.1",
    port: 5432,
})

export default conn

