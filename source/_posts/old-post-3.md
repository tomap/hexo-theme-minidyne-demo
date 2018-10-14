---
title: old post 3
date: 2003-03-03
---
First test post

···jsx
import React from "react";
import ReactDOM from "react-dom";

let el = (
    <div>
        <h1>hello</h1>
        <label htmlFor="username">username</label>
        <input type="text" id="username"/>
    </div>
);

ReactDOM.render(el, window.root);
···
