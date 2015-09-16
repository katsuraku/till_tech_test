var OrderTaker = function() {
  this.menu = cafeData;
  this.orders = [];
  // this.preTaxTotal = 0;
  this.customerNames = [];
  // this.taxRate = 8.64/100;
  // this.taxAmount = 0;
  // this.afterTaxTotal = 0;
  this.subTotal = 0;
  this.receiptMaker = new ReceiptMaker(this.orders, this.customerNames, this.subTotal);
}

OrderTaker.prototype.takeOrder = function(multiple, item) {
  this.orders.push([item, multiple, "x ", this.menu[0].prices[0][item]]);
  // this.preTaxTotal += multiple * (this.menu[0].prices[0][item]);
  this.subTotal += multiple * (this.menu[0].prices[0][item]);
};

OrderTaker.prototype.takeName = function(name) {
  this.customerNames.push(name);
};

// OrderTaker.prototype.calculateTax = function() {
//   this.taxAmount += +(this.preTaxTotal * this.taxRate).toFixed(2);
// };
//
// OrderTaker.prototype.calculateAfterTaxTotal = function() {
//   this.afterTaxTotal += +(this.preTaxTotal + this.taxAmount);
// };
//
// OrderTaker.prototype.produceReceipt = function() {
//   return {'Names': this.customerNames, 'Orders': this.orders, 'Tax': (this.taxAmount)/1, 'Total': (this.afterTaxTotal)/1};
// };
