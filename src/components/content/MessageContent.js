import React from 'react';
import styles from './MessageContent.css';
import { Layout, Row, Col, Input, DatePicker, Button, Checkbox, Icon  } from 'antd';
import st from '../../css/simple.css';
const b = ' ';
const { Content } = Layout;
const InputGroup = Input.Group;
function MessageContent() {
  function checkAll(){

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
        <Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row>
        <Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row>
        <Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row><Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row><Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row><Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row><Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row><Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row><Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row><Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row><Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row><Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row><Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row><Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row><Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row><Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row><Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_10}>
            <Col span={1}><Checkbox onChange={checkAll}/></Col>
            <Col span={4}>张三</Col>
            <Col span={16}>由于1号楼电力系统存在问题故障问题</Col>
            <Col span={2}>12月25日</Col>
            <Col span={1} className={st.ta_center}><Icon type='right'/></Col>
        </Row>
      </Content>
      <div className={st.hg_50}/>
    </div>
  );
}

export default MessageContent;
