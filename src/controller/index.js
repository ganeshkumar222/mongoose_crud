const homepage = (req,res)=>{
    res.status(200).send({
        message:"Welcome to mongoose"
    })
}


export default {
    homepage
}