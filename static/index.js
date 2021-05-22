Handlebars.registerHelper("cleanTitle", function(title){
  return title.slice(0, title.indexOf(("(arXiv:")))
})

/* Exapand/Collapse with TAB key */
var expanded = false;
document.onkeydown=function(e){
  if(e.keyCode == 9) {
    expanded = !expanded;
    document.querySelectorAll("details").forEach(detail => detail.open = expanded);
    return false;
  }
}