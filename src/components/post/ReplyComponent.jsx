export default function renderComment({ reply }) {
    return (
        <div>
            <section className="commentHeader">
                <div className="flexRowSB">
                    <div className="flexRow">
                        <img className="avatar" src={reply.avatar} alt="avatar" />
                        <div className="flexColumnStart">
                            <h2 className="nickname">{reply.nickname}</h2>
                            <h2 className="username">@{reply.username}</h2>
                        </div>
                    </div>
                    <button className="buttonIcon">
                        <i className="bi bi-three-dots-vertical"></i>
                    </button>
                </div>
            </section>

            <section className="commentButtons flexRowStart">
                <div className="buttonStats flexRow">
                    <div className="flexRowStart">
                        <button className="buttonIcon">
                            <i className="bi bi-heart"></i>
                        </button>
                        <p className="flexColumn">{reply.likes?.length ?? 0}</p>
                    </div>
                </div>
            </section>

            <section className="commentFooter flexColumnStart">
                <p>{reply.description}</p>
                <p className="timestamp">Posted at {reply.createdAt}</p>
            </section>
        </div>
    )
}