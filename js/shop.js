let activeCategory = null;

const setCategories = () => {
    getCategoryViaParams();
    const categoryKeys = Object.keys(category_map);
    let categoryListData = '';
    categoryKeys.forEach((category,index) => {
        if(index === 0 && activeCategory === null)
            activeCategory = category;
        categoryListData += '<li ';
        if(activeCategory === category){
            categoryListData += 'class="active"';
        }
        categoryListData += '><a href="?category='+category+'">'+category+'</a></li>';
    });
    console.log(categoryListData);
    $('#category_list').html(categoryListData);
    updateProductsArea();
    addNewsletter();
    addFooter();
    addSocialLinks();
};

const updateProductsArea = () => {
    // products_div
    let productListData = '';
    $("#total_products_info").html(`Showing ${category_map[activeCategory].ids.length} of ${category_map[activeCategory].ids.length}`)
    for(var i =0; i < category_map[activeCategory].ids.length ; i++){
        productListData += product_template.format(
            category_map[activeCategory].ids[i],
            category_map[activeCategory].images[i],
            category_map[activeCategory].price[i],
            product_map[category_map[activeCategory].ids[i]].name
        );
    }
    $('#products_div').html(productListData);
};

const getCategoryViaParams = () => {
    const urlTokens = window.location.href.split("?");
    activeCategory = null;
    if(urlTokens.length > 1){
        activeCategory = urlTokens[1].split('=')[1];
        activeCategory = activeCategory.replace('%20',' ');
    }
};

let product_template = `<div class="col-12 col-sm-6 col-md-12 col-xl-6"><div class="single-product-wrapper"><a href="product-details.html?id={0}"></a><div class="product-img"><a href="product-details.html?id={0}"><img src="img/product-img/{1}.jpg" alt=""></a></div><div class="product-description d-flex align-items-center justify-content-between"><div class="product-meta-data"><div class="line"></div><p class="product-price">{3}</p><h6>INR {2}/- only</h6></div></div></div></div>`;
