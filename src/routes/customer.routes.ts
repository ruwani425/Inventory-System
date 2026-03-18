import { Hono } from 'hono'
import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer
} from '../controller/customer.controller'

const customerRoutes = new Hono()

customerRoutes.post('/', createCustomer)
customerRoutes.get('/', getAllCustomers)
customerRoutes.get('/:id', getCustomerById)
customerRoutes.put('/:id', updateCustomer)
customerRoutes.delete('/:id', deleteCustomer)

export default customerRoutes