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

  describe('getting a total price', function() {
    it('can calculate the total price for the orders', function() {
      till.takeOrder(1, 'Cafe Latte');
      till.takeOrder(1, 'Tea');
      expect(till.total).toEqual(8.40);
    });
  });

  describe('showing customer names', function() {
    it('can recall the names of the customers', function() {
      till.takeName('Kirsten');
      expect(till.customerNames).toEqual(['Kirsten']);
    });
  });
});
