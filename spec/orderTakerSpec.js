describe('OrderTaker', function() {
  var orderTaker;

  beforeEach(function() {
    orderTaker = new OrderTaker();
  });

  describe('taking orders', function() {
    it('can take an order and keep track of the item and price', function() {
      orderTaker.takeOrder(1, 'Cafe Latte');
      expect(orderTaker.orders).toEqual([['Cafe Latte', 1, 'x ', 4.75]]);
    });

    it('can take multiple orders and keep track of them', function() {
      orderTaker.takeOrder(2, 'Cafe Latte');
      expect(orderTaker.orders).toEqual([['Cafe Latte', 2, "x ", 4.75]]);
    });
  });

  describe('showing customer names', function() {
    it('can recall a customer name', function() {
      orderTaker.takeName('Kirsten');
      expect(orderTaker.customerNames).toEqual(['Kirsten']);
    });

    it('can recall multiple customer names', function() {
      orderTaker.takeName('Kirsten');
      orderTaker.takeName('Gerard');
      expect(orderTaker.customerNames).toEqual(['Kirsten', 'Gerard']);
    });
  });

  // describe('calculating tax', function() {
  //   it('can calculate the tax on the total', function() {
  //     orderTaker.takeOrder(1, 'Cafe Latte');
  //     orderTaker.takeOrder(1, 'Tea');
  //     orderTaker.calculateTax();
  //     expect(orderTaker.taxAmount).toEqual(0.73);
  //   });
  // });
  //
  describe('tracking item prices', function() {
    it('gets a correct subtotal of item prices before tax', function() {
      orderTaker.takeOrder(1, 'Cafe Latte');
      orderTaker.takeOrder(1, 'Tea');
      expect(orderTaker.subTotal).toEqual(8.40);
    });
  });
  //
  // describe('getting a total price after tax', function() {
  //   it('can calculate the total price after tax', function() {
  //     orderTaker.takeOrder(1, 'Cafe Latte');
  //     orderTaker.takeOrder(1, 'Tea');
  //     orderTaker.calculateTax();
  //     orderTaker.calculateAfterTaxTotal();
  //     expect(orderTaker.afterTaxTotal).toEqual(9.13);
  //   });
  // });
  //
  // describe('producing receipt', function() {
  //   it('produces a receipt in the right format', function() {
  //     orderTaker.takeName('Kirsten');
  //     orderTaker.takeOrder(1, 'Cafe Latte');
  //     orderTaker.takeOrder(1, 'Tiramisu');
  //     orderTaker.takeName('Gerard');
  //     orderTaker.takeOrder(1, 'Cortado');
  //     orderTaker.calculateTax();
  //     orderTaker.calculateAfterTaxTotal();
  //     expect(orderTaker.produceReceipt()).toEqual(
  //       {'Names': ['Kirsten', 'Gerard'],
  //       'Orders': [[ 'Cafe Latte', 1, 'x ', 4.75 ], [ 'Tiramisu', 1, 'x ', 11.40 ], [ 'Cortado', 1, 'x ', 4.55 ]], 'Tax': 1.79, 'Total': 22.49 });
  //   });
  // });
});
