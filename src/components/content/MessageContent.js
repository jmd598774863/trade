import React from 'react';
import styles from './MessageContent.css';
import { Layout, Row, Col, Input, DatePicker, Button, Checkbox, Icon,Modal,Pagination  } from 'antd';
import st from '../../css/simple.css';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import MessageModal from '../modal/MessageModal';
const b = ' ';
const { Content } = Layout;
const InputGroup = Input.Group;
const sheight = document.documentElement.clientHeight;
const swidth = document.documentElement.clientWidth;
function MessageContent({allCheck,checkModal, warningText,dispatch, showBtn, mailModelShow, checkList, refresh, subject, startTime, endTime, newSuccess,detailSubject,createTime,receiver,content,number,idx }) {

  function fenye(pageNumber){
    queryMessage(pageNumber);
  }
  function checkAll(e){
    if(e.target.checked){
      if(checkList.length==0){
        var len = window.app.mAggregations.pages['0'].oModels.messageModel.oData.AnnounceTitleSet.results.length;
        for(var i=0;i<len;i++){
          checkList[i] = true;
        }
      }
      for(var i in checkList){
        checkList[i] = true;
      }
    }else{
      for(var i in checkList){
        checkList[i] = false;
      }
    }
    allCheck = !allCheck;
    dispatch({
      type:'listMessage/allCheck',
      payload:{allCheck}
    });
    dispatch({
      type:'listMessage/refresh',
      payload:{refresh}
    });
  }
  function resultModal(){
    checkModal = false;
    dispatch({
      type:'newMessage/checkModal',
      payload:{checkModal}
    });
  }
  function toDetail(sub,create,rece,zcont,znum,ii){
    detailSubject = sub;
    createTime = create;
    receiver = rece;
    content = zcont;
    number = znum;
    idx = ii;
    dispatch({
      type:'detailMessage/detailSubject',
      payload:{detailSubject}
    });
    dispatch({
      type:'detailMessage/createTime',
      payload:{createTime}
    });
    dispatch({
      type:'detailMessage/receiver',
      payload:{receiver}
    });
    dispatch({
      type:'detailMessage/content',
      payload:{content}
    });
    dispatch({
      type:'detailMessage/number',
      payload:{number}
    });
    dispatch({
      type:'detailMessage/idx',
      payload:{idx}
    });
    dispatch(routerRedux.push('/detailMessage'));
  }
  function delFun(){
      window.app.mAggregations.pages["0"].oController.deleteMessage(checkList);
      let promise = new Promise(
        function(resolve, reject) {
          setTimeout(function(){
            if(window.app.mAggregations.pages["0"].oController.SorE === 'S'){
              queryMessage();
              showBtn = false;
              dispatch({
                type:'listMessage/showBtn',
                payload:{showBtn}
              });
              newSuccess = true;
              dispatch({
                type:'newMessage/newSuccess',
                payload:{newSuccess}
              });
              checkList = [];
              dispatch({
                type:'listMessage/checkList',
                payload:{checkList}
              });
              allCheck = false;
              dispatch({
                type:'listMessage/allCheck',
                payload:{allCheck}
              });
            }else if(window.app.mAggregations.pages["0"].oController.SorE === 'E'){
              showBtn = false;
              dispatch({
                type:'listMessage/showBtn',
                payload:{showBtn}
              });
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
              allCheck = false;
              dispatch({
                type:'listMessage/allCheck',
                payload:{allCheck}
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

  function mailFun(){
    window.app.mAggregations.pages["0"].oController.mailMessage(checkList);
    let promise = new Promise(
      function(resolve, reject) {
        setTimeout(function(){
          if(window.app.mAggregations.pages["0"].oController.SorE === 'S'){
            mailModelShow = false;
            dispatch({
              type:'listMessage/mailModelShow',
              payload:{mailModelShow}
            });
            checkList = [];
              dispatch({
                type:'listMessage/checkList',
                payload:{checkList}
              });
            newSuccess = true;
            dispatch({
              type:'newMessage/newSuccess',
              payload:{newSuccess}
            });
            allCheck = false;
            dispatch({
              type:'listMessage/allCheck',
              payload:{allCheck}
            });
            resolve(); 
          }else if(window.app.mAggregations.pages["0"].oController.SorE === 'E'){
            mailModelShow = false;
            dispatch({
              type:'listMessage/mailModelShow',
              payload:{mailModelShow}
            });
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
            allCheck = false;
            dispatch({
              type:'listMessage/allCheck',
              payload:{allCheck}
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
  function deleteCancel(){
    showBtn = false;
    dispatch({
      type:'listMessage/showBtn',
      payload:{showBtn}
    });
  }
  function mailCancel(){
    mailModelShow = false;
    dispatch({
      type:'listMessage/mailModelShow',
      payload:{mailModelShow}
    });
  }
  function changeCheckBox(index, e){
    checkList[index] = e.target.checked;
    dispatch({
      type:'listMessage/refresh',
      payload:{refresh}
    });
  }
  function queryMessage(num){
    window.app.mAggregations.pages["0"].oController.queryMessage(subject, startTime, endTime,num);
    let promise = new Promise(
      function(resolve, reject) {
        setTimeout(function(){
          if(window.app.mAggregations.pages["0"].oController.SorE === 'S'){
            dispatch({
              type:'listMessage/refresh',
              payload:{refresh}
            });
            resolve(); 
          }else if(window.app.mAggregations.pages["0"].oController.SorE === 'E'){
            reject();
          }
       }, 250); 
      }
    );
    promise.then(function(r){
    }).catch(function(r){
    });
  }
  function subjectValue(e){
    subject = e.target.value;
    dispatch({
      type:'listMessage/subject',
      payload:{subject}
    });
  }
  function startValue(date, dateString){
    startTime = dateString.replace(/-/g,'');
    dispatch({
      type:'listMessage/startTime',
      payload:{startTime}
    });
  }
  function endValue(date, dateString){
    endTime = dateString.replace(/-/g,'');
    dispatch({
      type:'listMessage/endTime',
      payload:{endTime}
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
    <div className={st.bg_white}>
      <div className={st.hg_64}/>
      <Content className={st.bg_white} style={{height:sheight-132}}>
        <Row className={st.pd_10_0}>
          <InputGroup size="default">
            <Col className={st.ta_right+b+st.pd_5_0} span={2}>主题：</Col>
            <Col span={3}><Input onChange={subjectValue} className={st.cl_red}/></Col>
            <Col className={st.ta_right+b+st.pd_5_0} span={2}>日期：</Col>
            <Col span={3}><DatePicker onChange={startValue} className={st.cl_red} placeholder='开始'/></Col>
            <Col span={3}><DatePicker onChange={endValue} className={st.cl_red} placeholder='结束'/></Col>
            <Col onClick={queryMessage.bind(this,0)} span={27} className={st.pt_absolute+b+st.rt_30+b+st.tp_0}><Button type="primary">查询</Button></Col>
          </InputGroup>
        </Row>
        <Row className={st.bd_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_4}>
            <Col span={1} className={st.pd_l_5}><Checkbox checked={allCheck} onChange={checkAll}/></Col>
            <Col span={4} className={st.bd_l_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_l_5}>创建人</Col>
            <Col span={14} className={st.bd_l_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_l_5}>主题</Col>
            <Col span={5} className={st.bd_l_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_l_5}>时间</Col>
        </Row>
        <Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_5+b+st.cl_blue3+b+st.ta_right}>
         {
           // 上周（4）
         }
          <Pagination showQuickJumper pageSize={20} defaultCurrent={1}
           total={window.app ?
            window.app.mAggregations.pages['0'].oModels.messageModel.oData.Inlinecount
           :100} onChange={fenye} />
        </Row>
        {
          window.app && window.app.mAggregations.pages['0'].oModels.messageModel.oData.AnnounceTitleSet?
          window.app.mAggregations.pages['0'].oModels.messageModel.oData.AnnounceTitleSet.results.map((r,i)=>(
            <Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2}>
              <Col span={1}><div className={st.pd_10}><Checkbox checked={checkList[i]} onChange={changeCheckBox.bind(this,i)}/></div></Col>
              <Col span={4}><div className={st.pd_10}>{r.Zcreater}</div></Col>
              <Col span={14}><div className={st.pd_10}>{r.Zsubject}</div></Col>
              <Col span={4}><div className={st.pd_10}>
              {
                r.Zcreatedate.substr(0,4)+'-'+r.Zcreatedate.substr(4,2)+'-'+r.Zcreatedate.substr(6,2)+' '+
                r.Zcreatetime.substr(0,2)+':'+ r.Zcreatetime.substr(2,2)+':'+r.Zcreatetime.substr(4,2)
              }</div></Col>
              <Col span={1}><div onClick={toDetail.bind(this,r.Zsubject,r.Zcreatedate,r.Zrecepter,r.Zcontent,r.Znumber,i)} className={st.ta_center+b+st.pd_10_0} ><Icon type='right'/></div></Col>
            </Row>
          )):''
        }
       <Row>
        <div className={st.hg_68+b+st.bg_white}/>
       </Row>
      </Content>
      {
        showBtn?<MessageModal text={'您是否确定删除当前通告?'} okfun={delFun} clfun={deleteCancel}/>:''
      }
      {
        mailModelShow?<MessageModal text={'您是否确定发送当前通告?'} okfun={mailFun} clfun={mailCancel}/>:''
      }
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
    showBtn : state.listMessage.showBtn,
    mailModelShow : state.listMessage.mailModelShow,
    checkList: state.listMessage.checkList,
    refresh: state.listMessage.refresh,
    subject: state.listMessage.subject,
    startTime: state.listMessage.startTime,
    endTime: state.listMessage.endTime,
    newSuccess : state.newMessage.newSuccess,
    detailSubject: state.detailMessage.detailSubject,
    createTime:state.detailMessage.createTime,
    receiver:state.detailMessage.receiver,
    content:state.detailMessage.content,
    number:state.detailMessage.number,
    idx:state.detailMessage.idx,
    checkModal:state.newMessage.checkModal,
    warningText:state.newMessage.warningText,
    allCheck: state.listMessage.allCheck,
  };
}
export default connect(mapStateToProps)(MessageContent);