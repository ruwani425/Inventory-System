import { Hono } from 'hono'
import { createproduct, getallproducts } from '../controller/product.controller'

const productRoutes = new Hono()

productRoutes.post('/create', createproduct)
productRoutes.get('/get', getallproducts)

export default productRoutes