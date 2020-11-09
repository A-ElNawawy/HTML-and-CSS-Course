function createLeaf (
  branchesContainer,  /* component which will be filled by final Items */
  leaf             /* Final Item */
){
  let li = document.createElement("li");
  li.innerHTML = leaf;
  branchesContainer.appendChild(li);
}

function createSubTree(
  branchesContainer,/* component which will be filled by final Items */
  leaf,/* The Branch Title */
  subTree/* Array of Final Items */
){
    let detailsComponent = document.createElement("details");
    let summaryComponent = document.createElement("summary");
    summaryComponent.innerHTML = leaf;
    detailsComponent.appendChild(summaryComponent);
    let ul = document.createElement("ul");
    ul.classList = "second-ul";
    subTree.forEach(branch => {
      if(branch.tree){
        let li = document.createElement("li");
        createSubTreeSubTree(
          li,/* branchesContainer */
          branch.leaf,/* leaf */
          branch.tree/* subTree */
        );
        ul.appendChild(li);
      }else{
        createLeaf(
          ul,    /* branchesContainer */
          branch.leaf /* leaf */
        );
      }
    });
    detailsComponent.appendChild(ul);
    branchesContainer.appendChild(detailsComponent);
}

function createSubTreeSubTree(
  branchesContainer,/* component which will be filled by final Items */
  leaf,/* The Branch Title */
  subTree/* Array of Final Items */
){
    let detailsComponent = document.createElement("details");
    let summaryComponent = document.createElement("summary");
    summaryComponent.innerHTML = leaf;
    detailsComponent.appendChild(summaryComponent);
    let ul = document.createElement("ul");
    ul.classList = "second-ul";
    subTree.forEach(branch => {
      createLeaf(ul,/* branchesContainer */branch.leaf /* leaf */)
    });
    detailsComponent.appendChild(ul);
    branchesContainer.appendChild(detailsComponent);
}