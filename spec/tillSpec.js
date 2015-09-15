describe('Till', function() {
  var till;

  beforeEach(function() {
    till = new Till();
  });

  describe('taking orders', function() {
    it('can take an order and keep track of the item and price', function() {
      till.takeOrder(1, 'Cafe Latte');
      expect(till.orders).toEqual([['Cafe Latte', 1, 'x ', 4.75]]);
    });

    it('can take multiple orders and keep track of them', function() {
      till.takeOrder(2, 'Cafe Latte');
      expect(till.orders).toEqual([['Cafe Latte', 2, "x ", 4.75]]);
    });
  });

  describe('showing customer names', function() {
    it('can recall a customer name', function() {
      till.takeName('Kirsten');
      expect(till.customerNames).toEqual(['Kirsten']);
    });

    it('can recall multiple customer names', function() {
      till.takeName('Kirsten');
      till.takeName('Gerard');
      expect(till.customerNames).toEqual(['Kirsten', 'Gerard']);
    });
  });

  describe('calculating tax', function() {
    it('can calculate the tax on the total', function() {
      till.takeOrder(1, 'Cafe Latte');
      till.takeOrder(1, 'Tea');
      till.calculateTax();
      expect(till.taxAmount).toEqual(0.73);
    });
  });

  describe('getting a total price before tax', function() {
    it('can calculate the total price for the orders before adding tax', function() {
      till.takeOrder(1, 'Cafe Latte');
      till.takeOrder(1, 'Tea');
      expect(till.preTaxTotal).toEqual(8.40);
    });
  });

  describe('getting a total price after tax', function() {
    it('can calculate the total price after tax', function() {
      till.takeOrder(1, 'Cafe Latte');
      till.takeOrder(1, 'Tea');
      till.calculateTax();
      till.calculateAfterTaxTotal();
      expect(till.afterTaxTotal).toEqual(9.13)
    });
  });
  // describe('producing receipt', function() {
  //   it('produces a receipt in the right format', function() {
  //     till.takeName('Kirsten');
  //     till.takeOrder(1, 'Cafe Latte');
  //     till.takeOrder(1, 'Tirmasu');
  //     till.takeName('Gerard');
  //     till.takeOrder(1, 'Cortado');
  //     expect(till.produceReceipt().toEqual['{names: [Kirsten', 'Gerard'], orders: [], tax: 0, total: });
  //   });
  // });
});
