import React from 'react';
import styles from './MessageContent.css';
import { Layout, Row, Col, Input, DatePicker, Button, Checkbox, Icon } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import st from '../../css/simple.css';
import MessageModal from '../modal/MessageModal'
const b = ' ';
const { Content } = Layout;
const InputGroup = Input.Group;
 //屏幕宽高
const sheight = document.documentElement.clientHeight;
const swidth = document.documentElement.clientWidth;

function EditMessageContent({checkModal, warningText,dispatch, receiver, detailSubject, content,  newSuccess}) {

    function recipientsChange(proxy){
      receiver = proxy.target.value;
      dispatch({
        type:'detailMessage/receiver',
        payload:{receiver}
      });
    }
    function themeChange(proxy){
      detailSubject = proxy.target.value;
      dispatch({
        type:'detailMessage/detailSubject',
        payload:{detailSubject}
      });
    }
    function mainBodyChange(proxy){
      content = proxy.target.value;
      dispatch({
        type:'detailMessage/content',
        payload:{content}
      });
    }
    function saveSuccess(){
        newSuccess = false;
        dispatch({
        type:'detailMessage/newSuccess',
        payload:{newSuccess}
        });
    }
    function resultModal(){
      checkModal = false;
      dispatch({
        type:'newMessage/checkModal',
        payload:{checkModal}
      });
    }
  return (
    <div className={styles.normal}>
      <div className={st.hg_64}/>
      <Content style={{height:(sheight-114)}}>
        <Row className={st.hg_60+b+st.pd_30_0}>
          <Col span={7} className={st.ta_right+b+st.pd_4_0+b+st.pd_r_10}>收件人</Col>
          <Col span={9}><Input value={receiver} onChange={recipientsChange} style={{width:(swidth/5*2)}}/></Col>
        </Row>
        <Row className={st.hg_60+b+st.pd_30_0}>
          <Col span={7} className={st.ta_right+b+st.pd_4_0+b+st.pd_r_10}>主题</Col>
          <Col span={9}><Input value={detailSubject} onChange={themeChange} style={{width:(swidth/5*2)}} /></Col>
        </Row>
        <Row className={st.pd_30_0}>
          <Col span={7} className={st.hg_60+b+st.ta_right+b+st.pd_4_0+b+st.pd_r_10}>正文</Col>
          <Col span={9} style={{width:(swidth/5*2)}}>
            <textarea value={content} onChange={mainBodyChange} className={st.pd_5_10+b+st.ta_no_bd4+b+st.wd_full+b+st.hg_300+b+st.bd_s+b+st.bd_w_1+b+st.bd_c_grey1+b+st.bd_r_5}/>
          </Col>
        </Row>
      </Content>
      <div className={st.hg_50}/>
      {
        newSuccess?<MessageModal text={'操作成功'} okfun={saveSuccess} clfun={saveSuccess}/>:''
      }
      {
        checkModal?<MessageModal text={warningText} okfun={resultModal} clfun={resultModal}/>:''
      }
    </div>
  );
}
function mapStateToProps(state) {
  return {
    detailSubject: state.detailMessage.detailSubject,
    receiver:state.detailMessage.receiver,
    content:state.detailMessage.content,
    checkModal:state.newMessage.checkModal,
    warningText:state.newMessage.warningText,
  };
}
export default connect(mapStateToProps)(EditMessageContent);