import React from 'react';
import { connect } from 'dva';
import styles from './NewMessage.css';
import { Layout } from 'antd';
import MessageHeader from '../components/header/MessageHeader';
import NewMessageContent from '../components/content/NewMessageContent';
import NewMessageFooter from '../components/footer/NewMessageFooter';
function NewMessage() {
  return (
    <Layout>
        <MessageHeader text={'新建通告'} path={'/'} back={true}/>
        <NewMessageContent/>
        <NewMessageFooter/>
    </Layout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(NewMessage);
