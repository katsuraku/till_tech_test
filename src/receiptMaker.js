var ReceiptMaker = function(orders, customerNames, subTotal) {
  this.orders = orders;
  this.customerNames = customerNames;
  this.subTotal = subTotal;
  this.taxRate = 8.64/100;
  this.taxAmount = 0;
  this.total = 0;
};

ReceiptMaker.prototype.calculateTax = function() {
  this.taxAmount += +(this.subTotal * this.taxRate).toFixed(2);
};

ReceiptMaker.prototype.calculateAfterTaxTotal = function() {
  this.total += +(this.subTotal + this.taxAmount).toFixed(2);
};

ReceiptMaker.prototype.produceReceipt = function() {
  return {'Names': this.customerNames, 'Orders': this.orders, 'Tax': (this.taxAmount)/1, 'Total': (this.total)/1};
};
