function Till() {
  this.menu = cafeData;
  // this.orders = [];
  // this.preTaxTotal = 0;
  // this.customerNames = [];
  this.taxRate = 8.64/100;
  // this.taxAmount = 0;
  // this.afterTaxTotal = 0;
  this.receipt = {'names': [], 'orders': [], 'tax': 0, 'subtotal': 0, 'total': 0}
}

Till.prototype.takeOrder = function(multiple, item) {
  // this.orders.push([item, multiple, "x ", this.menu[0].prices[0][item]]);
  // this.preTaxTotal += multiple * (this.menu[0].prices[0][item]);
  this.receipt.orders.push([item, multiple, "x ", this.menu[0].prices[0][item]]);
  this.receipt.subtotal += multiple * (this.menu[0].prices[0][item]);
};

Till.prototype.takeName = function(name) {
  // this.customerNames.push(name);
  this.receipt.names.push(name);
};

Till.prototype.calculateTax = function() {
  // this.taxAmount += +(this.preTaxTotal * this.taxRate).toFixed(2);
  this.receipt.tax = +(this.receipt.subtotal * this.taxRate).toFixed(2);
};

Till.prototype.calculateAfterTaxTotal = function() {
  // this.afterTaxTotal += +(this.preTaxTotal + this.taxAmount);
  this.receipt.total = +(this.receipt.subtotal + this.receipt.tax);
};

Till.prototype.printReceipt = function() {
  return {'Names': this.receipt.names, 'Orders': this.receipt.orders, 'Tax': this.receipt.tax, 'Total': this.receipt.total};
};
