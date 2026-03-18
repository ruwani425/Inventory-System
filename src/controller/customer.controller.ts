import { Customer } from '../models/customer'

export const createCustomer = async (c: any) => {
  try {
    const body = await c.req.json()
    const customer = await Customer.create(body)
    return c.json(customer, 201)
  } catch (error) {
    return c.json({ error: 'Failed to create customer' }, 500)
  }
}

export const getAllCustomers = async (c: any) => {
  try {
    const customers = await Customer.find()
    return c.json(customers)
  } catch (error) {
    return c.json({ error: 'Failed to fetch customers' }, 500)
  }
}

export const getCustomerById = async (c: any) => {
  try {
    const id = c.req.param('id')
    const customer = await Customer.findById(id)
    if (!customer) return c.json({ error: 'Customer not found' }, 404)
    return c.json(customer)
  } catch (error) {
    return c.json({ error: 'Invalid ID or server error' }, 500)
  }
}

export const updateCustomer = async (c: any) => {
  try {
    const id = c.req.param('id')
    const body = await c.req.json()
    const updated = await Customer.findByIdAndUpdate(id, body, { returnDocument: 'after', runValidators: true })
    if (!updated) return c.json({ error: 'Customer not found' }, 404)
    return c.json(updated)
  } catch (error) {
    return c.json({ error: 'Failed to update customer' }, 500)
  }
}

export const deleteCustomer = async (c: any) => {
  try {
    const id = c.req.param('id')
    const deleted = await Customer.findByIdAndDelete(id)
    if (!deleted) return c.json({ error: 'Customer not found' }, 404)
    return c.json({ message: 'Customer deleted successfully' })
  } catch (error) {
    return c.json({ error: 'Failed to delete customer' }, 500)
  }
}