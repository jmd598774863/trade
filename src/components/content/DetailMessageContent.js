import React from 'react';
import styles from './MessageContent.css';
import { Layout, Row, Col, Input, DatePicker, Button, Checkbox, Icon } from 'antd';
import st from '../../css/simple.css';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import MessageModal from '../modal/MessageModal';
const b = ' ';
const { Content } = Layout;
const InputGroup = Input.Group;
const TextArea = Input.TextArea;
 //屏幕宽高
const sheight = document.documentElement.clientHeight;
const swidth = document.documentElement.clientWidth;
function DetailMessageContent({dispatch,detailSubject, createTime,receiver,content,sendMessage,checkModal,warningText}) {
  function mailSuccess(){
    sendMessage = false;
    dispatch({
      type:'detailMessage/sendMessage',
      payload:{sendMessage}
    });
  }
  function mouseOver(){
    return false;
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
      <div className={st.hg_100}/>
      <Content>
        <Row>
          <Col span={6}></Col>
          <Col span={10}>
            <div className={st.ta_left+b+st.bg_white+b+st.hg_50+b+st.pd_20}>
              <b>{detailSubject}</b>
            </div>
          </Col>
          <Col span={2}>
            <div className={st.ta_right+b+st.bg_white+b+st.hg_50+b+st.pd_20} style={{fontSize:13}}>
              {createTime}
            </div>
          </Col>
          <Col span={6}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={2}>
            <div className={st.ta_left+b+st.bg_white+b+st.hg_40+b+st.pd_l_20}>
            <b>收件人：</b>
            </div>
          </Col>
          <Col span={10}>
            <div className={st.ta_left+b+st.bg_white+b+st.hg_40+b+st.cl_grey3} style={{fontSize:13}}>
              {receiver}
            </div>
          </Col>
          <Col span={6}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={12}>
            <div className={st.ta_center+b+st.bg_white+b+st.hg_600+b+st.pd_0_20}>
              <div className={st.bd_t_s+b+st.bd_w_1+b+st.bd_c_grey1+b+st.pd_t_10+b+st.wd_full+b+st.wb} >
                {//<pre>{content}</pre>
                }
                <TextArea defaultValue={content} disabled={true} style={{height:580,backgroundColor:'white',color:'black'}} onMouseOver={mouseOver}/>
              </div>
            </div>
          </Col>
          <Col span={6}></Col>
        </Row>
      </Content>
      <div className={st.hg_100}/>
      {
        sendMessage?<MessageModal text={'操作成功'} okfun={mailSuccess} clfun={mailSuccess}/>:''
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
    createTime:state.detailMessage.createTime,
    receiver:state.detailMessage.receiver,
    content:state.detailMessage.content,
    sendMessage : state.detailMessage.sendMessage,
    checkModal:state.newMessage.checkModal,
    warningText:state.newMessage.warningText,
  };
}
export default connect(mapStateToProps)(DetailMessageContent);
