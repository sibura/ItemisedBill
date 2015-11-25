var fs = require("fs");
module.exports=function(){

 this.item = function(filePath){
	var linesInfile = fs.readFileSync(filePath, 'utf8');
	var rows = linesInfile.split('\r');

	var itemlist  = [];
	var lineNumber = 0;

	rows.forEach(function(row){
		var providers = row.split(',');

			if(lineNumber != 0){

				var columns = row.split(',');
				var itemObj = {
					Date :columns[0],
					provider: columns[1],
					Number: columns[2],
					Duration :columns[3],

				};

				itemlist.push(itemObj);
			}
			lineNumber = lineNumber +1;
		});	
	 return itemlist;
 }
 

 this.groupItems = function(itemlist){
		var itemMap = {};
		itemlist.forEach(function(providers){
			var Provider = providers.itemName;
			var Duration = providers.Duration;

		if(itemMap[providers]=== undefined){
			itemMap[providers]=0;
		}

			itemMap[providers] =itemMap[providers] + Number(Duration); 

		});

		return itemMap;

	}; 

	this.totallCalls = function(itemMap) {

		var proverderMap = {};

		itemMap.forEach(function(providers){
			var currentItem = providers.Provider;
			var Duration = providers.Duration;
			//var provi = proverderMap[currentItem]

			if(proverderMap[providers]=== undefined){
				proverderMap[providers]=0;
			}

			proverderMap[providers]=proverderMap[providers] + Number(Duration);

		});

		return proverderMap;

	};

}