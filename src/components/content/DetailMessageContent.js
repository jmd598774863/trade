import React from 'react';
import styles from './MessageContent.css';
import { Layout, Row, Col, Input, DatePicker, Button, Checkbox, Icon } from 'antd';
import st from '../../css/simple.css';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
const b = ' ';
const { Content } = Layout;
const InputGroup = Input.Group;
 //屏幕宽高
const sheight = document.documentElement.clientHeight;
const swidth = document.documentElement.clientWidth;
function DetailMessageContent({detailSubject, createTime,receiver,content}) {

  function checkAll(){
//0130
  }
  return (
    <div className={styles.normal}>
      <div className={st.hg_100}/>
      <Content>
        <Row>
          <Col span={6}></Col>
          <Col span={10}>
            <div className={st.ta_left+b+st.bg_white+b+st.hg_50+b+st.pd_20}>
              <b>{
              //致客户的一封信
              }</b>
              <b>{detailSubject}</b>
            </div>
          </Col>
          <Col span={2}>
            <div className={st.ta_right+b+st.bg_white+b+st.hg_50+b+st.pd_20} style={{fontSize:13}}>
              {
              //   2017年09月09日
              }
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
              {
                
                //5988988989@qq.com;5988988989@qq.com;5988988989@qq.com;
              }
              
            </div>
          </Col>
          <Col span={6}></Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={12}>
            <div className={st.ta_center+b+st.bg_white+b+st.hg_600+b+st.pd_0_20}>
            <div className={st.bd_t_s+b+st.bd_w_1+b+st.bd_c_grey1+b+st.pd_t_10}>
              {content}
              {
            

                //               今春以来，在广大干部群众的共同努力下，我县林业生态县建设取得了明显成效。为有效巩固造林成果，严厉打击各种毁坏树木的违法行为，维护全县林业生产秩序，根据《中华人民共和国森林法》有关规定，特通告如下：

// 　　一、各乡(镇)、新区要高度重视林木管护工作，把护林工作列进当前工作的重要议事日程，加大护林宣传力度，切实加强组织领导，明确护林责任。

// 　　二、林业、公安等部分要加强护林巡逻，对毁坏或纵容他人毁坏林木、盗伐滥伐林木以及殴打护林职员的违法行为，要依法从快、从严、从重查处。情节严重构成犯罪的，要依法追究刑事责任。

// 　　三、违反《森林法》规定，进行开垦、采砂、采土和其他活动，致使林木受到毁坏的，依法赔偿损失;由林业主管部分责令停止违法行为，补种毁坏株数一倍以上三倍以下的树木，可以处毁坏林木价值一倍以上五倍以下的罚款。

// 　　非法采伐、毁坏树木，性质恶劣、情节严重的要移交司法机关处理。构成犯罪的，要依法追究刑事责任。
              }

            
              </div>
            </div>
          </Col>
          <Col span={6}></Col>
        </Row>
      </Content>
      <div className={st.hg_100}/>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    detailSubject: state.detailMessage.detailSubject,
    createTime:state.detailMessage.createTime,
    receiver:state.detailMessage.receiver,
    content:state.detailMessage.content,
  };
}
export default connect(mapStateToProps)(DetailMessageContent);
