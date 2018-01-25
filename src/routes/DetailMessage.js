import React from 'react';
import { connect } from 'dva';
import styles from './DetailMessage.css';
import { Layout } from 'antd';
import MessageHeader from '../components/header/MessageHeader';
import DetailMessageContent from '../components/content/DetailMessageContent';
import DetailMessageFooter from '../components/footer/DetailMessageFooter';
function DetailMessage() {
  return (
    <Layout>
        <MessageHeader text={'通告详情'} path={'/'} back={true}/>
        <DetailMessageContent/>
        <DetailMessageFooter/>
    </Layout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(DetailMessage);
