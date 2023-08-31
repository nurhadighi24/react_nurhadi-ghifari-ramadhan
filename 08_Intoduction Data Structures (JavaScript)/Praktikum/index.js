const submitButton = document.getElementById('btnSubmit');
const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice')
const productCategorySelect = document.getElementById('productCategory');
const productFreshnessSelect = document.querySelectorAll('input[name="productFreshness"]')
const fileUploadInput = document.getElementById('fileUpload');
const additionalDescriptionInput = document.getElementById('additionalDescription');
const tableContainer = document.getElementById('table');
const deleteButton = document.getElementById('btnDelete');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('btnSearch');

//Menyimpan product yang sudah di input dan validasi
const products = []

//Fungsi memvalidasi setiap inputan dari user
inputItem = () => {
submitButton.addEventListener('click', function() {
    event.preventDefault();
    const productName = productNameInput.value;
    const productPrice = productPriceInput.value;
    const productCategory = productCategorySelect.value;
    let selectedFreshness = null;
    const selectedFile = fileUploadInput.value[0];
    const addDesc = additionalDescriptionInput.value;

    productFreshnessSelect.forEach(input => {
        if (input.checked) {
            selectedFreshness = input.value;
        }
    });

    if (productName.length > 25) {
        alert('Last Name must not exceed 25 characters.');
    } else if (productName.trim() === '') {
        alert('Please enter a valid Product name.');
    } else if (productPrice.trim() === '') {
        alert('Please enter a valid Product price.');
    } else if (productName.includes('@') || 
    productName.includes('/') || 
    productName.includes('#') || 
    productName.includes('{') || 
    productName.includes('}')) {
        alert('Name must not contain symbols.');
    } else if (productCategory.trim() === '') {
        alert('The Product Category field must be filled in.');
    } else if (selectedFreshness === null) {
        alert('The Product Freshness field must be filled in.');
    } else if (!selectedFile) {
        alert('The Image of Product field must be filled in.');
    } else if (addDesc.trim() === '') {
        alert('The Additional Description field must be filled in.');
    } else {
        alert("Produk berhasil ditambahkan!");

        //Menambahkan product ke dalam tabel yang nanti dibuat
        products.push({
            productName,
            productCategory,
            selectedFile,
            selectedFreshness,
            addDesc,
            productPrice
        });
        makeTable();
        console.log(products);
    }
});
}
inputItem();

//Fungsi untuk membuat table berdasarkan input product yang dibuat
makeTable = () => {
    let tableHTML = 
    `
    <table id="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Product Name</th>
          <th scope="col">Product Category</th>
          <th scope="col">Image Of Product</th>
          <th scope="col">Product Freshness</th>
          <th scope="col">Additional Description</th>
          <th scope="col">Product Price</th>
        </tr>
      </thead>
      <tbody>
    `;

    products.forEach((product, index) => {
        tableHTML += 
        `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${product.productName}</td>
          <td>${product.productCategory}</td>
          <td>${product.selectedFile}</td>
          <td>${product.selectedFreshness}</td>
          <td>${product.addDesc}</td>
          <td>${product.productPrice}</td>
        </tr>
        `;
    });

    tableHTML += 
    `
        </tbody>
    </table>
    `;

    tableContainer.innerHTML = tableHTML;
}


//Fungsi untuk membuat delete button dari product terakhir
deletedLastItem = () => {
    deleteButton.addEventListener('click', () => {
        event.preventDefault();
        if (products.length > 0) {
            products.pop();
            makeTable();
        }
    })
}
deletedLastItem();

searchProduct = () => {
    searchButton.addEventListener('click', () => {
        const searchInputed = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.productName.toLowerCase().includes(searchInputed));
        
        updateTable(filteredProducts);
        console.log(filteredProducts)
    });

    
}

searchProduct();


updateTable = (displayProducts) => {
    const tableBody = tableContainer.querySelector('tbody');
    tableBody.innerHTML = '';

    displayProducts.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = 
        `
            <th scope="row">${index + 1}</th>
            <td>${product.productName}</td>
            <td>${product.productCategory}</td>
            <td>${product.selectedFile}</td>
            <td>${product.selectedFreshness}</td>
            <td>${product.addDesc}</td>
            <td>${product.productPrice}</td>
        `;
        tableBody.appendChild(row);
    });
}