describe('Till', function() {
  var till;

  beforeEach(function() {
    till = new Till();
  });

  describe('taking orders', function() {
    it('can take an order and recall the item and price', function() {
      till.takeOrder('Cafe Latte');
      expect(till.orders).toEqual([['Cafe Latte', 4.75]]);
    });
  });
});
