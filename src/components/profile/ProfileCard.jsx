import './ProfileCard.css'

export default function ProfileCard() {
    return (
        <div className="wrapper">
            <article className="container">
                <section className="cardHeader">
                    <img className="cardCover" src="/assets/images/image2.jpg" alt="ProfileCard"/>
                    <img className="cardAvatar" src="/assets/images/image2.jpg" alt="ProfileCard"/>
                </section>

                <section className="cardFooter flexColumnStart">
                    <h2>
                        nickname
                    </h2>
                    <h2>
                        username
                    </h2>
                    <p>
                        bio
                    </p>
                    <a>
                        link
                    </a>
                </section>

                <section className="cardButtons">
                    <button className="buttonText flexRowSB">
                        Posts
                    </button>
                    <button className="buttonText">
                        Posts
                    </button>
                    <button className="buttonText">
                        Posts
                    </button>
                </section>
            </article>
        </div>
    )
}