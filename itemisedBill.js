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
	console.log(itemlist);

		return itemlist;
}
 

this.provdList = function(itemlist, provider){
	var listprovider = [];

	for(var i=0; i < itemlist.length; i++){
		var current_list = itemlist[i];

		if(current_list.provider === provider){
			listprovider.push(current_list);
		}
	}
	console.log(listprovider + ".........List")
	return listprovider;
 }

// this.totalCalls = function(listprovider, provider){
// 		var tcalls = {};
// 		var provider = provider;
// 		for(var i =0; i < listprovider.length; i++){
// 			var current_calls = listprovider[i].provider;
// 			if(tcalls.provider < current_calls){
// 				tcalls.provider += listprovider[i].provider;
// 				tcalls.total += listprovider[i].total;
// 			}
// 		}
// 		console.log(tcalls);
// 		return tcalls;
// 	};
};