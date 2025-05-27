import './PostComponent.css';
import CarouselComponent from "./CarouselComponent";

export default function PostComponent({ post }) {

    return (
            <article className="container">

                <section className="postHeader">

                    <div className="flexRowSB">
                        <div className="flexRow">
                            <img className="avatar" src={post.avatar} alt="avatar"/>
                            <div className="flexColumnStart">
                                <h2 className="nickname">{ post.nickname }</h2>
                                <h2 className="username">@{ post.username }</h2>
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
                    <CarouselComponent content={ post.content }></CarouselComponent>
                </section>

                <section className="postButtons flexRowSB">
                    <div className="buttonStats flexRow">
                        <div className="flexRowStart">
                            <button className="buttonIcon">
                                <i className="bi bi-heart"></i>
                            </button>
                            <p className="flexColumn">{ post.likes.length }</p>
                        </div>

                        <div className="flexRowStart">
                            <button className="buttonIcon">
                                <i className="bi bi-chat-square-text"></i>
                            </button>
                            <p className="flexColumn">{ post.comments.length }</p>
                        </div>

                        <div className="flexRowStart">
                            <button className="buttonIcon">
                                <i className="bi bi-repeat"></i>
                            </button>
                            <p className="flexColumn">{ post.reposts.length }</p>
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
                        {post.tags.map((tag, index) => (
                            <li className="tag" key={index}>#{tag.name}</li>
                        ))}
                    </ul>
                    <p>{ post.createdAt }</p>
                </section>

            </article>
    )
}