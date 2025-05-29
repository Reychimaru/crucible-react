import './ProfileCard.css'
import {Link} from "react-router-dom";

export default function ProfileCard() {

    const profileOwner = true

    return (
        <article className="cardContainer">
            <section className="cardHeader">
                <div className="cardCover">
                    <img src="/assets/images/image2.jpg" alt="ProfileCard"/>
                </div>
    <div className="cardAvatar">
        <img src="/assets/images/image2.jpg" alt="ProfileCard"/>
    </div>

                <div className="flexRow cardHeaderButtons">
                    <div className="buttonTextNone"></div>
                    <div className="buttonTextNone"></div>
                    {profileOwner ? (
                        <Link to="/personalize" className="buttonText">
                            Personalize
                        </Link>
                    ) : (
                        <button className="buttonText">
                            Follow
                        </button>
                    )}
                </div>
            </section>

            <section className="cardFooter flexColumnStart">
                <h2 className="cardNickname">
                    nickname
                </h2>
                <h2 className="username">
                    username
                </h2>
                <p className="bio">
                    bio
                </p>
                <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                    link
                </a>

                <div className="flexRow cardFooterButtons">
                    <button className="buttonText">
                        Posts
                    </button>
                    <button className="buttonText">
                        Highlights
                    </button>
                    <button className="buttonText">
                        Contents
                    </button>
                </div>
            </section>
        </article>
    )
}