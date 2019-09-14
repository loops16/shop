const findCategories = () => {
    const categoryKeys = Object.keys(category_map);
    let categoryDivData = '';
    categoryKeys.forEach(category => {

        categoryDivData += category_format.format(
            category,
            category_map[category].images[0],
            Math.min.apply(null, category_map[category].price)
        );
    });
    $('#category-div').html(categoryDivData);
    addNewsletter();
    addFooter();
    addSocialLinks();

};

let category_format =     `
            <div class="single-products-catagory clearfix">
                    <a href="shop.html?category={0}">
                        <img src="img/product-img/{1}.jpg" alt="">
                        <div class="hover-content">
                            <div class="line"></div>
                            <p>From INR {2}</p>
                            <h4>{0}</h4>
                        </div>
                    </a>
                </div>
            </div>`;