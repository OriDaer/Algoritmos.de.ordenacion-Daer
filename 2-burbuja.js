let a=[9,2,1,-5];
 let lugares= a.length;
let i,j=0;
function result(){
  for(let burb=a.length; lugares>=burb-1; burb--){
       let ordenado = false;
    for( i=0 ; i< burb-1; i++){ 
     j=i+1;
        if(a[i] > a[j]){
           console.log("swap");
          swap(i,j);
            ordenado = true;
      }
    }
    if (!ordenado) {
      break;
    }
  
  }
   return a;
}
function swap(i,j){
  let aux = a[i];
  a[i] = a[j];
  a[j] = aux;
}
console.log(result());