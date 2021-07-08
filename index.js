/*
 * @Author: LooperXX
 * @Email: xxu@ir.hit.edu.cn
 * @Date: 2021-05-22 14:40:50
 * @LastEditTime: 2021-07-08 15:59:46
 * @LastEditors: LooperXX
 * @Description: 
 */

document.getElementById("build-timestamp").innerText = "Last Update: " + new Date(document.getElementById("build-timestamp").getAttribute("datetime")).toLocaleString();

// Clean the title for each paper
$('.article-expander__title').replaceWith(function(event) {
  if ($(this)[0].textContent.indexOf("] UPDATED)") != -1){
    // add highlight_author state and update title_state
    $(this)[0].textContent = "☆ ♻ - " + $(this)[0].textContent.slice(0, $(this)[0].textContent.indexOf(("(arXiv:")));
  }
  else{
    // add highlight_author state
    $(this)[0].textContent = "☆ - " + $(this)[0].textContent.slice(0, $(this)[0].textContent.indexOf(("(arXiv:")));
  }
  
  return $(this)
});

// Exapand/Collapse with TAB key - From https://github.com/onnyyonn/feed 
var expanded = false;
document.onkeydown=function(e){
  if(e.keyCode == 9) {
    expanded = !expanded;
    document.querySelectorAll("details").forEach(detail => detail.open = expanded);
    return false;
  }
}

// Customize Highlight Keywords
var authors = ["Kaiming He", "Graham Neubig", "Tie-Yan Liu", "Xipeng Qiu", "Yue Zhang", "Zhiyuan Liu", "Christopher D. Manning", "Christopher D Manning", "Christopher Manning", "Noah A. Smith", "Jason Eisner", "Percy Liang", "Bill Yuchen Lin", "Li Dong", "Pengfei Liu", "Peter Anderson", "Samuel R. Bowman", "Li Fei-Fei", "Kang Liu", "Tang Jie", "Michael I. Jordan", "Steven C.H. Hoi", "Hanwang Zhang", "Caiming Xiong", "Dan Roth", "Yankai Lin", "Mikel Artetxe", "Jian Tang", "Duyu Tang", "Christopher D Manning", "Jason Weston", "William Fedus", "Jason C.S. Wu", "Bing Liu", "Jiawei Han", "Kyunghyun Cho", "Yonglong Tian", "Richard Socher", "Andrew Ng", "Jiatao Gu", "Phillip Isola", "Zhongyu Wei", "Zhou Yu", "Juergen Schmidhuber", "Yejin Choi", "Yoshua Bengio", "Sebastian Ruder", "Zhilin Yang", "Tao Gui", "Zachary C. Lipton", "Jure Leskovec", "Wayne Xin Zhao", "Rico Sennrich", "Jeffrey Pennington", "Wanxiang Che", "Tong Xiao", "Noam Shazeer", "Barret Zoph", "Chris Dyer", "Furu Wei", "Jiang Guo", "Danqi Chen", "Jiajun Wu", "Chris Pal", "Bolei Zhou", "Yoav Goldberg", "Yuchen Zhang", "Quoc V. Le", "Jiasen Lu", "Jing Jiang", "Dzmitry Bahdanau", "Dan Jurafsky", "Yoon Kim", "Wenhu Chen", "Justin Johnson", "Andrej Karpathy", "Ming Zhou", "Ian Goodfellow", "Jianfeng Gao", "Tomas Mikolov", "Geoffrey Hinton", "Yann LeCun", "Hai Zhao", "Xu Sun", "Jiwei Li", "Haifeng Wang", "Luke Zettlemoyer", "ChengXiang Zhai", "Zengfeng Huang", "Tianyang Lin", "Yiheng Shu", "Libo Qin", "Rami Al-Rfou", "Xinlei Chen", "Deng Cai", "Jingjing Xu", "Zhe Gan", "Dhruv Batra", "Devi Parikh", "Zhiting Hu", "Eduard Hovy", "Eric Xing", "Xuezhe Ma"];

var titles_area = ["Task-oriented", "Goal-oriented", "Conversation", "Dialogue", "Dialog", "Cross-Modal", "Multi-Modal", "MultiModal", "Vision-and-Language", "Vision and Language", "Vision-Language", "V&L", "Spoken Language Understanding", "SLU"];
var titles_model = ["BERT", "GPT", "Transformer"];
var titles_method = ["Contrastive Learning", "Contrastive", "Pre-train", "Pretrain", "Prompt", "Self-Supervised", "Distillation"]
var titles = []
titles = titles.concat(titles_area, titles_model, titles_method)

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
