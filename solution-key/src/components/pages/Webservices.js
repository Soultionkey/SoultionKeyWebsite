import React, { Component } from 'react';
import Footer from './Footer';
import Spinner from './Spinner';
import './WebServices.css';
class Webservices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstCardData: [],
            secondeCardData: [],
            thirdCardData: [],
            fourthCardData: [],
            loading: true
        };
    }
    componentDidMount() {
        let firstCard = "http://localhost/wordpress/wp-json/wp/v2/posts/27";
        fetch(firstCard)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    firstCardData: response.content.rendered
                })
            }).catch(function () {
                console.log("something goes wrong")
            });
        let secondeCard = "http://localhost/wordpress/wp-json/wp/v2/posts/68";
        fetch(secondeCard)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    secondeCardData: response.content.rendered
                })
            }).catch(function () {
                console.log("something goes wrong")
            });

        let thirdCard = "http://localhost/wordpress/wp-json/wp/v2/posts/94";
        fetch(thirdCard)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    thirdCardData: response.content.rendered
                })
            }).catch(function () {
                console.log("something goes wrong")
            });

        let fourthCard = "http://localhost/wordpress/wp-json/wp/v2/posts/96";
        fetch(fourthCard)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    fourthCardData: response.content.rendered
                })
            }).catch(function () {
                console.log("something goes wrong")
            });

        // setTimeout(() => {
        //     this.setState({ loading: false })
        // }, 2000)
    }

    render() {
        let Card1 = this.state.firstCardData;
        let Card2 = this.state.secondeCardData;
        let Card3 = this.state.thirdCardData;
        let Card4 = this.state.fourthCardData;


        return (
            <div>
                <div className="web-pricing-container">
                    <div className="container-text">
                        <h4>Services</h4>
                        <h6>Soultion Key > <span className="container-span-text">Web Development </span></h6>
                    </div>
                </div>
                <h1 className="pricing-text"><strong>Web Services Pricing </strong></h1>
                <hr className="web-spirating-line" />

                    <div className="web-pricing-row">
                        <div className="web-pricing-column">
                            <div className="web-pricing-card " style={{ backgroundColor: '#CD7F32' }}>
                                <h3>BRONZE<br /><span>$1000</span> </h3><hr />
                                <p dangerouslySetInnerHTML={{ __html: Card1 }} ></p>
                            </div>
                        </div>

                        <div className="web-pricing-column ">
                            <div className="web-pricing-card " style={{ backgroundColor: 'silver' }}>
                                <h3>SILVER<br /><span>$2500</span></h3><hr />
                                <p dangerouslySetInnerHTML={{ __html: Card2 }} ></p>
                            </div>
                        </div>

                        <div className="web-pricing-column">
                            <div className="web-pricing-card" style={{ backgroundColor: 'goldenrod' }}>
                                <h3>GOLD<br /><span>$8,000</span></h3><hr />
                                <p dangerouslySetInnerHTML={{ __html: Card3 }} ></p>
                            </div>
                        </div>

                        <div className="web-pricing-column">
                            <div className="web-pricing-card" style={{ backgroundColor: '#E5E4E2' }}>
                                <h3>PLATINUM<br /><span>$25,000+</span></h3><hr />
                                <p dangerouslySetInnerHTML={{ __html: Card4 }} ></p>
                            </div>
                        </div>
                    </div>
                
                <div id="footer"><Footer /></div>
            </div>
        );
    }
}

export default Webservices;