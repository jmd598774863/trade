import React from 'react';
import styles from './MessageContent.css';
import { Layout, Row, Col, Input, DatePicker, Button, Checkbox, Icon } from 'antd';
import st from '../../css/simple.css';
const b = ' ';
const { Content } = Layout;
const InputGroup = Input.Group;
 //屏幕宽高
const sheight = document.documentElement.clientHeight;
const swidth = document.documentElement.clientWidth;
function DetailMessageContent() {
  function checkAll(){

  }
  return (
    <div className={styles.normal}>
      <div className={st.hg_64}/>
      <Content style={{height:(sheight-114)}}>
        <Row>
          <Col span={6}></Col>
          <Col span={12}>
            <div className={st.ta_center+b+st.bg_white+b+st.hg_800}>
              通告详情
            </div>
          </Col>
          <Col span={6}></Col>
        </Row>
      </Content>
      <div className={st.hg_50}/>
    </div>
  );
}

export default DetailMessageContent;
