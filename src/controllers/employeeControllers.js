exports.getemployee = async (req, res)=>{
    res.send(`get all employee`)
}

exports.getemployeeByid = async (req, res)=>{
    res.send(`employeeID : ${req.params.id}`);
}

exports.getemployeeBysal = async (req, res)=>{
    const sal = req.params.sal
    const tax = sal*10/100
    res.send(`sal : ${tax}`);
}

exports.getemployeeByage = async (req, res)=>{
    const age = req.params.age
    const age01 = 60 - age
    res.send(`age : ${age01}`);
}

exports.portemployee = async (req, res)=>{
    res.send(`add product id : ${req.body.id}, name: ${req.body.name}, age: ${req.body.age}, sal: ${req.body.sal}`);
}

