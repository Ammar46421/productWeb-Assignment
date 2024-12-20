function addProduct() {
    document.getElementById('productButton').style.display = 'none';
    document.getElementById('description').style.display = 'none';
    document.getElementById('productContainer').style.display = 'block';
    document.getElementById('productFormCloser').style.display = 'block';
    // document.getElementById('recentProducts').style.display = 'block';

}

function homePage(){
    document.getElementById('productButton').style.display = 'block';
    document.getElementById('description').style.display = 'block';
    document.getElementById('productContainer').style.display = 'none';
    document.getElementById('productFormCloser').style.display = 'none';
}


function submitBlog() {
    let title = document.getElementById('addTitle').value;
    title = title.toUpperCase();
    let price = document.getElementById('addPrice').value;
    let description = document.getElementById('addDescription').value;

    if (price === "" || title === "" || description === "") {
        alert("Please fill in all the price, title, and description");
        return;
    }

    let products = document.createElement("div");
    products.className = 'products';
    products.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
    <h3 class="price">${"$"+price}</h3>
    <button class="editButton" onclick="editProduct(this)">Edit</button>
    <button class="deleteButton" onclick="deleteProduct(this)">Delete</button>`;

    document.getElementById("products").appendChild(products);
    
    document.getElementById("addPrice").value = "";
    document.getElementById("addTitle").value = ""; 
    document.getElementById("addDescription").value = "";

    document.getElementById('productContainer').style.display = 'none';
    document.getElementById('recentProducts').style.display = 'block';
    document.getElementById('description').style.display = 'block';
    document.getElementById('productButton').style.display = 'block';
    // document.getElementById('homeButton').style.display = 'block';
    document.getElementById('productFormCloser').style.display = 'none';
};


function editProduct(button) {
    let products = button.parentElement;
    let priceElement = products.querySelector('.price');
    let titleElement = products.querySelector('h3');
    let descriptionElement = products.querySelector('p');

    document.getElementById('addTitle').value = titleElement.innerText;
    document.getElementById('addPrice').value = priceElement.innerText.replace('$', '');
    document.getElementById('addDescription').value = descriptionElement.innerText;

    products.remove();

    button.innerText = "Save";
    button.setAttribute('onclick', 'saveBlog(this)');

    document.getElementById('productButton').style.display = 'none';
    document.getElementById('description').style.display = 'none';
    document.getElementById('productContainer').style.display = 'block';
    document.getElementById('productFormCloser').style.display = 'none';
    // document.getElementById('recentProducts').style.display = 'block';
}

function saveBlog(button) {
    let newPrice = document.getElementById('addPrice').value;
    let newTitle = document.getElementById('addTitle').value;
    let newDescription = document.getElementById('addDescription').value;
    if (newPrice === "" || newTitle === "" || newDescription === "") {
        alert("Please fill in all options.");
        return;
    }

    let products = button.parentElement;
    let priceElement = products.querySelector('h3:nth-child(1)');
    let titleElement = products.querySelector('h3:nth-child(2)');
    let descriptionElement = products.querySelector('p');

    titleElement.innerText = newTitle;
    descriptionElement.innerText = newDescription;

    document.getElementById('addprice').value = "";
    document.getElementById('addTitle').value = "";
    document.getElementById('addDescription').value = "";

    button.innerText = "Edit";
    button.setAttribute('onclick', 'editProduct(this)');

    document.getElementById('productButton').style.display = 'block';
    document.getElementById('description').style.display = 'block';
    document.getElementById('productContainer').style.display = 'none';
    
}

function deleteProduct(button) {
    if (confirm("Are you sure you want to delete this Product?")) {
        let products = button.parentElement;
        products.remove();
    }

    if (!products || products.innerHTML === "") {
        if (recentProducts) {
            recentProducts.style.display = "none";
        }
}
}