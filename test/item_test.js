var assert = require("assert");
var Items = require("../itemisedBill");


describe('test the itemBills ', function(){

	it("should return the item map", function(){
		var items = new Items();
		var provider = items.item("./ItemisedBill.csv");


		var itemised = items.groupProvider(provider);
		assert.equal(items.length);
		console.log(provider)


	});

		it("should return the totallCalls specified provider", function(){
		var items = new Items();
		var provider = items.item("./ItemisedBill.csv");

		var expectedProvider = {'MTN' : '1h05m00s', 'Vodacom' : '00h08m34s', 'CellC': '00h47m7s'};
		var groupProvids = items.groupProvider(provider);
		var Results = items.groupProvider(groupProvids);
		assert.equal(expectedProvider);		
	})
});