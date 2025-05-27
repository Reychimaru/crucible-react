import './Post.css';
import Carousel from "./Carousel";

export default function Post() {

    return (
        <div className="wrapper">
            <article className="container">

                <section className="postHeader">

                    <div className="flexRowSB">
                        <div className="flexRow">
                            <img className="avatar" src="/assets/images/image%20(2).jpg" alt="logo"/>
                            <div className="flexColumnStart">
                                <h2 className="nickname">nickname</h2>
                                <h2 className="username">@username</h2>
                            </div>
                        </div>
                        <button className="buttonIcon">
                            <i className="bi bi-three-dots-vertical"></i>
                        </button>
                    </div>

                    <h2 className="postTitle">
                        Ass
                    </h2>

                </section>

                <section className="postContent flexColumn">
                    <Carousel></Carousel>
                </section>

                <section className="postButtons flexRowSB">
                    <div className="buttonStats flexRow">
                        <div className="flexRowStart">
                            <button className="buttonIcon">
                                <i className="bi bi-heart"></i>
                            </button>
                            <p className="flexColumn">99k</p>
                        </div>

                        <div className="flexRowStart">
                            <button className="buttonIcon">
                                <i className="bi bi-chat-square-text"></i>
                            </button>
                            <p className="flexColumn">100k</p>
                        </div>

                        <div className="flexRowStart">
                            <button className="buttonIcon">
                                <i className="bi bi-repeat"></i>
                            </button>
                            <p className="flexColumn">1m</p>
                        </div>
                    </div>

                    <div className="flexRow">
                        <button className="buttonIcon">
                            <i className="bi bi-send"></i>
                        </button>
                        <button className="buttonIcon">
                            <i className="bi bi-bookmark"></i>
                        </button>
                    </div>
                </section>

                <section className="postFooter flexColumnStart">
                    <p>Description</p>
                    <ul className="tagList flexRowStart">
                        <li className="tag">#</li>
                    </ul>
                    <p>01 May 2025</p>
                </section>

            </article>
        </div>
    )
}