import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new product
export const createProduct = async (req: Request, res: Response): Promise<void> => {
  const { Name, Category, Quantity, Price, Warehouse_ID } = req.body;
  try {
    const newProduct = await prisma.product.create({
      data: {
        Name,
        Category,
        Quantity,
        Price,
        Warehouse_ID,
      },
    });
    res.status(201).json(newProduct);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

// Get all products
export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await prisma.product.findMany({
      include: {
        Warehouse: true, // Include related Warehouse information
      },
    });
    res.status(200).json(products);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

// Update a product
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { Name, Category, Quantity, Price, Warehouse_ID } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { Product_ID: Number(id) },
      data: {
        Name,
        Category,
        Quantity,
        Price,
        Warehouse_ID,
      },
    });
    res.status(200).json(updatedProduct);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a product
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await prisma.product.delete({
      where: { Product_ID: Number(id) },
    });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};
