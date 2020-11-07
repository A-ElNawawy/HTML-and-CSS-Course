/*
** Automation Decorate Active SideTitle:
*/
let links = document.getElementsByTagName('a');
for (const link of links) {
  let href = link.href;
  if(href.includes("html#")){
    link.parentElement.classList.add("active");
  }
}

/*
** Dynamically Fill Section Content:
** First: We Create a separate JS File For Each Page Content.
** This File Naming Follows The Same Naming Of corresponding Page [Ex: p4.html, p4.js].
** All Content Files Saved In [./Data] Directory.
** Each File Contains a Single Array Contains All Content As Following:
** Note That: We Call Content file inside the section [Instead of the end of html file as usual].
*/
let section = document.getElementById('first-tree');
tree1.forEach(branch => {
  if(branch.layers == 1){
    createLeaf (section,/* branchesContainer */branch.leaf/* leaf */)
  }else{
    let branchesContainer = document.createElement("li");
    createSubTree(
      branchesContainer,/* branchesContainer */
      branch.leaf,/* leaf */
      branch.tree/* subTree */
    );
    section.appendChild(branchesContainer);
  }
})

let section2 = document.getElementById('second-tree');
tree2.forEach(branch => {
  if(branch.layers == 1){
    createLeaf (section2,/* branchesContainer */branch.leaf/* leaf */)
  }else{
    let branchesContainer = document.createElement("li");
    createSubTree(
      branchesContainer,/* branchesContainer */
      branch.leaf,/* leaf */
      branch.tree/* subTree */
    );
    section2.appendChild(branchesContainer);
  }
})