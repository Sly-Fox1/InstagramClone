import React, { useContext, useState } from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'
import { IconButton, makeStyles, Slider, withStyles, Tooltip, Button, Typography, TextField } from '@material-ui/core';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Context } from "./Context/GlobalContext";
import CloseIcon from '@material-ui/icons/Close';

function Post({ post }) {
    const { onLike, handleOpen, createComment, delitePost } = useContext(Context);
    const [commentInput, setCommentInput] = useState('')



    function savePosts(ev, currentPost) {
        ev.preventDefault()

        if (commentInput.trim()) {
            createComment(currentPost, commentInput)
            setCommentInput('')
        }


        const inputs = document.querySelectorAll(".post__footer-input")
        inputs.forEach(element => {
            element.querySelector("input").value = "";
        });
    }

    return (

        <div className="post" >

            <div className="post__header">
                <div className='text-wrap'>
                    <Avatar
                        className="post__avatar"
                        alt="sly_fox"
                        src={post.userAvatar}
                    />
                    <h3>{post.username}</h3>
                </div>
                <IconButton onClick={() => delitePost(post)} className="" arial-label="reqind">

                    <CloseIcon fontSize="inherit" />
                </IconButton>
            </div>

            <div onClick={() => handleOpen(post)}>
                <img className="post__image" src={post.imageUrl} />
            </div>

            <IconButton onClick={() => onLike(post)} arial-label="reqind" className='like-button'>
                {
                    post.like ?
                        <FavoriteIcon fontSize="inherit" /> :
                        <FavoriteBorderIcon fontSize="inherit" />
                }
            </IconButton>

            <h4 className="post__text"><strong>{post.username}</strong> {post.caption}</h4>

            <div className="post__comment-list">
                {
                    post.comment.map((item, index) => {
                        return <div className="post__comment-item" key={item.id}><span className="post__comment-user">{item.user}</span>{item.text}</div>
                    })
                }
            </div>



            <div className="post__footer">
                <TextField className="post__footer-input" onChange={ev => setCommentInput(ev.target.value)}
                    id="outlined-secondary"
                    label="Comment"
                    variant="outlined"
                    color="secondary"
                />
                <Button className="post__footer-btn" onClick={(ev) => savePosts(ev, post)} variant="outlined" color="primary">
                    Опубликовать
                </Button>
            </div>
        </div >

    )
}

export default Post
