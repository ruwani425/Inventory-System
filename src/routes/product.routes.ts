import { Hono } from 'hono'
import { createproduct, deleteproductbyid, getallproducts, getproductbyid, updateproductbyid } from '../controller/product.controller'

const productRoutes = new Hono()

productRoutes.post('/create', createproduct)
productRoutes.get('/get', getallproducts)
productRoutes.get('/get/:id',getproductbyid)
productRoutes.put('/update/:id',updateproductbyid)
productRoutes.delete('/delete/:id',deleteproductbyid)

export default productRoutes