const findCategories = () => {
    const categoryKeys = Object.keys(category_map);
    let categoryDivData = '';
    categoryKeys.forEach(category => {

        categoryDivData += category_format.format(
            category,
            category_map[category].images[0],
            Math.min.apply(null, category_map[category].discountedPrice)
        );
    });
    $('#category-div').html(categoryDivData);
    addNewsletter();
    addFooter();
    addSocialLinks();
    setTimeout(function () {
        $('#loops_banner').fadeOut(1000);
        $('.mobile-nav').fadeIn(1000);
        $("html, body").animate({ scrollTop: 0 }, 1000);
    }, 1000);
    $('.mobile-nav').hide();
    $("html, body").animate({ scrollTop: 70 }, 1);
};

let category_format = `
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