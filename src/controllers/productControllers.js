exports.getProducts = async (req, res)=>{
    res.send(`get all produts`)
}

exports.getProductsByid = async (req, res)=>{
        res.send(`Product ID : ${req.params.id}`);
}

exports.getProductsByName = async (req, res)=>{
    res.send(`Product Name : ${req.params.name}`);
}

exports.getProductsByPrice = async (req, res)=>{
    res.send(`Product pirce : ${req.params.pirce}`);
}

exports.portProduct = async (req, res)=>{
    res.send(`add product id : ${req.body.id}, name: ${req.body.name}`);
}

exports.putProduct = async (req, res)=>{
    res.send(`put product id : ${req.params.id}`);
}

exports.patchProduct = async (req, res)=>{
    res.send(`patch product id : ${req.params.id}`);
}

exports.deleteProduct = async (req, res)=>{
    res.send(`delete product id : ${req.params.id}`);
}