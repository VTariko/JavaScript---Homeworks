var cart = document.getElementsByClassName("cart-price")[0],
    cartFormat = "${0}",
    cartSumm = 0,
    itemsText = document.getElementsByClassName("cart-small-text")[0],
    itemsCount = 0,
    items = [],
    itemFormat = "({0} items)",
    cartTab = document.getElementsByClassName("content")[document.getElementsByClassName("content").length-1].getElementsByTagName("div")[0];


window.onload = function () {
    updateCart();
    addBuyButton();
    var button = document.getElementsByClassName("cart")[0].getElementsByTagName("button")[0];
    button.addEventListener("click", goToCart)
}

function updateCart() {
    cart.innerHTML = String.format(cartFormat, cartSumm);
    itemsText.innerHTML = String.format(itemFormat, items.length);
    cartTab.innerHTML = "";
    items.forEach(function (b) {
        var par = document.createElement("p");
        par.innerHTML = b;
        cartTab.appendChild(par);
    })
}

function addBuyButton() {
    var books = document.getElementsByClassName("book");
    for (var i=0; i<books.length; i++) {
        var toBuy = document.createElement("button");
        toBuy.className = "btn-buy";
        var spanToBuy = document.createElement("span");
        spanToBuy.innerHTML = "Buy Now"
        toBuy.appendChild(spanToBuy);
        toBuy.addEventListener("click", buyThis);
        books[i].appendChild(toBuy);
    }
}

function buyThis(sender) {
    var buyBook = sender.target;
    var book = findAncestor(buyBook, "book");
    var name = book.getElementsByClassName("name-of-book")[0].innerText.replace(/[^a-zA-Z0-9 ]/g,' ');
    var price = parseFloat(book.getElementsByClassName("price-of-book")[0].innerHTML.replace(/\D/g,''));
    cartSumm += price;
    items.push(name);
    updateCart();
}

function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

function goToCart(){
    openTabName("cart");
    var c = document.getElementById("cartTab");
    c.className += " active";
}

function openTab(evt, tabName) {
    openTabName(tabName);
    evt.currentTarget.className += " active";
}

function openTabName(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
}