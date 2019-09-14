if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

const addNewsletter = () => {
    $( "body" ).append(newsLetter);

};

const addFooter = () => {
    $( "body" ).append(footer.format(new Date().getFullYear()));
};

const addSocialLinks = () => {
    $('#social_links').append(social_links_format.format(
        'https://www.instagram.com/loopsjewelry/',
        'https://www.instagram.com/loopsjewelry/',
        'https://www.amazon.in/s?rh=n%3A1951048031%2Cp_4%3AThe+Loops&ref=w_bl_sl_s_je_web_1951048031'
    ));
};

let newsLetter = `<section class="newsletter-area section-padding-100-0">
<div class="container">
    <div class="row align-items-center">
        <!-- Newsletter Text -->
        <div class="col-12 col-lg-6 col-xl-7">
            <div class="newsletter-text mb-100">
                <p><h2>Buy direct and get <span>10% Discount</span></h2>
                </p>
            </div>
        </div>
        <!-- Newsletter Form 
        <div class="col-12 col-lg-6 col-xl-5">
            <div class="newsletter-form mb-100">
                <form action="#" method="post">
                    <input type="submit" value="Connect">
                </form>
            </div>
        </div>
        -->
    </div>
</div>
</section>`;

const footer =`    <footer class="footer_area clearfix">
<div class="container">
    <div class="row align-items-center">
        <!-- Single Widget Area -->
        <div class="col-12 col-lg-4 width-50p">
            <div class="single_widget_area">
                <!-- Logo -->
                <div class="footer-logo mr-50 width-100">
                    <a href="index.html"><img src="img/core-img/LoopsGold.png" alt=""></a>
                </div>
                <!-- Copywrite Text -->
                <p class="copywrite">
                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    Copyright &copy;
                    {0} All rights reserved Loops <br />
                    Powered by <a
                        href="https://colorlib.com" target="_blank">Colorlib</a>
                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                </p>
            </div>

            
        </div>
        <div class="col-12 col-lg-4 width-50p">
            <div class="single_widget_area">
                <p class="brand_name_botton">
                    <span>Loops<br/><span>
                    Sector 78 Noida<br/> UP 201307<br/>INDIA<br/><br/>
                    Phone : <a href="tel:+91-9876543210">+91-9876543210</a>

                    <br/>
                    Email : <a href="mailto:theloops16@gmail.com?Subject=Hello">theloops16@gmail.com</a>
                </p>
            </div>

            
        </div>
    </div>
</div>
</footer>`;

const social_links_format = `
    <a href="{0}"><i class="fa fa-instagram" aria-hidden="true"></i></a>
    <a href="{1}"><i class="fa fa-facebook" aria-hidden="true"></i></a>
    <a href="{2}"><i class="fa fa-amazon" aria-hidden="true"></i></a>
`;