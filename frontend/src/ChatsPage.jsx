import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import {Helmet} from 'react-helmet';


const ChatsPage = (props) => {

    return (
        <div style={{ height: '89vh' }}>
            <PrettyChatWindow
        projectId="d5386c79-1bc5-4e9f-a26d-df22e36d9e8d"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
    />
        </div>
    );
};

export default ChatsPage;
