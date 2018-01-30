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
function NewMessageContent() {
  function checkAll(){

  }
  return (
    <div className={styles.normal}>
      <Content>
        <Row style={{height:((sheight/2)-100)}}>
          33dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </Row>
        <Row className={st.hg_60+b+st.pd_30_0}>
          <Col span={5} className={st.ta_right+b+st.pd_4_0+b+st.pd_r_10}>主题</Col>
          <Col span={9}><Input style={{width:(swidth/5*2)}} /></Col>
        </Row>
        <Row className={st.hg_60+b+st.pd_30_0}>
          <Col span={7} className={st.ta_right+b+st.pd_4_0+b+st.pd_r_10}>正文</Col>
          <Col span={9} style={{width:(swidth/5*2)}}><Input className={st.ta_no_bd} type="textarea" autosize={{ minRows: 20, maxRows: 25 }} /></Col>
        </Row>
      </Content>
    </div>
  );
}

export default NewMessageContent;