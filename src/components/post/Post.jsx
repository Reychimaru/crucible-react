import './Post.css';
import Carousel from "./Carousel";

export default function Post() {

    const tags = [
        "manga", "anime", "berserk"
    ]

    return (
        <div className="wrapper">
            <article className="container">

                <section className="postHeader">

                    <div className="flexRowSB">
                        <div className="flexRow">
                            <img className="avatar" src="/assets/images/image2.jpg" alt="logo"/>
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
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
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
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.</p>
                    <ul className="tagList flexRowStart">
                        {tags.map((tag, index) => (
                            <li className="tag" key={index}>#{tag}</li>
                        ))}
                    </ul>
                    <p>01 May 2025</p>
                </section>

            </article>
        </div>
    )
}