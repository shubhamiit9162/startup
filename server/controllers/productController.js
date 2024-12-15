const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products (authenticated) & /api/products/guest (unauthenticated)
// @access  Public or Protected
exports.getProducts = async (req, res) => {
  try {
    // Check if the request is from a guest user
    const isGuestUser = !req.headers.authorization;

    if (isGuestUser) {
      // Return a limited set of products for guest users
      const guestProducts = await Product.find().limit(10); // Restrict to 10 products
      return res.status(200).json({
        message: 'Showing limited products for guest users',
        products: guestProducts,
      });
    }

    // Authenticated users get the full product list
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get a single product by ID
// @route   GET /api/products/:id
// @access  Public
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Create a new product
// @route   POST /api/products
// @access  Protected
exports.createProduct = async (req, res) => {
  const { name, price, description, imageUrl, salePrice } = req.body;

  try {
    const newProduct = new Product({
      name,
      price,
      description,
      imageUrl,
      salePrice,
    });

    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Update a product by ID
// @route   PUT /api/products/:id
// @access  Protected
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Delete a product by ID
// @route   DELETE /api/products/:id
// @access  Protected
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
