const fs = require("fs");
const filterPageNums = function (result) {
  let pages1=[]; //create var for pages array
  let pages2=[]; //create var for pages array
  let pages3=[]; //create var for pages array
  let pages4=[]; //create var for pages array
  let pages5=[]; //create var for pages array
  let pages6=[]; //create var for pages array
  let pages7=[]; //create var for pages array
  //for loop to write page numbers we want to print to a string called pages
  for(i=0;i<result.length;i++){
    //skip object if it does not have page number
    if (result[i].pages != "") {
      //skip pages that have matching channels
      if(result[i].cha !== result[i].chb) {
        let tempName = "";
        //make tempname equal to the first 4 characters of the "cha" name
        for(j=0;j<4;j++){
          tempName += result[i].cha.charAt(j);
        };
        //skip pages that have a slng prefix by checking tempname
        if(tempName !== "SLNG"){
          //add page numbers to pages arrays with each one not to exceed 98 characters due to adobe
          //print pages dialog box character limitation
          if (pages1.toString().length<98) {
            pages1.push(result[i].page);
          }
          else if (pages2.toString().length<98) {
            pages2.push(result[i].page);
          }
          else if (pages3.toString().length<98) {
            pages3.push(result[i].page);
          }
          else if (pages4.toString().length<98) {
            pages4.push(result[i].page);
          }
        };
      };
    };
  };
  //Create text document with desired page numbers
  let allPages = String(pages1+"\n"+pages2+"\n"+pages3+"\n"+pages4+"\n"+pages5+"\n"+pages6+"\n"+pages7);
  fs.writeFile("../pages.txt", allPages, function(err){
      if (err) throw err
      else{
        console.log("\npages.txt made");
      };
  });
};

module.exports = filterPageNums;
