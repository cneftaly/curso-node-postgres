const faker = require('faker');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');
class ProductsService {
  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find() {
    const products = await models.Product.findAll();
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    return product;
  }

  async update(id, changes) {
    const Customer = await  this.findOne(id);
    const response = Customer.update(changes);
    return response;
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
