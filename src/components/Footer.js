import React from 'react'
import {FacebookShareButton,
        FacebookIcon,
        TwitterShareButton,
        TwitterIcon,
        RedditShareButton,
        RedditIcon,
        LinkedinShareButton,
        LinkedinIcon,
        FacebookMessengerShareButton

        } from "react-share";

const Footer = () => {
    return (
        <div className="footer" >
            <div className="container">
                <div className="">{/*used to be a row*/}
                    {/*<div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Glen Ellyn, Illinois</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:708-205-4923">+1(708) 205-4923</a>
                        </div>
                        <div className="d-flex">
                            <p>Farissamine99@gmail.com</p>
                        </div>
                    </div>/*}
                    {/*<div className="col-lg-3 col-md-2 col-sm-6">
                        <div className ="row">
                            <div className="col">
                                <a className = "footer-nav">Home</a>
                                <br />
                                <a className = "footer-nav">About me</a>
                                <br />
                                <a className = "footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className = "footer-nav">Experience</a>
                                <br />
                                <a className = "footer-nav">Projects</a>
                                {/*<a className = "footer-nav">Interests</a>*/}
                                {/*<br />
                                <a className = "footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>*/}
                    <div className="align-items-center"> {/*col-lg-5 col-md-5 col-sm-6 */}
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={""}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                                >
                                
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={""}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                                >
                                
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <RedditShareButton
                                url={""}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                                >
                                
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                            <LinkedinShareButton
                                url={""}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                                >
                                
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-4 text-center footer-name">
                            AMINE ABOUFARISS&nbsp;
                            <span className = "footer-pink">
                            ©{new Date().getFullYear()}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
