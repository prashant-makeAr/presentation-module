import { productsData } from "./data.js"

console.log(productsData);

let selectedProductId = productsData[0].id;
let selectedProduct = productsData[0];

const allProductList = document.querySelector('.all-products-list')
const singleProductInfo = document.querySelector('.single-product-info')


function renderProducts() {
    allProductList.innerHTML = ""

    productsData.forEach((product) => {
        const singleProductWrapper = document.createElement('div')
        singleProductWrapper.classList.add('single-product-name')

        if (selectedProductId == product.id) {
            singleProductWrapper.classList.add("selected-product")
            selectedProduct = product
        }

        singleProductWrapper.setAttribute('id', product.id)
        const h1 = document.createElement('h1')
        h1.innerText = `${product.name}`

        singleProductWrapper.append(h1)

        allProductList.append(singleProductWrapper)

    })


}

function renderSingleProduct() {

    singleProductInfo.innerHTML =

        `   <img class="hero-img" src=${selectedProduct.imagesUrlArray[0]} alt="">
        <div class="name"><span>Name :</span> <span id="name">${selectedProduct.name}</span></div>
        <div class="price"><span>Price :</span> <span id="price">Rs. ${selectedProduct.price}</span></div>

       <div class="available-colors">
           ${selectedProduct.availableColors.map(color => `
                <span style="display: inline-block; background-color: ${color}; width: 30px; height: 30px; border-radius: 50%;"></span>
           `).join('')}
        </div>

        <div class="features">
            <h1> Features </h1>

           ${selectedProduct.features.map(feature => `
               <div class="feature">
                   <h3>${feature.name}</h3>
                   <p>${feature.description}</p>
               </div>
           `).join('')}
        </div>
`
}


allProductList.addEventListener("click", (e) => {
    if (parseInt(e.target.closest('.single-product-name').id) !== parseInt(selectedProductId)) {

        console.log(e.target.closest('.single-product-name').id);
        selectedProductId = e.target.closest('.single-product-name')?.id
        renderProducts()
        renderSingleProduct()
    }
})

renderProducts()
if (selectedProduct) renderSingleProduct();