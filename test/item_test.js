var assert = require("assert");
var Items = require("../itemisedBill");


describe('test the itemBills ', function(){

	it("should return the item map", function(){
		var items = new Items();
		var provider = items.item("./ItemisedBill.csv");

		assert.equal(items.length);
   });

	it("should return the provdList specified provider MTN", function(){

		var items = new Items();
		var provider = items.item("./ItemisedBill.csv");

		var lists = items.provdList(provider, "MTN");
		// var results = {"MTN"};
		assert.equal(lists.length, 48);
		console.log(lists);

	});

	it("should return the specified provider", function(){

		var items = new Items();
		var provider = items.item("./ItemisedBill.csv");

		var lists = items.provdList(provider, "MTN");
		var totals = items.totalCalls(lists);
		var results = {"MTN":16, "Vodacom":7, "CellC":11};
		
	
		assert.equal(totals.length, 16);
		console.log(totals + "..........totals");
		// assert.deepEqual(results, totals);
		// assert.equal(results,  {"MTN":16});
		// assert.equal(results, {"Vodacom":7});
		//console.log(results);
	});
});