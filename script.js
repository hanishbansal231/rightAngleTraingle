let pattern = " ";
for(let i = 0;i < 6;i++){
   for(let j = 0;j < 6-i;j++){
      pattern += "*";
   }
  
   pattern += "\n";
}
console.log(pattern);