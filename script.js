let listProduct = ['Sony Xperia', 'Samsung Galaxy',
    'Nokia 6', 'Xiaomi Redmi Note 4',
    'Apple iPhone 6S', 'Xiaomi Mi 5s Plus',
    'Apple iPhone 8 Plus'];
let data = "";

function showProduct() {
    document.getElementById("amountOfProduct").innerText = listProduct.length + " Products";
    for (let i = 0; i < listProduct.length; i++) {
        data += "<tr>";
        data += "<td style='width: 500px;'>" + listProduct[i] + "</td>";
        data += "<td> <input type='button' value='Edit' onclick='editProduct(" + i + ")'><td>";
        data += "<td> <input type='button' value='Delete' onclick='deleteProduct(" + i + ")'><td>";
        data += "<tr>";
    }
    document.getElementById("showAllProduct").innerHTML = data;
}

function editProduct(i) {
    let editForm = "<div class='container'> <p>Edit Product</p>";
    let currentProduct = listProduct[i];
    editForm += " <input type='text' id='editProductName' value='" + currentProduct + "' ></input>";
    editForm += "<input type='button' id='confirmEdit' value='Edit' onclick='confirmEdit(" + i + ")'></input>";
    editForm+="</div>";
    document.getElementById("editProduct").innerHTML=editForm;
}
function confirmEdit(i) {
    listProduct[i]=document.getElementById("editProductName").value;
    data='';
    showProduct();
    document.getElementById("editProduct").innerHTML='';
}

function deleteProduct(i) {
    listProduct.splice(i,1);
    data="";
    showProduct();
}
function addNewProduct() {
    let newData = document.getElementById("newProduct").value;
    listProduct.push(newData);
    data = "";
    showProduct();
}