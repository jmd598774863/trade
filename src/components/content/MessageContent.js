import React from 'react';
import styles from './MessageContent.css';
import { Layout, Row, Col, Input, DatePicker, Button, Checkbox, Icon,Modal  } from 'antd';
import st from '../../css/simple.css';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
const b = ' ';
const { Content } = Layout;
const InputGroup = Input.Group;
function MessageContent({dispatch,delBtn}) {
  function checkAll(){

  }
  function toDetail(){
    dispatch(routerRedux.push('/detailMessage'));
  }
  function closeDelete(){
    delBtn = false;
    dispatch({
      type:'listMessage/delBtn',
      payload:{delBtn}
    })
  }
  function delMessage(){

  }
  return (
    <div className={styles.normal}>
      <div className={st.hg_64}/>
      <Content className={st.bg_white}>
        <Row className={st.pd_10}>
          <InputGroup size="large">
            <Col className={st.pd_7_5} span={1}>主题：</Col>
            <Col span={3}><Input className={st.cl_red}/></Col>
            <Col className={st.pd_7_5} span={1}>日期：</Col>
            <Col span={3}><DatePicker className={st.cl_red}/></Col>
            <Col span={16} className={st.ta_right}><Button type="primary">查询</Button></Col>
          </InputGroup>
        </Row>
        <Row className={st.bd_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_4}>
            <Col span={1} className={st.pd_l_5}><Checkbox onChange={checkAll}/></Col>
            <Col span={4} className={st.bd_l_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_l_5}>创建人</Col>
            <Col span={16} className={st.bd_l_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_l_5}>主题</Col>
            <Col span={3} className={st.bd_l_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_l_5}>时间</Col>
        </Row>
        <Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_5+b+st.cl_blue3}>
          上周（4）
        </Row>
        <Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2}>
            <Col span={1}><div className={st.pd_10}><Checkbox onChange={checkAll}/></div></Col>
            <Col span={4}><div className={st.pd_10}>张三</div></Col>
            <Col span={16}><div className={st.pd_10}>由于1号楼电力系统存在问题故障问题</div></Col>
            <Col span={2}><div className={st.pd_10}>12月25日</div></Col>
            <Col span={1}><div onClick={toDetail} className={st.ta_center+b+st.pd_10_0} ><Icon type='right'/></div></Col>
        </Row>
      </Content>
      <Modal title="提示" visible={delBtn}
        onOk={delMessage} onCancel={closeDelete}
        okText="确定" cancelText="取消">
        <p>您确定是否要删除当前通告？</p>
      </Modal>
      
      <div className={st.hg_50+b+st.bg_white}/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    delBtn : state.listMessage.delBtn
  };
}
export default connect(mapStateToProps)(MessageContent);