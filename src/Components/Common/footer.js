import googleplay from "../../assets/googleplay.png"
import appstore from "../../assets/appstore.png"

const Footer = () => {

    return (
        <section id="footer">
            <div class="container">
                <a href="#" title="To Top">
                    <h2 class="text-white text-center"><i class="fas fa-level-up-alt"> GO TO TOP</i></h2>
                </a>
                <div class="row text-center text-xs-center text-sm-left text-md-left">
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <h5 class="display-4">Car Rodio</h5>
                        <ul class="list-unstyled quick-links">
                            <li>Get the car rodio app</li>
                            <li><a href="#"><img src={googleplay} width="200px" height="60px"/></a></li>
                            <li><a href="#"><img src={appstore} width="200px" height="60px"/></a></li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-4"></div>
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <h5 class="display-4">Quick links</h5>
                        <ul class="list-unstyled quick-links">
                            <li><a href="/"><i class="fa fa-angle-double-right"></i>Home</a></li>
                            <li><a href="/cars"><i class="fa fa-angle-double-right"></i>Cars</a></li>
                            <li><a href="/services"><i class="fa fa-angle-double-right"></i>Services</a></li>
                            <li><a href="/aboutus"><i class="fa fa-angle-double-right"></i>About us</a></li>
                            <li><a href="/news"><i class="fa fa-angle-double-right"></i>News</a></li>
                            <li><a href="/contactus"><i class="fa fa-angle-double-right"></i>Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                        <ul class="list-unstyled list-inline social text-center">
                            <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li class="list-inline-item"><a href="#" target="_blank"><i class="fa fa-envelope"></i></a></li>
                        </ul>
                    </div>
                    <hr class="featurette-divider footer-border"></hr>
                </div>	
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p class="h6"><a class="text-green" href="#" target="_blank">Car Rodio</a>© All right Reversed.</p>
                    </div>
                </div>	
            </div>
	    </section>
    )
}

export default Footer