const homepage = (req,res)=>{
    res.status(200).send({
        message:"Welcome to mongoose crud makkale"
    })
}


export default {
    homepage
}