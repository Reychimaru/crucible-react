import './ProfileCard.css'

export default function ProfileCard() {
    return (
            <article className="container">
                <section className="cardHeader">
                    <img className="cardCover" src="/assets/images/image2.jpg" alt="ProfileCard"/>
                    <img className="cardAvatar" src="/assets/images/image2.jpg" alt="ProfileCard"/>
                </section>

                <section className="cardFooter flexColumnStart">
                    <h2 className="nickname">
                        nickname
                    </h2>
                    <h2 className="username">
                        username
                    </h2>
                    <p>
                        bio
                    </p>
                    <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                        link
                    </a>

                    <div className="flexRow cardButtons">
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