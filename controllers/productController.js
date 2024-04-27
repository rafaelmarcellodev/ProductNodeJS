const Product = require('../models/product');
const { Op } = require('sequelize');

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({ message: 'Produto criado', data: product });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto', error });
  }
};

const getProducts = async (req, res) => {
    try {
      const orderBy = req.query.orderBy || 'id';
      const orderDirection = req.query.orderDirection === 'DESC' ? 'DESC' : 'ASC';
  
      const products = await Product.findAll({
        order: [[orderBy, orderDirection]],
      });
  
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter produtos', error });
    }
  };

const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter produto', error });
  }
};

const getProductByName = async (req, res) => {
    try {
      const product = await Product.findOne({
        where: { name: { [Op.like]: `%${req.params.name}%` } },
      });
      if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter produto', error });
    }
  };

const updateProduct = async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, {
      where: { id: req.params.id }
    });

    if (!updated) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.status(200).json({ message: 'Produto atualizado' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar produto', error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: { id: req.params.id }
    });

    if (!deleted) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.status(200).json({ message: 'Produto excluído' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir produto', error });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  getProductByName,
  updateProduct,
  deleteProduct
};
