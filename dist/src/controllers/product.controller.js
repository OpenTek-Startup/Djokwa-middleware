"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordSale = exports.checkInventoryLevels = exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// 1. Create a New Product
const createProduct = async (req, res) => {
    const { Name, Description, Category, Price, Quantity, LowStockAlert, Warehouse_ID, } = req.body;
    try {
        // Check if the warehouse exists
        const warehouseExists = await prisma.warehouse.findUnique({
            where: { Id: Number(Warehouse_ID) },
        });
        if (!warehouseExists) {
            res.status(400).json({ error: 'Warehouse does not exist' });
            return;
        }
        // Create the new product
        const newProduct = await prisma.product.create({
            data: {
                Name,
                Description,
                Category,
                Price,
                Quantity,
                LowStockAlert,
                Warehouse_ID,
            },
        });
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createProduct = createProduct;
// 2. Retrieve All Products with Warehouse Information
const getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: { Warehouse: true },
        });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllProducts = getAllProducts;
// 3. Get a Single Product by ID with Warehouse Information
const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await prisma.product.findUnique({
            where: { Id: Number(id) },
            include: { Warehouse: true },
        });
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getProductById = getProductById;
// 4. Update a Product
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { Name, Description, Category, Price, Quantity, LowStockAlert, Warehouse_ID, } = req.body;
    try {
        const updatedProduct = await prisma.product.update({
            where: { Id: Number(id) },
            data: {
                Name,
                Description,
                Category,
                Price,
                Quantity,
                LowStockAlert,
                Warehouse_ID,
            },
        });
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.updateProduct = updateProduct;
// 5. Delete a Product
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.product.delete({
            where: { Id: Number(id) },
        });
        res.status(200).json({ message: 'Product deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteProduct = deleteProduct;
// 6. Check Inventory Levels and Low Stock Alerts
const checkInventoryLevels = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: { Warehouse: true },
        });
        // Check for products with quantities below the alert threshold
        const lowStockProducts = products.filter((product) => product.Quantity <= product.LowStockAlert);
        res.status(200).json({
            totalProducts: products.length,
            lowStockProducts,
            message: lowStockProducts.length > 0
                ? 'Some products are running low on stock!'
                : 'All products are sufficiently stocked.',
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.checkInventoryLevels = checkInventoryLevels;
// 7. Record a Sale and Update Inventory
const recordSale = async (req, res) => {
    const { Product_ID, Quantity } = req.body;
    try {
        // Find the product and validate stock availability
        const product = await prisma.product.findUnique({
            where: { Id: Product_ID },
        });
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        if (Quantity > product.Quantity) {
            res.status(400).json({ error: 'Insufficient stock for this sale.' });
            return;
        }
        // Calculate the total amount for the sale
        const totalAmount = product.Price * Quantity;
        // Create the transaction record
        const transaction = await prisma.transaction.create({
            data: {
                Product_ID,
                Quantity,
                TotalAmount: totalAmount,
            },
        });
        // Update product quantity in inventory
        const updatedProduct = await prisma.product.update({
            where: { Id: Product_ID },
            data: { Quantity: product.Quantity - Quantity },
        });
        // Generate and send the invoice response
        const invoice = {
            transactionID: transaction.Id,
            product: product.Name,
            quantity: Quantity,
            pricePerUnit: product.Price,
            totalAmount,
            transactionDate: transaction.TransactionDate,
        };
        res.status(201).json(invoice);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.recordSale = recordSale;
