
 export const formForGallery  = (string) => {
   if(typeof string !== "string") return null;
   return string.trim().replace(/\s+/g, '-');
}



 export const devideArray = (arr, amount) => {
    if(!Array.isArray(arr) || 
    typeof amount !== "number"){
      console.log("Wrong type");
      return;
    } 
    let arrCopy = [...arr];
    let newArr = [];
  while(arrCopy.length){
    newArr.push(arrCopy.splice(0, amount));
  }
  return newArr;
}

