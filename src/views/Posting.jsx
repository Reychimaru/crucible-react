import CarouselComponent from "../components/post/CarouselComponent";

export default function Posting() {

    const images = ["./assets/images/image2.jpg"]

    return (
        <article className="container">
            <h3>Panel Name</h3>
            <form className="flexColumnStart">

                <label htmlFor="title" className="flexRowSB">
                    <span>Title</span>
                    <span>Error</span>
                </label>
                <input type="text" name="title"/>

                {images.length < 1 && (
                    <>
                        <label htmlFor="media">Add media</label>
                        <div className="flexRowSB">
                            <button className="flexColumn">
                                <i className="bi bi-images"></i>
                                Add images
                            </button>
                            <button className="flexColumn">
                                <i className="bi bi-play-btn"></i>
                                Add video
                            </button>
                        </div>
                    </>
                )}

                {images.length > 0 && (
                    <>
                        <CarouselComponent content={images}/>
                    </>
                )}

                <label htmlFor="description">Description</label>
                <input type="text" name="description"/>

                <label htmlFor="tags">Add Tags</label>
                <div className="flexRowSB">
                    <input type="text"/>
                    <button className="buttonText">Add</button>
                </div>

                <label htmlFor="tags">Added tags</label>
                <div className="flexRowSB">
                </div>

                <button className="buttonText">Post</button>
            </form>
        </article>
    );
}
