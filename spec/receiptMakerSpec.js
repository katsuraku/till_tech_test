describe('ReceiptMaker', function() {
  var receiptMaker;

  beforeEach(function() {
    receiptMaker = new ReceiptMaker();
  });

  describe('calculating tax', function() {
    it('can calculate the tax on the total', function() {
      receiptMaker.subTotal = 16.15;
      receiptMaker.calculateTax();
      expect(receiptMaker.taxAmount).toEqual(1.40);
    });
  });

  // describe('getting a total price before tax', function() {
  //   it('can calculate the total price for the orders before adding tax', function() {
  //     this.orders = [['Cafe Latte', 1, 'x ', 4.75], ['Tiramisu', 1, 'x ', 11.40]];
  //     this.subTotal = 16.15;
  //     expect(receiptMaker.preTaxTotal).toEqual(8.40);
  //   });
  // });
  //
  describe('getting a total price after tax', function() {
    it('can calculate the total price after tax', function() {
      receiptMaker.subTotal = 16.15;
      receiptMaker.calculateTax();
      receiptMaker.calculateAfterTaxTotal();
      expect(receiptMaker.total).toEqual(17.55);
    });
  });

  describe('producing receipt', function() {
    it('produces a receipt in the right format', function() {
      receiptMaker.customerNames = ['Kirsten', 'Gerard'];
      receiptMaker.orders = [['Cafe Latte', 1, 'x ', 4.75], ['Tiramisu', 1, 'x ', 11.40], [ 'Cortado', 1, 'x ', 4.55 ]];
      receiptMaker.subTotal = 20.70;
      receiptMaker.calculateTax();
      receiptMaker.calculateAfterTaxTotal();
      expect(receiptMaker.produceReceipt()).toEqual(
        {'Names': ['Kirsten', 'Gerard'],
        'Orders': [[ 'Cafe Latte', 1, 'x ', 4.75 ], [ 'Tiramisu', 1, 'x ', 11.40 ], [ 'Cortado', 1, 'x ', 4.55 ]], 'Tax': 1.79, 'Total': 22.49 });
    });
  });
});
