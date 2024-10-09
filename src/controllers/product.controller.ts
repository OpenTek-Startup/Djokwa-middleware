import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  const { Name, Description, Price } = req.body;
  try {
    const newProduct = await prisma.product.create({
      data: { Name, Description, Price },
    });
    res.status(201).json(newProduct);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { Name, Description, Price } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { Product_ID: Number(id) },
      data: { Name, Description, Price },
    });
    res.status(200).json(updatedProduct);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await prisma.product.delete({ where: { Product_ID: Number(id) } });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};
