import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import {Helmet} from 'react-helmet';


const ChatsPage = (props) => {

    return (
        <div style={{ height: '89vh' }}>
            <PrettyChatWindow
        projectId="eddee0ec-ba1a-452f-9cac-9c0291f12ec9"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
    />
        </div>
    );
};

export default ChatsPage;
