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

var authors = ["Kaiming He", "Graham Neubig", "Tie-Yan Liu", "Xipeng Qiu", "Yue Zhang", "Christopher Manning", "Noah A. Smith"];
var titles = ["BERT", "GPT","Transformer", "Task-oriented"];

function highlight(seletor, name, type){
  name =  eval('/'+name+'/ig')
  $(seletor).highlightRegex(name, {
    className: type
  });
}


for (var i=0;i<authors.length;i++)
{ 
  highlight('.article-authors', authors[i], "highlight_author");
}


for (var i=0;i<titles.length;i++)
{ 
  highlight('.article-expander__title',titles[i], "highlight_title");
}
