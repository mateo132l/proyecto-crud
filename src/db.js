import {createPool} from 'mysql2/promise';


export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Dmhosting123@',
    port: 3306,
    database: 'clientesdb'
})

