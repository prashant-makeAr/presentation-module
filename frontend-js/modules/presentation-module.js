import { productsData } from "./data.js"

export default function PresentationModule() {

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

    function isImage(url) {
        const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
        const extension = url.split('.').pop().toLowerCase();
        return imageExtensions.includes(extension);
    }


    function renderSingleProduct() {
        const heroContent = selectedProduct.imagesUrlArray.map(url => {
            if (isImage(url)) {
                return `<img class="carousel-item" src="${url}" alt="">`;
            } else {
                return `
                    <video class="carousel-item" autoplay loop muted>
                        <source src="${url}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `;
            }
        }).join('');

        const htmlContent = `
            <div class="carousel">
                <div class="carousel-inner" id="carouselInner">
                    ${heroContent}
                </div>
                <button class="carousel-button prev" id="prevButton">❮</button>
                <button class="carousel-button next" id="nextButton">❯</button>
            </div>
            <div class="name"><span>Name :</span> <span id="name">${selectedProduct.name}</span></div>
            <div class="price"><span>Price :</span> <span id="price">Rs. ${selectedProduct.price}</span></div>
            <div class="available-colors" id="availableColors">
                ${selectedProduct.availableColors.map(color => `
                    <span class="color" style="background-color: ${color};"></span>
                `).join('')}
            </div>
            <div class="features">
                <h1>Features</h1>
                ${selectedProduct.features.map(feature => `
                    <div class="feature">
                        <h3>${feature.name}</h3>
                        <p>${feature.description}</p>
                    </div>
                `).join('')}
            </div>
        `;


        const singleProductInfo = document.querySelector('.single-product-info');
        singleProductInfo.innerHTML = htmlContent;


        const carouselInner = document.getElementById('carouselInner');
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        let currentIndex = 0;

        function showItem(index) {
            items.forEach((item, i) => {
                item.classList.toggle('active', i === index);
            });
        }

        document.getElementById('prevButton').addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
            showItem(currentIndex);
        });

        document.getElementById('nextButton').addEventListener('click', () => {
            currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
            showItem(currentIndex);
        });

        // Initialize carousel
        showItem(currentIndex);
    }

    // Helper function to determine if URL is an image
    function isImage(url) {
        const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
        const extension = url.split('.').pop().toLowerCase();
        return imageExtensions.includes(extension);
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
}

