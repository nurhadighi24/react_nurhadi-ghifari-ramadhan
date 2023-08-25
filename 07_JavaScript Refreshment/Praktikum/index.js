const submitButton = document.getElementById('btnSubmit');
const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice')
const productCategorySelect = document.getElementById('productCategory');
const productFreshnessSelect = document.querySelectorAll('input[name="productFreshness"]')
const fileUploadInput = document.getElementById('fileUpload');
const additionalDescriptionInput = document.getElementById('additionalDescription');


submitButton.addEventListener('click', function() {
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
    } else if (productCategory.trim() === '') {
        alert('The Product Category field must be filled in.');
    } else if (selectedFreshness === null) {
        alert('The Product Freshness field must be filled in.');
    } else if (!selectedFile) {
        alert('The Image of Product field must be filled in.');
    } else if (addDesc.trim() === '') {
        alert('The Additional Description field must be filled in.');
    } else {
        alert('Product Name: ' + productName  + 
        '\nProduct Category: ' + productCategory + 
        '\nProduct Price: ' + productPrice + 
        '\nProduct Freshness: ' + selectedFreshness + 
        '\nThe Image of Product: ' + selectedFile + 
        '\nAdditional Description: ' + addDesc);
    }
});


