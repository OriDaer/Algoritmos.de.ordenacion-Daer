let a=[9,2,1,-5];
function result(){
  for( let  i=0; i< a.length; i++){
    for(let j=i+1; j < a.length; j++){
        if(a[j] < a[i]){
          swap(i,j);
      }
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