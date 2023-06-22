import { pool } from "../db.js"

export const getClientes = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM clientes')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error'
        })
    }
}

export const getCliente = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM clientes WHERE id = ?', [req.params.id])
    
        if (rows.length <= 0 ) return res.status(404).json({
            massage: 'Cliente no encontrado'
        })
    
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error'
        })
    }
}

export const createClientes = async (req, res) => {
    try {
        const {nombre, apellido, telefono, cedula, email} = req.body
        const [rows] = await pool.query('INSERT INTO clientes (nombre, apellido, telefono, cedula, email) VALUES (?, ?, ?, ?, ?)', [nombre, apellido, telefono, cedula, email])
       
        res.send({
            id: rows.insertId,
            nombre, 
            apellido,
            telefono,
            cedula,
            email
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error'
        })
    }
}

export const actClientes = async (req, res) => {
    try {
        const {id} = req.params
        const {nombre, apellido, telefono, cedula, email} = req.body
        
        const [result] = await pool.query('UPDATE clientes SET nombre = IFNULL(?, nombre), apellido = IFNULL(?, apellido), telefono = IFNULL(?, telefono), cedula = IFNULL(?, cedula), email = IFNULL(?, email) WHERE id = ?', [nombre, apellido, telefono, cedula, email, id])
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Cliente no encontrado'
        })
    
        const [rows] = await pool.query('SELECT * FROM clientes WHERE id = ?', [id])
    
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error'
        })
    }
}

export const delClientes = async (req, res) => {
    try {
        const [result] = await pool.query('delete from clientes where id = ?', [req.params.id])
    
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Cliente no encontrado'
        }) 
    
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error'
        })
    }
}