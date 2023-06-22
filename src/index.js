import express from 'express'
import indexRoutes from './routes/index.routes.js'
import clientesRoutes from './routes/clientes.routes.js'
//

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api', clientesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint no encontrado'
    })
})

app.listen(3000)
console.log('server running on port ', 3000)