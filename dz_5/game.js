createField();

function createField() {
    var parent = document.createElement("div");
    parent.className = "tabula";
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var child = document.createElement("div");
            child.className = "tile";
            if (i !== 0 && j !== 0) {
                if ((i + j) % 2 === 0) {
                    child.className += " cellDark";
                } else {
                    child.className += " cellLight";
                }
                child.id = String.fromCharCode(64 + j) + i;
	            child.setAttribute("name", "cell");
                child.addEventListener("click", addBorder);
            } else if (i === 0 && j !== 0) {
                child.innerHTML = String.fromCharCode(64 + j);
            } else if (i !== 0) {
	            child.innerHTML = i;
            }
            parent.appendChild(child);
        }
    }
    document.body.appendChild(parent);
    figuresStart();
}

function figuresStart() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var position = String.fromCharCode(64 + j) + i;		//определяем ID по позиции для удобства в шахматной форме
            var figure = document.getElementById(position);		//определяем клетку по выбранному ID
            if (figure) {
                if (j === 1 || j === 8) {							//столбцы A и H - ладья
                    if (i === 1) {								//ряд 1 - белые
                        figure.innerHTML = "&#9814";
                    } else if (i === 8) {							//ряд 8 - черные
                        figure.innerHTML = "&#9820";
                    }
                } else if (j === 2 || j === 7) {				//столбцы B и G - конь
                    if (i === 1) {								//ряд 1 - белые
                        figure.innerHTML = "&#9816";
                    } else if (i === 8) {						//ряд 8 - черные
                        figure.innerHTML = "&#9822";
                    }
                } else if (j === 3 || j === 6) {				//столбцы C и F - офицер
                    if (i === 1) {								//ряд 1 - белые
                        figure.innerHTML = "&#9815";
                    } else if (i === 8) {						//ряд 8 - черные
                        figure.innerHTML = "&#9821";
                    }
                } else if (j === 4) {							//столбец D - ферзь
                    if (i === 1) {								//ряд 1 - белые
                        figure.innerHTML = "&#9813";
                    } else if (i === 8) {						//ряд 8 - черные
                        figure.innerHTML = "&#9819";
                    }
                } else if (j === 5) {							//столбец E - король
                    if (i === 1) {								//ряд 1 - белые
                        figure.innerHTML = "&#9812";
                    } else if (i === 8) {						//ряд 8 - черные
                        figure.innerHTML = "&#9818";
                    }
                }

                if (i === 7) {									//весь ряд 7 - черные пешки
                    figure.innerHTML = "&#9823";
                } else if (i === 2) {							//весь ряд 2 - белые пешки
                    figure.innerHTML = "&#9817";
                }
            }
        }
    }
}

function addBorder() {
	var cells = document.getElementsByName("cell");
	cells.forEach(function (c) {
		c.classList.remove("cell-border");
	});
	if (!hasClass(this, "cell-border")) {
		this.className += " cell-border";
	}
}

function hasClass(element, cls) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}