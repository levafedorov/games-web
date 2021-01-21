
 export const formForGallery  = (string) => {
   if(typeof string !== "string") return null;
   return string.trim().replace(/\s+/g, '-');
}

console.log(formForGallery("this is it"));