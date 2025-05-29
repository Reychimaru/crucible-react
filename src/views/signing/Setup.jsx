import {useState} from "react";
import './Setup.css'

export function Setup() {
    const tags = [
        {name: 'animals', thumbnail: '/assets/images/tag-thumbnails/animals.jpg'},
        {name: 'anime', thumbnail: '/assets/images/tag-thumbnails/anime.jpg'},
        {name: 'architecture', thumbnail: '/assets/images/tag-thumbnails/architecture.jpg'},
        {name: 'art', thumbnail: '/assets/images/tag-thumbnails/art.jpg'},
        {name: 'comics', thumbnail: '/assets/images/tag-thumbnails/comics.jpg'},
        {name: 'crafts', thumbnail: '/assets/images/tag-thumbnails/crafts.jpg'},
        {name: 'design', thumbnail: '/assets/images/tag-thumbnails/design.jpg'},
        {name: 'education', thumbnail: '/assets/images/tag-thumbnails/education.jpg'},
        {name: 'fashion', thumbnail: '/assets/images/tag-thumbnails/fashion.jpg'},
        {name: 'film', thumbnail: '/assets/images/tag-thumbnails/film.jpg'},
        {name: 'folklore', thumbnail: '/assets/images/tag-thumbnails/folklore.jpg'},
        {name: 'food', thumbnail: '/assets/images/tag-thumbnails/food.jpg'},
        {name: 'gaming', thumbnail: '/assets/images/tag-thumbnails/gaming.jpg'},
        {name: 'history', thumbnail: '/assets/images/tag-thumbnails/history.jpg'},
        {name: 'illustration', thumbnail: '/assets/images/tag-thumbnails/illustration.jpg'},
        {name: 'literature', thumbnail: '/assets/images/tag-thumbnails/literature.jpg'},
        {name: 'manga', thumbnail: '/assets/images/tag-thumbnails/manga.jpg'},
        {name: 'memes', thumbnail: '/assets/images/tag-thumbnails/memes.jpg'},
        {name: 'music', thumbnail: '/assets/images/tag-thumbnails/music.jpg'},
        {name: 'mythology', thumbnail: '/assets/images/tag-thumbnails/mythology.jpg'},
        {name: 'nature', thumbnail: '/assets/images/tag-thumbnails/nature.jpg'},
        {name: 'photography', thumbnail: '/assets/images/tag-thumbnails/photography.jpg'},
        {name: 'philosophy', thumbnail: '/assets/images/tag-thumbnails/philosophy.jpg'},
        {name: 'psychology', thumbnail: '/assets/images/tag-thumbnails/psychology.jpg'},
        {name: 'science', thumbnail: '/assets/images/tag-thumbnails/science.jpg'},
        {name: 'sports', thumbnail: '/assets/images/tag-thumbnails/sports.jpg'},
        {name: 'technology', thumbnail: '/assets/images/tag-thumbnails/technology.jpg'},
        {name: 'travel', thumbnail: '/assets/images/tag-thumbnails/travel.jpg'},
        {name: 'tvshows', thumbnail: '/assets/images/tag-thumbnails/tvshows.jpg'},
        {name: 'wellness', thumbnail: '/assets/images/tag-thumbnails/wellness.jpg'}
    ];


    const [selectedTags, setSelectedTags] = useState([]);

    function toggleTag(name) {
        setSelectedTags(prev =>
            prev.includes(name)
                ? prev.filter(tag => tag !== name)
                : [...prev, name]
        );
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Qui puoi inviare selectedTags via fetch, axios, ecc.
        console.log("Tags selezionati:", selectedTags);
    }

    return (
        <div>
            <article className="container">
                <h3>Select your interests</h3>
                <p>
                    Select at least 3 interests, content with these tags will appear on your explore page.
                    You can change, discard or add more tags in your interests settings later.
                </p>
            </article>

            <form onSubmit={handleSubmit}>
                <article className="interestContainer">
                    <ul className="interestGrid">
                        {tags.map((tag, index) => (
                            <li className="interestList" key={index}>
                                <label style={{margin: 0, padding: 0, cursor: 'pointer'}}>
                                    <input
                                        type="checkbox"
                                        checked={selectedTags.includes(tag.name)}
                                        onChange={() => toggleTag(tag.name)}
                                        style={{display: 'none'}}
                                        name="interests"
                                        value={tag.name}
                                    />
                                    <img
                                        className={`interestThumbnail ${selectedTags.includes(tag.name) ? 'selected' : ''}`}
                                        src={tag.thumbnail}
                                        alt={tag.name}
                                    />
                                    <p className="interestTag">#{tag.name}</p>
                                    {selectedTags.includes(tag.name) && (
                                        <i className="interestCheck bi bi-heart"></i>
                                    )}
                                </label>
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="container">
                    <h3>Complete setup</h3>
                    <p>Once you're satisfied with your choices press the complete.</p>
                    <button className="buttonText" type="submit" disabled={selectedTags.length < 3}>
                        Complete
                    </button>
                </article>
            </form>
        </div>
    );
}