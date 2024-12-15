import {  Request, Response } from 'express';

export const createNewParent=async(req:Request,res:Response)=>{
    return res.send("new parent controller")
}
export const updateParent=async(req:Request,res:Response)=>{
    return res.send("update parent route ")
}
export const deleteParent=async(req:Request,res:Response)=>{
    return res.send("delete parent route ")
}
export const getParent=async(req:Request,res:Response)=>{
    return res.send("getParent parent route ")
}
export const getParents=async(req:Request,res:Response)=>{
    return res.send("get parents route ")
}