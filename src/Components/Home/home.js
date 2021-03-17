import image1 from '../../assets/img1.jpg'
import image2 from '../../assets/img2.jpg'
import { Col, Row, Container } from 'react-bootstrap'
import { useHistory } from "react-router-dom";


const Home = (props) => {

    let history = useHistory()

    const auth = () =>{
        history.push("/services")
    }

    return (
        <>
            <header>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">

                        <div class="carousel-item active" style={{ backgroundImage: "url("+image1+")" }}>
                            <div class="carousel-caption d-none d-md-block">
                                <h3 class="display-4">The cars we drive say a lot about us.....</h3>
                            </div>
                        </div>

                        <div class="carousel-item" style={{ backgroundImage: "url("+image2+")" }}>
                            <div class="carousel-caption d-none d-md-block">
                                <h3 class="display-4">Drop a gear & disappear..</h3>
                            </div>
                        </div>

                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </header>

            <div class="slide">
                <Container>
                <hr class="featurette-divider"/>
                    <Row>
                        <Col>
                            <h4 class="display-2 mt-4">
                                WELCOME ! <br />
                                LET'S POST YOUR <br />
                                ADD HERE
                            </h4>
                        </Col>
                        <Col>
                            <div class="d-grid gap-2 col-6 mx-auto mt-5 mb-5">
                                <button data-micron="jerk" class="button" onClick={auth}>Publish Your Add here</button>
                            </div>
                        </Col>
                    </Row>
                    <hr class="featurette-divider"/>
                </Container>
            </div>
        </>
    )
}

export default Home