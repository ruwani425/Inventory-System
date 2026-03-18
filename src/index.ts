import { Hono } from 'hono'
import { connectDB } from './db'
import productRoutes from './routes/product.routes'

const app = new Hono()

connectDB()

app.route('/products', productRoutes)

export default app