import { useState } from 'react';
import './CommentComponent.css';
import ReplyComponent from './ReplyComponent.jsx'

export default function CommentComponent({ comment }) {

    const [showReply, setShowReply] = useState(false);

    return (
        <div>
            <section className="commentHeader">
                <div className="flexRowSB">
                    <div className="flexRow">
                        <img className="avatar" src={comment.avatar} alt="avatar" />
                        <div className="flexColumnStart">
                            <h2 className="nickname">{comment.nickname}</h2>
                            <h2 className="username">@{comment.username}</h2>
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
                        <p className="flexColumn">{comment.likes?.length ?? 0}</p>
                    </div>

                    <div className="flexRowStart">
                        <button className="buttonIcon" onClick={() => setShowReply(!showReply)}>
                            <i className="bi bi-chat-square-quote"></i>
                        </button>
                        <p className="flexColumn">{comment.replies?.length ?? 0}</p>
                    </div>
                </div>
            </section>

            <section className="commentFooter flexColumnStart">
                <p>{comment.description}</p>
                <p className="timestamp">Posted at {comment.createdAt}</p>
            </section>

            {showReply && (
            <section>
                <form className="flexColumnStart" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="comment">Replying to @{ comment.username }</label>
                    <textarea name="comment"></textarea>
                    <div className="flexRowEnd">
                        <button type="button" className="buttonText" onClick={() => setShowReply(false)}>
                            Cancel
                        </button>
                        <button className="buttonText" onClick={() => setShowReply(false)}>Reply</button>
                    </div>
                </form>
            </section>
            )}

            <section>
                <ul>
                    {comment.replies.map((reply, index) => (
                        <li key={index}>
                            <ReplyComponent reply={reply} />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
