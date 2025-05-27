import './Post.css';

export default function Post() {
    return (
        <div className="wrapper">
            <article className="container">

                <section className="postHeader flexRowSB">
                    <div className="flexRow">
                        <img className="avatar" src="/logo192.png" alt="logo"/>
                        <div className="flexColumnStart">
                            <h2 className="nickname">nickname</h2>
                            <h2 className="username">@username</h2>
                        </div>
                    </div>
                    <button className="buttonIcon">
                        <i className="bi bi-three-dots-vertical"></i>
                    </button>
                </section>

                <section className="flexColumn">
                    <img src="/logo192.png" alt="logo"/>
                </section>

                <section className="flexRowSB">
                    <div className="flexRow">
                        <div className="flexRowStart">
                            <button className="buttonIcon">
                                <i className="bi bi-hand-thumbs-up"></i>
                            </button>
                            <p>1</p>
                        </div>

                        <div className="flexRowStart">
                            <button className="buttonIcon">
                                <i className="bi bi-chat-square-text"></i>
                            </button>
                            <p>1</p>
                        </div>

                        <div className="flexRowStart">
                            <button className="buttonIcon">
                                <i className="bi bi-repeat"></i>
                            </button>
                            <p>1</p>
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

                <section>
                    <p>Description</p>
                    <ul className="flexRowStart">
                        <li>tag</li>
                        <li>tag</li>
                        <li>tag</li>
                        <li>tag</li>
                    </ul>
                    <p>01 May 2025</p>
                </section>

            </article>
        </div>
    )
}