document.getElementById("build-timestamp").innerText = "Last Update: " + new Date(document.getElementById("build-timestamp").getAttribute("datetime")).toLocaleString();

$('.article-expander__title').replaceWith(function(event) {
  var t = event.target;
  console.log(event);
  t.textContent = t.textContent.slice(0, t.textContent.indexOf(("(arXiv:")));
  return t
});

// function cleanTitle(event){
//   var t = event.target;
//   t.textContent = t.textContent.slice(0, t.textContent.indexOf(("(arXiv:")));
// }

/* Exapand/Collapse with TAB key */
var expanded = false;
document.onkeydown=function(e){
  if(e.keyCode == 9) {
    expanded = !expanded;
    document.querySelectorAll("details").forEach(detail => detail.open = expanded);
    return false;
  }
}
