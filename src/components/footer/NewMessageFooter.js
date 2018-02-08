import React from 'react';
import styles from './MessageFooter.css';
import { Layout, Row, Col, Checkbox } from 'antd';
import st from '../../css/simple.css';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

const b = ' ';
const { Footer } = Layout;

function NewMessageFooter({checkModal, warningText, dispatch, recipients, theme, mainBody, newSuccess, subject, startTime, endTime, refresh }) {
    //保存
  function saveMessage(){
    if(recipients == ''){
      warningText = '收件人不能为空';
      dispatch({
        type:'newMessage/warningText',
        payload:{warningText}
      });
      checkModal = true;
      dispatch({
        type:'newMessage/checkModal',
        payload:{checkModal}
      });
      return;
    }
    if(recipients.length>0){
      if(recipients.charAt(recipients.length-1)==';'){
        recipients = recipients.substring(0,recipients.length-1);
      }
    }
    //邮箱正则
    var regex = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
    var b = false;
    if(recipients.indexOf(';') == -1){
      //一个邮箱
      b = regex.test(recipients);
    }else{
      //多个邮箱
      const array = recipients.split(';');
      console.log(array.length-1);
      for(var i=0;i<array.length;i++){
        if(!regex.test(array[i])){
         b = false;
         break;
        }else{
          b = true;
        }
      }
    }
    if(b == false){
      console.log('bin');
      warningText = '收件人邮箱格式不正确';
      dispatch({
        type:'newMessage/warningText',
        payload:{warningText}
      });
      checkModal = true;
      dispatch({
        type:'newMessage/checkModal',
        payload:{checkModal}
      });
      return;
    }
    if(theme == ''){
      warningText = '主题不能为空';
      dispatch({
        type:'newMessage/warningText',
        payload:{warningText}
      });
      checkModal = true;
      dispatch({
        type:'newMessage/checkModal',
        payload:{checkModal}
      });
      return;
    }
    if(mainBody == ''){
      warningText = '正文不能为空';
      dispatch({
        type:'newMessage/warningText',
        payload:{warningText}
      });
      checkModal = true;
      dispatch({
        type:'newMessage/checkModal',
        payload:{checkModal}
      });
      return;
    }
    window.app.mAggregations.pages["0"].oController.saveTradeMessage(recipients, theme, mainBody);
    let promise = new Promise(
      function(resolve, reject) {
        setTimeout(function(){
          if(window.app.mAggregations.pages["0"].oController.SorE === 'S'){
            console.log('sss');
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
            console.log('eee');
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
      },
    );
    promise.then(function(r){
      console.log('then');
    }).catch(function(r){
      console.log('catch');
    });
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
    checkModal:state.newMessage.checkModal,
    warningText:state.newMessage.warningText,
  };
}
export default connect(mapStateToProps)(NewMessageFooter);
