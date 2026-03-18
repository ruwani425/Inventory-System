import { Hono } from 'hono'
import { connectDB } from './db'
import productRoutes from './routes/product.routes'
import customerRoutes from './routes/customer.routes'

const app = new Hono()

connectDB()

app.route('/products', productRoutes)
app.route('/customer', customerRoutes)

export default app