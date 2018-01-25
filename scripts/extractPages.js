const xlsxj = require("xlsx-to-json");
const sort = require("./pageNumSort.js");
const filter = require("./filterPageNums.js");
const addPage = require("./pageNumAdd.js");

//Convert xlsx to json
xlsxj({
  input: "../excel/GilbertBECutSheet.xlsx",
  output: "../logFiles/cutSheetOutput.json"
}, function(err, result) {
  if(err) {
    console.error(err);
  }
  else {
    console.log("\nConversion Complete\n\nNow Compiling Pages");
    addPage(result, sort, filter);
  };
});
