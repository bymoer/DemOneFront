import React from 'react';
import { createRoot } from 'react-dom/client';
// import './css/main.scss';
// import 'bootstrap';

createRoot(document.getElementById("main") || document.createElement("div"))
.render(
    <>
        <div>Hello World!</div>
        <p>This is a message from the illustrious frontend part of the app.....</p>
    </>
);
