function guid() {
 return "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/x/g,function(){
  return Math.floor(Math.random()*16).toString(16).toUpperCase();
 });
}
