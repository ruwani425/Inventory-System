import { Customer } from '../models/customer'
import { Order } from '../models/order'
import { Product } from '../models/product'

export const placeorder = async (c:any) => {
    try {
        const {customerId,items} = await c.req.json()
        const customer = await Customer.findById(customerId)

        if (!customer){
            return c.json({ error: 'Customer not found' }, 404)
        }
        
        let totalAmount = 0
        const orderitems = []

        for (const item of items) {
            const product = await Product.findById(item.productId)
            if (!product) { 
                return c.json({ error: `Product ${item.productId} not found` }, 404)
            }

            if(product.quantity < item.quantity){
                return c.json({error: `${product.name} out of stock`},400)
            }

            product.quantity -= item.quantity
            await product.save()

            orderitems.push({
                product:product._id,
                quantity:item.quantity,
                price:product.price
            })

            totalAmount += product.price * item.quantity
        }
        const order = await Order.create({
            customer:customerId,
            products:orderitems,
            totalAmount
        })
        return c.json(order, 201)
    } catch (error) {
        console.error(error)
        return c.json({ error: 'Failed to place order' }, 500)
    }
}