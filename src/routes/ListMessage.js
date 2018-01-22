import React from 'react';
import { connect } from 'dva';
import styles from './ListMessage.css';
import { Layout } from 'antd';
import MessageHeader from '../components/header/MessageHeader';
function ListMessage() {
  return (
    <div className={styles.normal}>
      <Layout>
        <MessageHeader text={'通告'} />
      </Layout>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ListMessage);
