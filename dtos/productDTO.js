class CreateProductDTO {
    constructor({ title, description, price, category, quantity, image }) {
      this.title = title;
      this.description = description;
      this.price = price;
      this.category = category;
      this.quantity = quantity;
      this.image = image;
    }
  }
  
  class UpdateProductDTO {
    constructor({ title, description, price, category, quantity, image }) {
      this.title = title;
      this.description = description;
      this.price = price;
      this.category = category;
      this.quantity = quantity;
      this.image = image;
    }
  }
  
  module.exports = {
    CreateProductDTO,
    UpdateProductDTO,
  };
  