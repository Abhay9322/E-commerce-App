import Product from "../models/productModel.js";


//  Get all products

export const getProducts = async (req,res) => {
    const products = await Product.find();
    res.json(products);
};

//  Add new product
export const addProduct = async (req,res) => {
    const { name, description, price, image } = req.body;

    const newProduct = new Product({ name, description, price, image });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully' });
};

//  Delete product by ID

export const deleteProduct = async (req,res) => {
    const { id } = req.params;
    await Product.findById(id);
    res.json({ message: 'Product deleted successfully' });

};


//   Update product by ID

export const editProduct = async (req,res) => {
      const { id } = req.params;

      const { name, description, price, image } = req.body;

      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, description, price, image },
        { new: true }
      );

      res.json(updatedProduct);
};