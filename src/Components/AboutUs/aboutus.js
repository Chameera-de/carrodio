import image1 from '../../assets/5.png'
import image2 from '../../assets/6.png'

const aboutus = () => {
    return(
        <>
            {/* First */}
            <div id="about" class="container-fluid slide">
                <div class="row">
                    <div class="col-sm-8">
                        <h2 class="display-4 slide">About Car Rodio</h2><br />
                        <h2 class="display-1 slide">Get Your Next Car <br />Delivered</h2>
                        <button class="button" data-micron="pop">Find Your Car</button>
                    </div>
                    <div class="col-sm-4 slide">
                        <span>
                            <img src={image1} width="700px" height="350px" style={{marginLeft:'-46vh', marginTop: '29vh'}}/>
                        </span>
                    </div>
                </div>
            </div>

            {/* Second */}
            <div class="container-fluid bg-grey slide">
                <div class="row">
                    <div class="col-sm-4">
                        <span>
                            <i class="fas fa-globe-europe fa-9x" style={{fontSize: '18rem'}}></i>
                        </span>
                    </div>
                    <div class="col-sm-8">
                        <h2 class="display-4">OUR VALUES</h2><br />
                        <h4><strong>MISSION:</strong> Our mission is to fulfil customer needs and provide a stress-free buying and selling experience for their vehicles by exceeding their expectations in terms of service, value, and quality. We endeavour to earn customer loyalty by being fair and honest while providing exceptional personalized service to them.</h4><br />
                        <p><strong>VISION:</strong> Our vision is to be a preferred and a leading rental company within the industry by offering a service beyond customer satisfaction and demand. We want to help our customers to maximize their competitive advantage by helping drive productivity and efficiency. </p>
                    </div>
                </div>
            </div>

            {/* Third */}
            <div class="container-fluid slide">
                <h2 class="text-center">SERVICES</h2>
                <h4 class="text-center">What we offer</h4>
                <br />

                <div class="row align-items-center how-it-works d-flex">
                    <div class="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                        <div class="circle font-weight-bold">1</div>
                    </div>
                    <div class="col-6">
                        <h5>Sell & Buy</h5>
                        <p>Customers can sell or buy a vehicle through the web portal.</p>
                    </div>
                </div>

                <div class="row timeline">
                    <div class="col-2">
                        <div class="corner top-right"></div>
                    </div>
                    <div class="col-8">
                        <hr />
                    </div>
                    <div class="col-2">
                        <div class="corner left-bottom"></div>
                    </div>
                </div>


                <div class="row align-items-center justify-content-end how-it-works d-flex">
                    <div class="col-6 text-right">
                        <h5>Register Vehicles</h5>
                        <p>Users can register their vehicles in the web portal for selling purposes.</p>
                    </div>
                    <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                        <div class="circle font-weight-bold">2</div>
                    </div>
                </div>

                <div class="row timeline">
                    <div class="col-2">
                        <div class="corner right-bottom"></div>
                    </div>
                    <div class="col-8">
                        <hr />
                    </div>
                    <div class="col-2">
                        <div class="corner top-left"></div>
                    </div>
                </div>

                <div class="row align-items-center how-it-works d-flex">
                    <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                        <div class="circle font-weight-bold">3</div>
                    </div>
                    <div class="col-6">
                        <h5>Advertise</h5>
                        <p>Sellers can publish advertisements regarding their vehicles in the web portal.</p>
                    </div>
                </div>


                <div class="row timeline">
                    <div class="col-2">
                        <div class="corner top-right"></div>
                    </div>
                    <div class="col-8">
                        <hr />
                    </div>
                    <div class="col-2">
                        <div class="corner left-bottom"></div>
                    </div>
                </div>


                <div class="row align-items-center justify-content-end how-it-works d-flex">
                    <div class="col-6 text-right">
                        <h5>Easy payments</h5>
                        <p>Car Rodio.lk payment functionality can be used for the submission of payments before the transaction.</p>
                    </div>
                    <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                        <div class="circle font-weight-bold">4</div>
                    </div>
                </div>


                <div class="row timeline">
                    <div class="col-2">
                        <div class="corner right-bottom"></div>
                    </div>
                    <div class="col-8">
                        <hr />
                    </div>
                    <div class="col-2">
                        <div class="corner top-left"></div>
                    </div>
                </div>

                <div class="row align-items-center how-it-works d-flex">
                    <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                        <div class="circle font-weight-bold">5</div>
                    </div>
                    <div class="col-6">
                        <h5>Keep Tracks</h5>
                        <p>The system will keep a track of the activities of the buying and selling process of the vehicle for the convenience of the users.</p>
                    </div>
                </div>


                <div class="row timeline">
                    <div class="col-2">
                        <div class="corner top-right"></div>
                    </div>
                    <div class="col-8">
                        <hr />
                    </div>
                    <div class="col-2">
                        <div class="corner left-bottom"></div>
                    </div>
                </div>


                <div class="row align-items-center justify-content-end how-it-works d-flex">
                    <div class="col-6 text-right">
                        <h5>Detailed Insurance</h5>
                        <p>Detailed Insurance information of the vehicles selling vehicles will also be added.</p>
                    </div>
                    <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                        <div class="circle font-weight-bold">6</div>
                    </div>
                </div>

                <div class="row timeline">
                    <div class="col-2">
                        <div class="corner right-bottom"></div>
                    </div>
                    <div class="col-8">
                        <hr />
                    </div>
                    <div class="col-2">
                        <div class="corner top-left"></div>
                    </div>
                </div>

                <div class="row align-items-center how-it-works d-flex">
                    <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                        <div class="circle font-weight-bold">7</div>
                    </div>
                    <div class="col-6">
                        <h5>Guaranteed Information</h5>
                        <p>Only Guaranteed information will be present within the portal.</p>
                    </div>
                </div>


                <div class="row timeline">
                    <div class="col-2">
                        <div class="corner top-right"></div>
                    </div>
                    <div class="col-8">
                        <hr />
                    </div>
                    <div class="col-2">
                        <div class="corner left-bottom"></div>
                    </div>
                </div>


                <div class="row align-items-center justify-content-end how-it-works d-flex">
                    <div class="col-6 text-right">
                        <h5>Benefits & Rewards</h5>
                        <p>Members of Car Rodio.lk will receive member benefits and rewards.</p>
                    </div>
                    <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                        <div class="circle font-weight-bold">8</div>
                    </div>
                </div>
            </div>
            

            <div id="services" class="container-fluid text-center bg-grey slide">
                <div class="row slide">
                    <div class="col-sm-2">
                        <h2 class="display-4">3,000+</h2>
                        <p>CARS AVAILABLE RIGHT NOW</p>
                    </div>
                    <div class="col-sm-2">
                        <h2 class="display-4">400+</h2>
                        <p>MAKES AND MODELS</p>
                    </div>
                    <div class="col-sm-4">
                        <h2 class="display-4">250K</h2>
                        <p>HAPPY CUSTOMERS</p>
                    </div>
                    <div class="col-sm-2">
                        <h2 class="display-4">600+</h2>
                        <p>DEDICATED EMPLOYEES</p>
                    </div>
                    <div class="col-sm-2">
                        <h2 class="display-4">120</h2>
                        <p>ACRES OF VEHICLE RECONDITIONING</p>
                    </div>
                </div>
            </div>


        <div id="portfolio" class="container-fluid text-center slide">
            <h2>MEET THE TEAM</h2><br/>
            <div class="row text-center slide">
                <div class="col-sm-3">
                    <div class="thumbnail">
                        <img src={image2} width="400" height="300"/>
                        <p><strong>Paul Grey</strong></p>
                        <p>CHEIF EXECUTIVE OFFICER</p>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="thumbnail">
                        <img src={image2} width="400px" height="300px"/>
                        <p><strong>Patricia Moran</strong></p>
                        <p>CHEIF LEGAL OFFICER</p>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="thumbnail">
                        <img src={image2} width="400" height="300"/>
                        <p><strong>Diana Wills</strong></p>
                        <p>CHIEF CONVERSION OFFICER</p>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="thumbnail">
                        <img src={image2} width="400" height="300"/>
                        <p><strong>Diana Wills</strong></p>
                        <p>CHIEF CONVERSION OFFICER</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}


export default aboutus