const maxItemsShown = 10;   //max items to be displayed
var listTagElements = Array.from(document.querySelectorAll(".contact-item"));

function readUserData() {
  var numberOfPages = Math.ceil(listTagElements.length / maxItemsShown);
  
  for (let i = maxItemsShown; i < listTagElements.length; i++) {
    listTagElements[i].style.display = "none";
  }

  let parent = document.querySelector(".page");

  let pagination = document.createElement("div");
  pagination.setAttribute("class", "pagination");
  parent.append(pagination);
  
  for (let i = 1; i <= numberOfPages; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("id", i);
    a.innerHTML = i;
    a.setAttribute("onclick", "changePage(this)");

    li.append(a);
    pagination.appendChild(li);
  }

  console.log(listTagElements);
}

function changePage(element) {
  for (let i = 0; i < listTagElements.length; i++) {
    listTagElements[i].style.display = "none";
  }
  
  var startingElement = (element.id - 1) * 10;

  for (let i = 0; i < maxItemsShown; i++) {
    listTagElements[startingElement].style.display = "block";
    startingElement++;
  }
}

readUserData();