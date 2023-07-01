import React from 'react';
import ReactDOM from 'react-dom/client';
import OasisMenuProvider from 'oasismenu';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import "./styles/index.css";
import "oasismenu/themes/space.css";
import { tippy } from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import App from './App';
import DialogerWrap from './Dialoger/DialogerWrap';


tippy.setDefaultProps({
    arrow: false,
    animation: "shift-away",
    delay: [200, 0],
    theme: 'tippy-theme',
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <OasisMenuProvider theme="space" toggle trigger="click">
                <DialogerWrap>
                    <App />
                </DialogerWrap>
            </OasisMenuProvider>
            <Toaster position="bottom-center" containerStyle={{ top: 76, bottom: 116 }} />
        </BrowserRouter>
    </React.StrictMode>
);
