import React from 'react';
import styles from './MessageHeader.css';
import st from '../../css/simple.css';
import { Layout } from 'antd';

const { Header } = Layout;

function MessageHeader({text}) {
  return (
    <div className={styles.normal}>
      <Header className={st.ta_center}>{text}</Header>
    </div>
  );
}

export default MessageHeader;
