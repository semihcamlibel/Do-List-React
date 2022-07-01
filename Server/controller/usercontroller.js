import user from "../models/usersmodel.js";

export const getUser = async (req, res) => {
    const userLogin = new user({
        username: req.body.username,
        password: req.body.password
    })
    try {
        const users = await user.findOne({username: userLogin.username});
        if (userLogin.password === users.password) {
            res.status(200).json(users.username);
        }else if(!userLogin.password === users.password) {
            res.status(404).json('Hatalı kullanıcı adı veya şifre');
        }else {
            res.status(404).json('Hatalı kullanıcı adı veya şifre');
        }
        console.log(users.username);
        
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};


export const newUser = async (req, res) => {
    try {
        const newUser = new user({
            username: req.body.username,
            password: req.body.password,
        })
        const userr = await newUser.save();
        res.status(200).json(userr);
    } catch (err) {
        console.log(err);
    }
}
