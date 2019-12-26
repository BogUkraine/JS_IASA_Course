var selectContainer = document.getElementsByClassName("custom-select");
var oldElement, mainElement, listElem, mouseHoverElem;

var i, j, selectElement, b, c;

for (i = 0; i < selectContainer.length; i++) {
  oldElement = selectContainer[i].getElementsByTagName("select")[0];

  /*for each element, create a new DIV that will act as the selected item:*/
  mainElement = document.createElement("DIV");
  mainElement.setAttribute("class", "select-selected");
  mainElement.innerHTML = oldElement.options[oldElement.selectedIndex].innerHTML;
  selectContainer[i].appendChild(mainElement);

  /*for each element, create a new DIV that will contain the option list:*/
  listElem = document.createElement("DIV");
  listElem.setAttribute("class", "select-items select-hide");

  for (j = 1; j < oldElement.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/

    mouseHoverElem = document.createElement("DIV");
    mouseHoverElem.innerHTML = oldElement.options[j].innerHTML;

    mouseHoverElem.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/

        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;

        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");

            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }

            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    listElem.appendChild(mouseHoverElem);
  }

  selectContainer[i].appendChild(listElem);

  mainElement.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/

  var x, y, i, arrNo = [];
  selectContainer = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");

  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < selectContainer.length; i++) {
    if (arrNo.indexOf(i)) {
      selectContainer[i].classList.add("select-hide");
    }
  }
}

/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);