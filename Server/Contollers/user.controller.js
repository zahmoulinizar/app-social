const User = require("../Models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

exports.signup = (req, res) => {
  const data = {
    firstName: req.body?.firstName,
    lastName: req.body?.lastName,
    email: req.body?.email,
    password: bcrypt.hashSync(req.body?.password, 10),
    role: req.body?.role,
    bio: req.body?.bio,
    picture: req.body?.picture,
  };
  const _user = new User(data);

  _user
    .save()
    .then((createduser) => {
      res.status(200).json(_user);
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: "Probleme while adding this user......" });
    });
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ message: "email Invalid " });
  }
  bcrypt.compare(password , user.password).then(
    (isMatch) => {
      if(isMatch == false){
        return res.status(400).json({ message: "password Invalid " }); 
    }else {
      // generate token
      const token = jwt.sign(
        {data : { id :user._id , role:user.role}} ,
        process.env.JWT_SECRET,{ expiresIn:"7d"} 
        )
        return res.status(200).json({ message: "success"  ,
        token:token,
        user: user 
      });

    }
  }
  )
};
