import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Context = React.createContext({});

const Provider = Context.Provider;
const Consumer = Context.Consumer;


const GlobalContext = ({ children }) => {
    const [posts, setPosts] = useState([
        {
            id: "8137",
            username: "sly_fox",
            userAvatar: 'https://oir.mobi/uploads/posts/2022-08/1661298557_1-oir-mobi-p-milii-lisenok-art-instagram-1.jpg',
            caption: "Нет ничего более вдохновляющего, чем ощущение свободы, когда ты на вершине горы, окруженный нескончаемыми просторами и зелеными лугами.",
            imageUrl: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
            like: true,
            comment: [
                {
                    id: 1,
                    user: 'di1234',
                    text: 'Какая красивая фотография! Ставлю лайк)'
                }
            ],
        },
        {
            id: "1312",
            username: "sly_fox",
            userAvatar: 'https://oir.mobi/uploads/posts/2022-08/1661298557_1-oir-mobi-p-milii-lisenok-art-instagram-1.jpg',
            caption: "Погружение в романтический закат с прекрасным деревом в переднем плане - это идеальный способ отдохнуть от рутины и насладиться красотой природы. Не существует лучшего места, чем это, чтобы подумать о жизни и насладиться моментом в полной мере.",
            imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            like: false,
            comment: [],
        },
        {
            id: "6365",
            username: "sly_fox",
            userAvatar: 'https://oir.mobi/uploads/posts/2022-08/1661298557_1-oir-mobi-p-milii-lisenok-art-instagram-1.jpg',
            caption: "Красивая лисичка, сидящая на зеленой поляне среди цветущих цветов. Ее ярко-рыжая шерсть сияет на солнце, а глаза умные и проницательные.",
            imageUrl: "https://oir.mobi/uploads/posts/2022-08/1661298557_1-oir-mobi-p-milii-lisenok-art-instagram-1.jpg",
            like: false,
            comment: [],
        }
    ]);

    const getPost = useCallback(async () => {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        return posts;
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const post = await getPost();
            setPosts(post);
        };
        fetchData();
    }, [getPost]);


    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
        getPost();
    }, [posts, getPost])



    function createComment(selectedPost, text) {

        const users = ['diana', 'lesha', 'karina', 'marta', 'igor', 'vanya'];
        const randomUser = users[Math.floor(Math.random() * users.length)];


        const newCommnet = {
            id: uuidv4(),
            text: text,
            user: randomUser,
        }

        const prevState = [...posts]


        prevState.forEach(post => {
            return selectedPost === post ? post.comment = [...post.comment, newCommnet] : null
        })
        setPosts([...prevState])
    };



    function delitePost(post) {
        const confirmed = window.confirm("Вы действительно хотите удалить этот элемент?");
        if (confirmed) {
            setPosts(posts.filter(item => item !== post))
        }
    }

    function createPost(post) {
        const newPost = {
            username: "sly_fox",
            caption: post.caption,
            imageUrl: post.imageUrl,
            userAvatar: 'https://oir.mobi/uploads/posts/2022-08/1661298557_1-oir-mobi-p-milii-lisenok-art-instagram-1.jpg',
            like: false,
            comment: [],
        }
        setPosts([...posts, newPost])
    }

    const onLike = (selectedPost) => {


        const prevState = [...posts]
        prevState.forEach(post => {
            return selectedPost === post ? post.like = !post.like : null
        })
        setPosts([...prevState])
    };

    const [currentPost, seTcurrentPost] = useState()
    const [open, setOpen] = useState(false);

    const handleOpen = (post) => {
        seTcurrentPost(post)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const state = {
        posts,
        setPosts,
        createPost,
        onLike,
        open, setOpen, handleOpen, handleClose,
        currentPost, seTcurrentPost,
        createComment,
        delitePost,
    }

    return (
        <Provider value={state}>
            {children}
        </Provider>
    );
};

export default GlobalContext;