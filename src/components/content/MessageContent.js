import React from 'react';
import styles from './MessageContent.css';
import { Layout, Row, Col, Input, DatePicker,Button } from 'antd';
import st from '../../css/simple.css';
const b = ' ';
const { Content } = Layout;
const InputGroup = Input.Group;
function MessageContent() {
  return (
    <div className={styles.normal}>
      <Content className={st.bg_white}>
        <Row>
          <InputGroup size="large">
            <Col span={4}><Input addonBefore='主题：' className={st.cl_red}/></Col>
            <Col span={4}><DatePicker placeholder='日期：'  className={st.cl_red}/></Col>
            <Col span={16} className={st.ta_right}><Button type="primary">查询2</Button></Col>
          </InputGroup>
        </Row>
      </Content>
    </div>
  );
}

export default MessageContent;
