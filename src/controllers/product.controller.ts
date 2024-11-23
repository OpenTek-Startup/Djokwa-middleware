import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 1. Create a New Product
export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    Name,
    Description,
    Category,
    Price,
    Quantity,
    LowStockAlert,
    Warehouse_ID,
  } = req.body;
  try {
    // Check if the warehouse exists
    const warehouseExists = await prisma.warehouse.findUnique({
      where: { Warehouse_ID },
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
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 2. Retrieve All Products with Warehouse Information
export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await prisma.product.findMany({
      include: { Warehouse: true },
    });
    res.status(200).json(products);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 3. Get a Single Product by ID with Warehouse Information
export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({
      where: { Product_ID: Number(id) },
      include: { Warehouse: true },
    });
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.status(200).json(product);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 4. Update a Product
export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const {
    Name,
    Description,
    Category,
    Price,
    Quantity,
    LowStockAlert,
    Warehouse_ID,
  } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { Product_ID: Number(id) },
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
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// 5. Delete a Product
export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    await prisma.product.delete({
      where: { Product_ID: Number(id) },
    });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 6. Check Inventory Levels and Low Stock Alerts
export const checkInventoryLevels = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await prisma.product.findMany({
      include: { Warehouse: true },
    });

    // Check for products with quantities below the alert threshold
    const lowStockProducts = products.filter(
      (product) => product.Quantity <= product.LowStockAlert
    );

    res.status(200).json({
      totalProducts: products.length,
      lowStockProducts,
      message:
        lowStockProducts.length > 0
          ? 'Some products are running low on stock!'
          : 'All products are sufficiently stocked.',
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 7. Record a Sale and Update Inventory
export const recordSale = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { Product_ID, Quantity } = req.body;
  try {
    // Find the product and validate stock availability
    const product = await prisma.product.findUnique({
      where: { Product_ID },
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
      where: { Product_ID },
      data: { Quantity: product.Quantity - Quantity },
    });

    // Generate and send the invoice response
    const invoice = {
      transactionID: transaction.Transaction_ID,
      product: product.Name,
      quantity: Quantity,
      pricePerUnit: product.Price,
      totalAmount,
      transactionDate: transaction.TransactionDate,
    };

    res.status(201).json(invoice);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
