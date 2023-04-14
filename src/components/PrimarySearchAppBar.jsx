import React from 'react';
import { AppBar, IconButton } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostAddIcon from '@material-ui/icons/PostAdd';

function PrimarySearchAppBar() {

    return (
        <div className="">
            <AppBar position="static">
                <Toolbar className="app__header">
                    <Link to="/">
                        <Typography className='' variant="h6" noWrap>
                            <img
                                className="app__headerImage"
                                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                                alt=""
                            />
                        </Typography>
                    </Link>
                    <div>
                        <Link to="/favorite-post">
                            <IconButton arial-label="reqind">
                                <FavoriteIcon />
                            </IconButton>
                        </Link>
                        <Link to="/add-post">
                            <IconButton arial-label="reqind">
                                <PostAddIcon />
                            </IconButton>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default PrimarySearchAppBar