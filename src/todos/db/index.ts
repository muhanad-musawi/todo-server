import path from "path"
import  {Pool}  from "pg";
import {migrate} from "postgres-migrations";


const poolConfig = {
user: process.env.DB_USER, 
password: process.env.DB_PASSWORD,  
host: process.env.DB_HOST,
port: Number(process.env.DB_PORT),
database: process.env.DB_NAME,
}

const pool = new Pool(poolConfig)

const db = {

    runMigrations: async function (): Promise<void> {
        const client = await pool.connect()
        try {
            await migrate({ client }, path.join(__dirname, "migrations"))
        } catch (error) {
            console.error(error, "Error running migrations")
        }
        finally {
            client.release()
        }
    },
}

export default db