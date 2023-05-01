function getMotto() {
    return prompt("Please enter your favorite motto.");
   
    
}
function getCount() {
    return parseFloat(prompt("How many times should the motto be displayed?"));
}
function printMotto(motto, count) {
        // startCount = 0;
        // while(startCount < count) {
        // console.log((startCount + 1) + ". " + motto);
        // startCount+=1;   }

        for (var i=1; i<=count; i++){
         document.write(motto,count);
           console.log(motto, count);
              }
            
        
}

let motto = getMotto();
let count = getCount();

printMotto(motto, count);

