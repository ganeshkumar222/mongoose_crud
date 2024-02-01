import express from 'express'
import USERCONTROLLER from "../controller/user.js"

let router  = express.Router()

router.get("/getallstudents",USERCONTROLLER.getUsers)
router.post("/createstudent",USERCONTROLLER.createStudent)
router.get("/getallstudents/:id",USERCONTROLLER.getStudent_by_id)
router.delete("/deletestudent/:id",USERCONTROLLER.deletestudent)
router.put("/editstudent/:id",USERCONTROLLER.editUsers)

export default router