import React, { useState, useContext, useContex } from 'react';
import {Card, makeStyles, TextField, Button } from "@material-ui/core";
import Post from './Post';
import { Context } from "./Context/GlobalContext";


function FavoritePosts() {
    const { posts, setPosts} = useContext(Context);
  
    return (
        <div className="app2">  
        <h1>Favorite posts</h1>
            {
                posts.map((post, index )=> {
                    return post.like ? <Post post={post} key={index}/> : null
                })
            }
        </div>
    )
}

export default FavoritePosts

