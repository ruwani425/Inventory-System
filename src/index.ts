import { Hono } from 'hono'
import { connectDB } from './db'
import productRoutes from './routes/product.routes'
import customerRoutes from './routes/customer.routes'
import orderRoutes from './routes/order.routes'

const app = new Hono()

connectDB()

app.route('/products', productRoutes)
app.route('/customer', customerRoutes)
app.route('/orders', orderRoutes)

export default app