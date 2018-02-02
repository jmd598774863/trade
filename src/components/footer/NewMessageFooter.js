import React from 'react';
import styles from './MessageFooter.css';
import { Layout, Row, Col, Checkbox } from 'antd';
import st from '../../css/simple.css';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

const b = ' ';
const { Footer } = Layout;
function NewMessageFooter({dispatch, recipients, theme, mainBody, newSuccess, subject, startTime, endTime, refresh }) {
    //保存
  function saveMessage(){
    window.app.mAggregations.pages["0"].oController.saveTradeMessage(recipients, theme, mainBody);
    let promise = new Promise(
      function(resolve, reject) {
        setTimeout(function(){
          if(window.app.mAggregations.pages["0"].oController.SorE === 'S'){
            window.app.mAggregations.pages["0"].oController.queryMessage(subject, startTime, endTime);
            let promise = new Promise(
              function(resolve, reject) {
                setTimeout(function(){
                  if(window.app.mAggregations.pages["0"].oController.SorE === 'S'){
                    dispatch({
                      type:'listMessage/refresh',
                      payload:{refresh}
                    });
                    newSuccess = true;
                    dispatch({
                      type:'newMessage/newSuccess',
                      payload:{newSuccess}
                    });
                    resolve(); 
                  }else if(window.app.mAggregations.pages["0"].oController.SorE === 'E'){
                    reject();
                  }
              }, 250); 
              }
            );
            resolve(); 
          }else if(window.app.mAggregations.pages["0"].oController.SorE === 'E'){
            reject();
          }
       }, 250); 
      }
    );
  }

  return (
    <Footer className={st.pt_fixed+b+st.bt_0+b+st.wd_full+b+st.bg_grey4}>
      <Row>
          <Col span={23} className={st.cl_white}></Col>
          <Col span={1} onClick={saveMessage} className={st.cl_white+b+st.ta_center}><div className={st.pd_15_0+b+st.mg__15_0}>保存</div></Col>
      </Row>
    </Footer>
  );
}
function mapStateToProps(state) {
  return {
    recipients : state.newMessage.recipients,
    theme : state.newMessage.theme,
    mainBody : state.newMessage.mainBody,
    newSuccess : state.newMessage.newSuccess,
    subject: state.listMessage.subject,
    startTime: state.listMessage.startTime,
    endTime: state.listMessage.endTime,
    refresh: state.listMessage.refresh,
  };
}
export default connect(mapStateToProps)(NewMessageFooter);
