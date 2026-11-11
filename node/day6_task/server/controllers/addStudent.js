const addStudent = async(req,res)=>{
    try {
        // const {name,subject} = req.body
        res.status(200).json({msg:'student data saved successfully..'})
        // console.log(name, subject);
        

    } catch (error) {
        // res.status(404).json({msg:error.message})
    }
}
export default addStudent
