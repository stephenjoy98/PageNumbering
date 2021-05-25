const maxItemsShown = 10;   //max items to be displayed
var listTagElements = Array.from(document.querySelectorAll(".contact-item"));   //get all contact cards from the list


function readUserData() {
  var numberOfPages = Math.ceil(listTagElements.length / maxItemsShown);    //calculate number of pages
  
  for (let i = maxItemsShown; i < listTagElements.length; i++) {    //hide all cards except first 10
    listTagElements[i].style.display = "none";
  }

  let parent = document.querySelector(".page");   //get parent div for page numbering

  let pagination = document.createElement("div");   //create a container for pagination
  pagination.setAttribute("class", "pagination");
  parent.append(pagination);
  
  for (let i = 1; i <= numberOfPages; i++) {    //add page number to the list
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("id", i);
    a.innerHTML = i;
    a.setAttribute("onclick", "changePage(this)");

    li.append(a);
    pagination.appendChild(li);
  }
}


function changePage(element) {
  for (let i = 0; i < listTagElements.length; i++) {    //hide all cards
    listTagElements[i].style.display = "none";
  }
  
  var startingElement = (element.id - 1) * 10;    //get starting element
  
  if (listTagElements.length - startingElement <= 10) {   //check number of elements left for last page
    var max = listTagElements.length - startingElement;
  } else {
    var max = maxItemsShown;
  }

  for (let i = 0; i < max; i++) {   //show contacts
    listTagElements[startingElement].style.display = "block";
    startingElement++;
  }
}

readUserData();