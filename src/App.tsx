import React, {FC} from 'react';
import './App.scss';
import {Header} from './components/Header/Header';

export const App: FC = () => {
    return (
        <>
            <h1>Hello!</h1>
            <Header />
        </>
    );
};
