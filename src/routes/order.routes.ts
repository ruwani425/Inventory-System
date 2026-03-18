import { Hono } from 'hono'
import { placeorder } from '../controller/order.controller'

const orderRoutes = new Hono()

orderRoutes.post('/', placeorder)

export default orderRoutes