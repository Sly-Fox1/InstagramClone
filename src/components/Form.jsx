import React, { useState, useContext } from 'react';
import './Form.css'
// import Context from './Context'

import { Context } from "./Context/GlobalContext";




function Form() {
    const [post, setPost] = useState({
        caption: "",
        imageUrl: "",
    })

    const { createPost } = useContext(Context);


    function savePost(ev) {
        ev.preventDefault()
        if (post.caption && post.imageUrl) {
            createPost(post)

            setPost({
                caption: "",
                imageUrl: "",
            });

            document.querySelector(".success-post").classList.add("show");
            document.querySelectorAll(".card__input").forEach(element => {
                element.value = "";
            });
        }
    }


    return (
        <div className='column'>
            <div className="colum__item">
                <img src="https://inbusiness.kz/uploads/66/images/IRrJWhxZ.jpg" />
            </div>
            <div className="colum__item card">
                <div className='success-post'>Пост успешно добавлен!</div>
                <form onSubmit={(ev) => savePost(ev)} className="card__form">
                    <div className="card__body">
                        <label className="card__label">Подпись</label>
                        <input onChange={ev => setPost({ ...post, caption: ev.target.value, })} className="card__input" type="text" />

                        <label className="card__label">Путь к картинке</label>
                        <input onChange={ev => setPost({ ...post, imageUrl: ev.target.value, })} className="card__input" type="text" />
                    </div>
                    <div className="card__footer">
                        <button type="submit" className="card__btn btn-primary">Опубликовать</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form

