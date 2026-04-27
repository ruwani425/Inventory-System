import { Customer } from '../models/customer'

export const createCustomer = async (c: any) => {
  try {
    //json() method is used to parse the request body as JSON and return it as a JavaScript object.
    const body = await c.req.json()
    //Reading the request body is an asynchronous operation, so it needs await.
    const customer = await Customer.create(body)
    return c.json(customer, 201)
  } catch (error) {
    return c.json({ error: 'Failed to create customer' }, 500)
  }
}

export const getAllCustomers = async (c: any) => {
  try {
    const customers = await Customer.find()

    // for (const customer of customers) {
    //   console.log(customer.email)
    // }
    //to ignore the --v field and return only the required fields in the response
    return c.json(customers.map(customer => ({
      id: customer._id,
      name: customer.name,
      email: customer.email
    })))
  } catch (error) {
    return c.json({ error: 'Failed to fetch customers' }, 500)
  }
}

//c is the context object provided by Hono, which contains the request and response objects,
// as well as other useful methods and properties for handling HTTP requests and responses.
// The getCustomerById function retrieves a customer by their ID from the database and returns it as a JSON response
// If the customer is not found, it returns a 404 error. If there is an invalid ID or server error, it returns a 500 error
export const getCustomerById = async (c: any) => {
  try {
    const id = c.req.param('id')
    const customer = await Customer.findById(id)
    if (!customer) return c.json({ error: 'Customer not found' }, 404)
    return c.json({
      id: customer._id,
      name: customer.name,
      email: customer.email
    })
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