 
outer: for (const a of [1,2,34]) {
  console.log(a);

  for( let i =0; i < 2; i++){
    if(i ==1) {
      break outer;
    }
  }
}
