const validateProduct = (req, res, next) => {
    const { name, price, stock } = req.body;

    if (!name || name.trim() === '') {
        return res.status(400).json({ message: 'O nome do produto não pode ficar em branco.' });
    }

    if (price !== undefined && price < 0) {
        return res.status(400).json({ message: 'O preço não pode ser menor que zero.' });
    }

    if (stock !== undefined && stock < 0) {
        return res.status(400).json({ message: 'O estoque não pode ser menor que zero.' });
    }

    next();
};

module.exports = validateProduct;