import UserModel from "../model/user.js"
import dotenv from 'dotenv'
dotenv.config()
const getUsers = async (req,res) =>{
    try {
        let data = await UserModel.find()
        res.status(200).send({
            message:"data",
            data
        })
    } catch (error) {
       res.status(500).send({
        message:"Internal server error"
       }) 
    }
}
const createStudent = async (req,res)=>{
    try {
    //     console.log(req.body)
    //    let value =  await UserModel.create(req.body)
    //             res.status(200).send({
    //                 message:"student added successfully"
    //             })
        let value = await UserModel.findOne({email:req.body.email})
        console.log(value)
        if(!value){
                await UserModel.create(req.body)
                res.status(200).send({
                    message:"student added successfully"
                })
        }
        else{
            res.status(400).send({
                message:"student already exists"
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message:"internal server error",
            error
        })
    }
}
const getStudent_by_id = async (req,res) =>{
    try {
        // console.log(req.params.id)
        let value = await UserModel.findOne({_id:req.params.id})
        if(value){
            res.status(200).send({
                message:"user data fetched successfully",
                value
            })
        }
        else{
            res.status(400).send({
                message:"the user does not exists"
            })
        }
    } catch (error) {
        
    }
}
const deletestudent = async (req,res)=>{
    try {
        let value = await UserModel.findOne({_id:req.params.id})
        if(value){
            await UserModel.deleteOne({_id:req.params.id})
            res.status(200).send({
                message:"student record deleted successfully"
            })
        }
        else{
            res.status(400).send({
                message:"student does not exist"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"internal server error"
        })
    }
}
const editUsers = async (req,res)=>{
    try {
        let value = await UserModel.findOne({_id:req.params.id})
        if(value){
            value.name=req.body.name
            value.email=req.body.email
            value.password=req.body.password

            await value.save()

            res.status(200).send({
                message:"user edited successfully"
            })
            
        }
        else{
            res.status(400).send({
                message:"student does not exits"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"internal server error",
            error
        })
    }
}

export default {
    getUsers,
    createStudent,
    getStudent_by_id,
    deletestudent,
    editUsers
}