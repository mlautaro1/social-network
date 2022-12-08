const MySchema = require('../models/mymodels.js')

module.exports = {
    getIndex: async (req,res)=>{
        try{
            const Items = await MySchema.find()
            const itemsLeft = await MySchema.countDocuments({completed: false})
            res.render('index.ejs', {})
        }catch(err){
            console.log(err)
        }
    }
}