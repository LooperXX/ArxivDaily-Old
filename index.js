document.getElementById("build-timestamp").innerText = "Last Update: " + new Date(document.getElementById("build-timestamp").getAttribute("datetime")).toLocaleString();

// Handlebars.registerHelper("cleanTitle", function(title){
//   return title.slice(0, title.indexOf(("(arXiv:")))
// })

function cleanTitle(event){
  // title =  title.slice(0, title.indexOf(("(arXiv:")));
  var a = event.target;
  console.log(event);
  console.log(a);
}

/* Exapand/Collapse with TAB key */
var expanded = false;
document.onkeydown=function(e){
  if(e.keyCode == 9) {
    expanded = !expanded;
    document.querySelectorAll("details").forEach(detail => detail.open = expanded);
    return false;
  }
}
