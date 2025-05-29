import {useLocation, useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

import './PostComponent.css';
import CarouselComponent from "./CarouselComponent";
import CommentComponent from "./CommentComponent";

export default function PostComponent({post}) {

    const location = useLocation();
    const hiddenPaths = ['/login', '/register', '/recover'];

    return (
        <article className="container">

            <section className="postHeader">
                <div className="flexRowSB">
                    <Link to={`/user/${post.username}`} className="flexRow">
                        <img className="avatar" src={post.avatar} alt="avatar"/>
                        <div className="flexColumnStart">
                            <h2 className="nickname">{post.nickname}</h2>
                            <h2 className="username">@{post.username}</h2>
                        </div>
                    </Link>
                    <button className="buttonIcon">
                        <i className="bi bi-three-dots-vertical"></i>
                    </button>
                </div>
                <Link to={`/post/${post.postId}`}>
                    <h2 className="postTitle">{post.title}</h2>
                </Link>
            </section>

            <section className="postContent flexColumn">
                <CarouselComponent content={post.content}></CarouselComponent>
            </section>

            <section className="postButtons flexRowSB">
                <div className="buttonStats flexRow">
                    <div className="flexRowStart">
                        <button className="buttonIcon">
                            <i className="bi bi-heart"></i>
                        </button>
                        <p className="flexColumn">{post.likes.length}</p>
                    </div>
                    <div className="flexRowStart">
                        <button className="buttonIcon">
                            <i className="bi bi-chat-square-text"></i>
                        </button>
                        <p className="flexColumn">{post.comments.length}</p>
                    </div>
                    <div className="flexRowStart">
                        <button className="buttonIcon">
                            <i className="bi bi-repeat"></i>
                        </button>
                        <p className="flexColumn">{post.reposts.length}</p>
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
                <Link to={`/user/${post.postId}`} className="flexRow">
                <p className="description">{post.description}</p>
                </Link>
                <ul className="tagList flexRowStart">
                    {post.tags.map((tag, index) => (
                        <li className="tag" key={index}>
                            #{tag.name}
                        </li>
                    ))}
                </ul>
                <p className="timestamp">Posted at {post.createdAt}</p>
            </section>

            {location.pathname.startsWith('/post/') && (
                <>
                    <section className="commentCreator">
                        <form className="flexColumnStart" onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="comment">Comment</label>
                            <textarea name="comment" placeholder="Write a comment"></textarea>
                            <div className="flexRowEnd formButtons">
                                <div className="buttonTextNone">Cancel</div>
                                <div className="buttonTextNone">Cancel</div>
                                <button className="buttonText">Cancel</button>
                                <button className="buttonText">Comment</button>
                            </div>
                        </form>
                    </section>
                    <section className="postComments">
                        <ul>
                            {post.comments.map((comment, index) => (
                                <li key={index}>
                                    <CommentComponent comment={comment}/>
                                </li>
                            ))}
                        </ul>
                    </section>
                </>
            )}
        </article>
    )
}