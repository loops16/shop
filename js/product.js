let activeProduct = null;

const setProductInfo = () => {
    getIDViaParams();
    updateProductsArea();
    addNewsletter();
    addFooter();
    addSocialLinks();
    addActiveJS();
};

const updateProductsArea = () => {
    $('#product_info').html(product_info_template.format(
        product_map[activeProduct].image1,
        product_map[activeProduct].image2,
        product_map[activeProduct].image3,
        product_map[activeProduct].discountedPrice,
        product_map[activeProduct].name,
        product_map[activeProduct].description,
        product_map[activeProduct].az_url,
        product_map[activeProduct].fk_url,
        'https://www.instagram.com/loopsjewelry/',
        product_map[activeProduct].sd_url,
        `https://wa.me/918506801610?text=I'm%20interested%20${product_map[activeProduct].az_url}`,
        product_map[activeProduct].mrp,
        product_map[activeProduct].sd_url === 'NA'?'hidden':'visible',
        product_map[activeProduct].sd_url === 'NA'?'Out of Stock':'In Stock',
        product_map[activeProduct].sd_url === 'NA'?'unavailability':'avaibility'
    ));

    if(product_map[activeProduct].image3 === '')
    {
        $('.carousel-indicators').children().last().remove();
        $('.carousel-inner').children().last().remove();
        
    }

    if(product_map[activeProduct].image2 === '')
    {
        $('.carousel-indicators').children().last().remove();
        $('.carousel-inner').children().last().remove();
    }

    $('#breadcrumb_list').html(breadCrumbListTemplate.format(
        product_map[activeProduct].category[0],
        product_map[activeProduct].category.join(' / '),
        product_map[activeProduct].name,
    ));
};

const getIDViaParams = () => {
    const urlTokens = window.location.href.split("?");
    activeProduct = null;
    if (urlTokens.length > 1) {
        activeProduct = urlTokens[1].split('=')[1];
    }
};
let breadCrumbListTemplate = `
<li class="breadcrumb-item"><a href="shop.html?category={0}">{1}</a></li>`;

let product_info_template = `
                    <div class="col-12 col-lg-7">
                        <div class="single_product_thumb">
                            <div id="product_details_slider" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li class="active" data-target="#product_details_slider" data-slide-to="0"
                                        style="background-image: url(img/product-img/{0}.jpg);">
                                    </li>
                                    <li data-target="#product_details_slider" data-slide-to="1"
                                        style="background-image: url(img/product-img/{1}.jpg);">
                                    </li>
                                    <li data-target="#product_details_slider" data-slide-to="2"
                                        style="background-image: url(img/product-img/{2}.jpg);">
                                    </li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <a class="gallery_img" href="#">
                                            <img class="d-block w-100" src="img/product-img/{0}.jpg"
                                                alt="">
                                        </a>
                                    </div>
                                    <div class="carousel-item">
                                        <a class="gallery_img" href="#">
                                            <img class="d-block w-100" src="img/product-img/{1}.jpg"
                                                alt="">
                                        </a>
                                    </div>
                                    <div class="carousel-item">
                                        <a class="gallery_img" href="#">
                                            <img class="d-block w-100" src="img/product-img/{2}.jpg"
                                                alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-5">
                        <div class="single_product_desc">
                            <!-- Product Meta Data -->
                            <div class="product-meta-data">
                                <div class="line"></div>
                                <p style='text-decoration: line-through'>INR {11}/-</p>
                                <p class="product-price">INR {3}/-</p>
                                <a>
                                    <h6>{4}</h6>
                                </a>
                                <!-- Avaiable -->
                                <p class="{14}"><i class="fa fa-circle"></i> {13}</p>
                            </div>

                            <div class="short_overview my-5">
                                <p>{5}</p>
                            </div>
                        </div>
                        <div style='visibility:{12}'>
                        <p>Buy on </p>
                        <a href="{6}"><img class='width-45 mr-10' src="img/core-img/amazon.png" alt=""></a>
                        
                        <a href="{7}"><img class='width-45 mr-10' src="img/core-img/flipkart.png" alt=""></a>
                        
                        <a href="{8}"><img class='width-45 mr-10' src="img/core-img/insta.png" alt=""></a>
                        
                        <a href="{9}"><img class='width-45 mr-10' src="img/core-img/snapdeal.png" alt=""></a>
                        
                        <a href="{10}"><img class='width-45 mr-10' src="img/core-img/whatsapp.png" alt=""></a>
                        </div>
                        <br/>
                        <br/><br/>
                    </div>`;