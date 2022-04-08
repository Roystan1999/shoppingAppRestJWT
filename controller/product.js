const express = require('express')
const product=require("../models/product")



const getAllproducts = async (req, res, next) => {
    try{
        const products= await product.find().lean()
         res.json({
        error:false,
        message:"",
        data:products
        })
    }
    catch(err){
        next(err)
    }
}

//ADD PRODUCT
const addProduct = async (req, res, next) => {
    try{
        let{pName,pDesc,price}=req.body
        await product.insertMany([{
        pName,
        pDesc,
        price
        }])
        res.json({
            error:false,
            message:"product has been added successfully",
            data:null
        })
    }
    catch(err) {{
        next(err)
    }}
}

//edit products

const editProduct=async (req, res, next) => {
    try{
        let{_id,pName,pDesc,price}=req.body
        await product.updateOne(
            {_id},{
            $set:{
            pName,
            pDesc,
            price
                }
        })
        res.json({
            error:false,
            message:"product has been updated successfully",
            data:null
        })
    }
    catch(err){

    }
}

const deleteProduct=async (req, res, next) => {
    try{
        let{_id}=req.body
        await product.deleteOne(
            {_id}
        )
        res.json({
            error:false,
            message:"product has been deleted successfully",
            data:null
        })
    }
    catch(err){

    }
}



module.exports={
    getAllproducts,
    addProduct,
    editProduct,
    deleteProduct,
}