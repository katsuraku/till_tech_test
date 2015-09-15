function Till() {
  this.menu = cafeData;
  this.orders = [];
  this.total = 0;
  this.customerNames = [];
}

Till.prototype.takeOrder = function(multiple, item) {
  this.orders.push([item, multiple, "x ", this.menu[0].prices[0][item]]);
  this.total += multiple * (this.menu[0].prices[0][item]);
};

Till.prototype.takeName = function(name) {
  this.customerNames.push(name);
};
