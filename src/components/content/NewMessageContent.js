import React from 'react';
import styles from './MessageContent.css';
import { Layout, Row, Col, Input, DatePicker, Button, Checkbox, Icon } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import st from '../../css/simple.css';
import MessageModal from '../modal/MessageModal'
const TextArea = Input.TextArea;
const b = ' ';
const { Content } = Layout;
const InputGroup = Input.Group;
 //屏幕宽高
const sheight = document.documentElement.clientHeight;
const swidth = document.documentElement.clientWidth;
function NewMessageContent({dispatch, recipients, theme, mainBody, newSuccess}) {
 const cc = { minRows: 9, maxRows: 6 };
  function recipientsChange(proxy){
    recipients = proxy.target.value;
    dispatch({
      type:'newMessage/recipients',
      payload:{recipients}
    });
  }
  function themeChange(proxy){
    theme = proxy.target.value;
    dispatch({
      type:'newMessage/theme',
      payload:{theme}
    });
  }
  function mainBodyChange(proxy){
    mainBody = proxy.target.value;//.replace(/\n/g,"<br/>").replace(/\s/g,"&nbsp;")
    console.log(mainBody);
    dispatch({
      type:'newMessage/mainBody',
      payload:{mainBody}
    });
  }
  function saveSuccess(){
    newSuccess = false;
    dispatch({
      type:'newMessage/newSuccess',
      payload:{newSuccess}
    });
  }
  return (
    <div className={styles.normal}>
      <div className={st.hg_64}/>
      <Content style={{height:(sheight-114)}}>
        <Row className={st.hg_60+b+st.pd_30_0}>
          <Col span={7} className={st.ta_right+b+st.pd_4_0+b+st.pd_r_10}>收件人</Col>
          <Col span={9}><Input onChange={recipientsChange} style={{width:(swidth/5*2)}} /></Col>
        </Row>
        <Row className={st.hg_60+b+st.pd_30_0}>
          <Col span={7} className={st.ta_right+b+st.pd_4_0+b+st.pd_r_10}>主题</Col>
          <Col span={9}><Input onChange={themeChange} style={{width:(swidth/5*2)}} /></Col>
        </Row>
        <Row className={st.pd_30_0}>
          <Col span={7} className={st.hg_60+b+st.ta_right+b+st.pd_4_0+b+st.pd_r_10}>正文</Col>
          <Col span={9} style={{width:(swidth/5*2)}}>
          <TextArea onChange={mainBodyChange} rows={10} />
          {
            //<textarea onChange={mainBodyChange} className={st.pd_5_10+b+st.ta_no_bd4+b+st.wd_full+b+st.hg_300+b+st.bd_s+b+st.bd_w_1+b+st.bd_c_grey1+b+st.bd_r_5}/>
          }
          </Col>
        </Row>
      </Content>
      <div className={st.hg_50}/>
      {
        newSuccess?<MessageModal text={'操作成功'} okfun={saveSuccess} clfun={saveSuccess}/>:''
      }
    </div>
  );
}
function mapStateToProps(state) {
  return {
    recipients : state.newMessage.recipients,
    theme : state.newMessage.theme,
    mainBody : state.newMessage.mainBody,
    newSuccess : state.newMessage.newSuccess,
  };
}
export default connect(mapStateToProps)(NewMessageContent);