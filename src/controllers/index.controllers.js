import { pool } from "../db.js"

export const ping = async (req, res) => {
    const [resultados] = await pool.query('SELECT 1 + 1 AS resultados')
    res.json(resultados[0])
}
