const userModel=require("../Model/user.model")
const bcryptjs = require("bcryptjs");


const signUp=async(req,res)=>{
    try {
        const{fullname,email,password}=req.body
        const user= await userModel.findOne({email})
        if(user)
        {
           return res.status(400).json({message:"user already exists"})

        }
        const hashPassword=await bcryptjs.hash(password,10)

        const createUser=new userModel({
             fullname:fullname,
             email:email,
             password:hashPassword,
        })
        await createUser.save()
        res.status(200).json({message:"user created sucessfully",
            user:{
                _id:createUser._id,
                fullname:createUser.fullname,
                email:createUser.email,
            }
        })
    } catch (error) {
         console.log("error",error.message)
         res.status(400).json({message:"internal server error"})
    }
}


const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        
     
        if (!user || !(await bcryptjs.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid username or password" });
        }


        res.status(200).json({
            message: "Successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
    } catch (error) {
        console.log("error", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports={signUp,Login}