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
