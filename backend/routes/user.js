const express = require('express');
const router = express.Router();
const User = require('../models/User');



//to insert data -> check done!

router.route("/register").post((req, res) => {
    const { firstname, lastname, gender, email, password } = req.body;

    const newUser = new User({
        firstname,
        lastname,
        gender,
        email,
        password
    });

    newUser.save()
        .then(() => {
            res.json("Registration successful");
        })
        .catch((err) => {
            console.error(err); // Log the actual error
            res.status(500).json("Registration failed");
        });
});



//to retrive  -> check done

router.route("/").get((req,res)=>{
    User.find().then(()=>{
        res.json(User);
       
    }).catch((err)=>{
        console.log(err);

    })
})


//to update  -> check done

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {firstname , lastname , gender , email , password }  = req.body;

    const updateUser = {
        firstname,
        lastname,
        gender,
        email,
        password

    }

    const update = await User.findByIdAndUpdate(userId,updateUser).then(()=>{
            res.status(200).send({status:"user updated!!"});

    }).catch((err)=>{
        res.status(500).send({status:"error with updating!"});
    })

})



//to delete

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await User.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User deleted successful!"});

    }).catch((err)=>{
        res.status(500).send({status:"error with deleting!"});
    })
})


//to take relevent id


router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;

    await User.findById(userId).then(()=>{
        res.status(200).send({status:"user fetched",User});
    }).catch((err)=>{
        res.status(500).send({status:"error with fetching"});

    })
})


// for -> login

// Assuming you have a User model with a password field

router.route("/login").post(async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find user by email
      const user = await User.findOne({ email });
  
      // Check if user exists
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      // Check if the password matches (plaintext comparison for demonstration)
      if (user.password === password) {
        return res.json({ message: "Login successful" });
      } else {
        return res.status(400).json({ message: "Invalid email or password" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });
  





 

module.exports = router;