import { Hono } from 'hono'
import { createproduct, deleteproductbyid, getallproducts, getproductbyid, updateproductbyid } from '../controller/product.controller'

const productRoutes = new Hono()

productRoutes.post('/', createproduct)
productRoutes.get('/', getallproducts)
productRoutes.get('/:id',getproductbyid)
productRoutes.put('/:id',updateproductbyid)
productRoutes.delete('/:id',deleteproductbyid)

export default productRoutes