const fs = require("fs");
const pageNumAdd = function (result, sort, filter) {
  //create var for page numbers
  let pageNumber = 1;
  //create res for result
  let res = result;
  //for loop to parse array of excel objects and add page numbers but only up until the id = downlink row
  for(i=0;i<res.length;i++){
    if(res[i].id != "Downlink") {
      //condition to not add a page number to id rows that dont have an id in them
      if(res[i].id != "" && res[i].id != "Discrepancies:"){
        res[i].page = pageNumber;
        pageNumber++;
      };
    }
    else {
      break;
    };
  };
  //Create text document with objects containing page numbers
  fs.writeFile("../logFiles/jsonwithpages.json", JSON.stringify(res, undefined, 2), function(err){
    if(err) throw err
    else{
      console.log("\njsonwithpages has been made");
    };
  });
  sort(res, filter);
};

module.exports = pageNumAdd;
