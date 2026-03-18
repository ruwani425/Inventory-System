import { Product } from "../models/product"

export const createproduct = async (c:any) => {
    try {
        // console.log(c.req)

        const body = await c.req.json()
        const product = await Product.create(body)
        // return 'product saved successfully'
        return c.json(product, 201)
    } catch (error) {
        return c.json({ error: 'Failed to save product' }, 500)
    }
}

export const getallproducts = async (c:any) => {
    try {
        // console.log(c.req)
        const products = await Product.find()
        return c.json(products)
    } catch (error) {
        return c.json({error:'faild to fetch products'},500)
    }
}

export const getproductbyid = async (c:any) => {
    try {
        const id = c.req.param('id')
        const product = await Product.findById(id)
        if(!product){
            return c.json({error:'failed to fetch product'},404)
        }
        return c.json(product)
    } catch (error) {
        return c.json({ error: 'Invalid ID or server error' }, 500)
    }
}
