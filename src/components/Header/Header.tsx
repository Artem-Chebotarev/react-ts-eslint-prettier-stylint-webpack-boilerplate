import React, {FC} from 'react';

export const Header: FC = () => {
    return (
        <>
            <h1>Header1!</h1>
            {new Date().toLocaleDateString()}
        </>
    );
};
