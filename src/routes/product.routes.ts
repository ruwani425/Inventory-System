import { Hono } from 'hono'
import { createproduct } from '../controller/product.controller'

const productRoutes = new Hono()

productRoutes.post('/create', createproduct)

export default productRoutes