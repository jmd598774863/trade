import React from 'react';
import { connect } from 'dva';
import styles from './ListMessage.css';
import { Layout } from 'antd';
import MessageHeader from '../components/header/MessageHeader';
import MessageContent from '../components/content/MessageContent';
function ListMessage() {
  return (
    <div className={styles.normal}>
      <Layout>
        <MessageHeader text={'通告'} path={'/'} back={false}/>
        <MessageContent/>
      </Layout>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ListMessage);
