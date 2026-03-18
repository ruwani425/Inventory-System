import { Hono } from 'hono'
import { createproduct, getallproducts, getproductbyid } from '../controller/product.controller'

const productRoutes = new Hono()

productRoutes.post('/create', createproduct)
productRoutes.get('/get', getallproducts)
productRoutes.get('/get/:id',getproductbyid)

export default productRoutes