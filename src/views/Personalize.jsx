import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Personalize() {
    const avatarInputRef = useRef(null);
    const coverInputRef = useRef(null);

    // Dati utente originali
    const user = {
        username: "reychimaru",
        nickname: "The Necromancer",
        bio: "Lorem ipsum dolor",
        website: "reychimaru.com",
        avatar: "/assets/images/image1.jpg",
        cover: "/assets/images/image2.jpg",
    };

    // Stati iniziali
    const [avatar, setAvatar] = useState(user.avatar);
    const [cover, setCover] = useState(user.cover);
    const [avatarPreview, setAvatarPreview] = useState("");
    const [coverPreview, setCoverPreview] = useState("");
    const [nickname, setNickname] = useState(user.nickname);
    const [bio, setBio] = useState(user.bio);
    const [website, setWebsite] = useState(user.website);

    const handleAvatarClick = () => avatarInputRef.current.click();
    const handleCoverClick = () => coverInputRef.current.click();

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewURL = URL.createObjectURL(file);
            setAvatarPreview(previewURL);
            setAvatar(previewURL);
        }
    };

    const handleCoverChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewURL = URL.createObjectURL(file);
            setCoverPreview(previewURL);
            setCover(previewURL);
        }
    };

    const handleDiscardAvatar = () => {
        setAvatarPreview("");
        setAvatar("");
        if (avatarInputRef.current) avatarInputRef.current.value = "";
    };

    const handleDiscardCover = () => {
        setCoverPreview("");
        setCover("");
        if (coverInputRef.current) coverInputRef.current.value = "";
    };

    const handleCancel = () => {
        setAvatar(user.avatar);
        setCover(user.cover);
        setAvatarPreview("");
        setCoverPreview("");
        setNickname(user.nickname);
        setBio(user.bio);
        setWebsite(user.website);

        // Resetta i file input
        if (avatarInputRef.current) avatarInputRef.current.value = "";
        if (coverInputRef.current) coverInputRef.current.value = "";
    };

    return (
        <>
            <article className="cardContainer">
                <section className="cardHeader">
                    {cover ? (
                        <div className="cardCover">
                            <img src={cover} alt="Profile cover" />
                            <button
                                type="button"
                                className="flexColumn discardCoverButton"
                                onClick={handleDiscardCover}
                            >
                                <i className="bi bi-trash"></i>
                            </button>
                        </div>
                    ) : (
                        <button type="button" className="flexColumn addCoverButton" onClick={handleCoverClick}>
                            <i className="bi bi-image-fill"></i>
                            <p>Upload cover</p>
                        </button>
                    )}

                    {avatar ? (
                        <div className="cardAvatar">
                            <img src={avatar} alt="Profile avatar" />
                            <button
                                type="button"
                                className="flexColumn discardAvatarButton"
                                onClick={handleDiscardAvatar}
                            >
                                <i className="bi bi-trash"></i>
                            </button>
                        </div>
                    ) : (
                        <button
                            type="button"
                            className="flexColumn addAvatarButton"
                            onClick={handleAvatarClick}
                        >
                            <i className="bi bi-image-fill"></i>
                            <p>Upload</p>
                            <p>Avatar</p>
                        </button>
                    )}
                </section>

                <section className="cardFooter flexColumnStart">
                    <h2 className="cardNickname">{nickname.trim() === "" ? user.username : nickname}</h2>
                    <h2 className="username">@{user.username}</h2>
                    <p className="bio">{bio}</p>
                    <a
                        href={`https://${website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {website}
                    </a>
                </section>
            </article>

            <article className="container">
                <h3>Profile infos</h3>
                <form className="flexColumn" onSubmit={(e) => e.preventDefault()}>
                    <input
                        ref={coverInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleCoverChange}
                    />
                    <input
                        ref={avatarInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAvatarChange}
                    />

                    <label htmlFor="nickname">Nickname</label>
                    <input
                        id="nickname"
                        name="nickname"
                        type="text"
                        placeholder="Enter your nickname"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />

                    <label htmlFor="bio">Bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        placeholder="Enter your bio"
                        value={bio}
                        maxLength="125"
                        onChange={(e) => setBio(e.target.value)}
                    />

                    <label htmlFor="website">Website</label>
                    <input
                        id="website"
                        name="website"
                        type="text"
                        placeholder="Enter your website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />

                    <div className="flexRow buttonContainer">
                        <div className="buttonTextNone"></div>
                        <div className="buttonTextNone"></div>
                        <button type="button" className="buttonText" onClick={handleCancel}>
                            Cancel
                        </button>
                        <button type="submit" className="buttonText">
                            Apply
                        </button>
                    </div>
                </form>
            </article>
        </>
    );
}
