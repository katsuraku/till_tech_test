function Till() {
  this.cafeData = cafeData;
  this.orders = [];
}

Till.prototype.takeOrder = function(item) {
  this.orders.push([item, this.cafeData[0].prices[0][item]]);
};
