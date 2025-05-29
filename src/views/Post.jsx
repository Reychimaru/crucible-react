import PostComponent from "../components/post/PostComponent";

export default function Post() {

    const posts = [
        {
            postId: 777,
            username: "reychimaru",
            nickname: "The Necromancer",
            avatar: "./assets/images/image1.jpg",
            title: "Lorem ipsum dolor sit amet",
            content: [
                "./assets/images/image1.jpg",
                "./assets/images/image2.jpg",
                "./assets/images/image3.jpg"
            ],
            description: "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.",
            tags: [
                {
                    name: "anime",
                    color: ""
                },
                {
                    name: "manga",
                    color: ""
                },
                {
                    name: "fantasy",
                    color: ""
                },
                {
                    name: "sci-fi",
                    color: ""
                },
                {
                    name: "berserk",
                    color: ""
                },
            ],
            createdAt: "27 May 2025",
            likes: [
                {
                    username: "reychimaru",
                    nickname: "The Necromancer",
                    avatar: "./assets/images/image1.jpg",
                    likedAt: "27 May 2025",
                },
                {
                    username: "reychimaru",
                    nickname: "The Necromancer",
                    avatar: "./assets/images/image1.jpg",
                    likedAt: "27 May 2025",
                },
                {
                    username: "reychimaru",
                    nickname: "The Necromancer",
                    avatar: "./assets/images/image1.jpg",
                    likedAt: "27 May 2025",
                },
            ],
            comments: [
                {
                    username: "reychimaru",
                    nickname: "The Necromancer",
                    avatar: "./assets/images/image1.jpg",
                    description: "Lorem ipsum dolor sit amet",
                    createdAt: "27 May 2025",
                    likes: [
                        {
                            username: "reychimaru",
                            nickname: "The Necromancer",
                            avatar: "./assets/images/image1.jpg",
                            likedAt: "27 May 2025",
                        },
                        {
                            username: "reychimaru",
                            nickname: "The Necromancer",
                            avatar: "./assets/images/image1.jpg",
                            likedAt: "27 May 2025",
                        },
                        {
                            username: "reychimaru",
                            nickname: "The Necromancer",
                            avatar: "./assets/images/image1.jpg",
                            likedAt: "27 May 2025",
                        },
                    ],
                    replies: [
                        {
                            username: "reychimaru",
                            nickname: "The Necromancer",
                            avatar: "./assets/images/image1.jpg",
                            description: "Lorem ipsum dolor sit amet",
                            createdAt: "27 May 2025",
                        },
                    ]
                },
            ],
            reposts: [],
        },
    ]

    return (
        <ul>
            {posts.map((post, index) => (
                <li key={index}>
                    <PostComponent post={post}/>
                </li>
            ))}
        </ul>
    );
}