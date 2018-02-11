import React from 'react';
import styles from './MessageFooter.css';
import { Layout, Row, Col, Checkbox, Modal } from 'antd';
import st from '../../css/simple.css';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
const b = ' ';
const { Footer } = Layout;

function DetailMessageFooter({dispatch,idx,sendMessage,warningText,checkModal}) {

  function sendMail(){
    window.app.mAggregations.pages["0"].oController.mailOne(idx);
    let promise = new Promise(
      function(resolve, reject) {
        setTimeout(function(){
          if(window.app.mAggregations.pages["0"].oController.SorE === 'S'){
            sendMessage = true;
            dispatch({
              type:'detailMessage/sendMessage',
              payload:{sendMessage}
            });
            resolve(); 
          }else if(window.app.mAggregations.pages["0"].oController.SorE === 'E'){
            warningText = window.app.mAggregations.pages["0"].oController.msg;
            dispatch({
              type:'newMessage/warningText',
              payload:{warningText}
            });
            checkModal = true;
            dispatch({
              type:'newMessage/checkModal',
              payload:{checkModal}
            });
            reject();
          }
       }, 250);
      }
    );
    promise.then(function(r){
    }).catch(function(r){
    });
  }
  function toEdit(){
    dispatch(routerRedux.push('/editMessage'));
  }
  return (
    <Footer className={st.pt_fixed+b+st.bt_0+b+st.wd_full+b+st.bg_grey4}>
      <Row>
          <Col span={22} className={st.cl_white}></Col>
          <Col onClick={toEdit} span={1} className={st.cl_white+b+st.ta_center}><div className={st.pd_15_0+b+st.mg__15_0}>编辑</div></Col>
          <Col onClick={sendMail} span={1} className={st.cl_white+b+st.ta_center}><div className={st.pd_15_0+b+st.mg__15_0}>发送</div></Col>
      </Row>
    </Footer>
  );
}

function mapStateToProps(state) {
  return {
    idx:state.detailMessage.idx,
    sendMessage : state.detailMessage.sendMessage,
    checkModal:state.newMessage.checkModal,
    warningText:state.newMessage.warningText,
  };
}
export default connect(mapStateToProps)(DetailMessageFooter);