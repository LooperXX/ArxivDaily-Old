document.getElementById("build-timestamp").innerText = "Last Update: " + new Date(document.getElementById("build-timestamp").getAttribute("datetime")).toLocaleString();

$('.article-expander__title').replaceWith(function(event) {
  $(this)[0].textContent = $(this)[0].textContent.slice(0, $(this)[0].textContent.indexOf(("(arXiv:")));
  return $(this)
});

/* Exapand/Collapse with TAB key */
var expanded = false;
document.onkeydown=function(e){
  if(e.keyCode == 9) {
    expanded = !expanded;
    document.querySelectorAll("details").forEach(detail => detail.open = expanded);
    return false;
  }
}

$('.article-expander__title').replaceWith(function(event) {
  $(this)[0].textContent = $(this)[0].textContent.slice(0, $(this)[0].textContent.indexOf(("(arXiv:")));
  return $(this)
});