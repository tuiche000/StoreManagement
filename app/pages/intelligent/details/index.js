import React, { Component } from 'react';
import { Steps,Row, Col, Card} from 'antd';
import './index.css'
const Step = Steps.Step;
const menuDeta =[
  {
    'name': '鱼香肉丝面',
    'fenshu': 1,
    'monery': 20
  },
  {
    'name': '鱼香肉丝面1',
    'fenshu': 1,
    'monery': 20
  },
  {
    'name': '鱼香肉丝面2',
    'fenshu': 1,
    'monery': 20
  }
]
class WrappedRegistration extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div className="tableList">
        <Row className="step">
          <Steps current={4}>
            <Step title="2018-09-01 12：12：12" description="接收订单" />
            <Step title="2018-09-01 12：12：12" description="分配骑士" />
            <Step title="2018-09-01 12：12：12" description="开始配送" />
            <Step title="2018-09-01 12：12：12" description="配送完成" />
          </Steps>
        </Row>
        <Row gutter={16}>
            <Col span={12}>
              <Card title="订单详情" bordered={false}>
                <Col span={12}>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>订单号：</Col>
                    <Col span={14} offset={2}>23021515445</Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>下单渠道：</Col>
                    <Col span={14} offset={2}>饿了么</Col>
                  </Row>  
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>下单时间：</Col>
                    <Col span={14} offset={2}>2018-08-15 10：12：12</Col>
                  </Row>  
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>门店名称：</Col>
                    <Col span={14} offset={2}>真功夫</Col>
                  </Row>  
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>客户姓名：</Col>
                    <Col span={14} offset={2}>至尊宝</Col>
                  </Row>  
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>派送地址：</Col>
                    <Col span={14} offset={2}>上还是打算恶趣味我去恶趣味恶啊实打实大苏打撒旦趣味</Col>
                  </Row> 
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>客户备注：</Col>
                    <Col span={14} offset={2}>加辣</Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>支付状态：</Col>
                    <Col span={14} offset={2}>已支付</Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>支付流水号：</Col>
                    <Col span={14} offset={2}>987987954654156</Col>
                  </Row>
                </Col>
                <Col span={12}>
                <Row className="bottom_10">
                    <Col className="text_right" span={8}></Col>
                    <Col span={14} offset={2}></Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>渠道订单号：</Col>
                    <Col span={14} offset={2}>0109108213</Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>期望时间：</Col>
                    <Col span={14} offset={2}>2018-08-01 12：30：29</Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>订单状态：</Col>
                    <Col span={14} offset={2}>已完成</Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>客户手机号：</Col>
                    <Col span={14} offset={2}>0109108213</Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>餐具数目：</Col>
                    <Col span={14} offset={2}>0109108213</Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>支付渠道：</Col>
                    <Col span={14} offset={2}>支付宝</Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>是否异常订单：</Col>
                    <Col span={14} offset={2}>否</Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>实付：</Col>
                    <Col span={14} offset={2}>￥ 42</Col>
                  </Row>
                
                </Col>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="商品详情" bordered={false}>
                <Row className="menuDeta">
                  <Row className="text_center title_menu">
                    <Col span={8}>餐品名称</Col>
                    <Col span={8}>数量</Col>
                    <Col span={8}>小计(￥)</Col>
                  </Row>
                  {/* <Row className="text_center">
                    <Col span={8}>鱼香肉丝面</Col>
                    <Col span={8}>x1</Col>
                    <Col span={8}>20</Col>
                  </Row> */}
                  {
                    menuDeta.map(item=>{
                      return(
                        <Row className="text_center" key={item.name}>
                          <Col span={8}>{item.name}</Col>
                          <Col span={8}>X{item.fenshu}</Col>
                          <Col span={8}>{item.monery}</Col>
                        </Row>
                      )
                    })
                  }
                </Row>
                <Row>
                    <Col className="text_center" span={8} offset={16}>商品总额: ￥42</Col>
                  </Row>
                  <Row className="text_center">
                    <Col className="text_center" span={8} offset={16}>配送费: ￥42</Col>
                  </Row>
                  <Row className="text_center">
                    <Col className="text_center" span={8} offset={16}>总计: ￥42</Col>
                  </Row>
              </Card>
              <Card title="派送详情" bordered={false}>
                <Col span={12}>
                 
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>骑士姓名：</Col>
                    <Col span={14} offset={2}>至尊宝</Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>出发时间：</Col>
                    <Col span={14} offset={2}>加辣</Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>配送状态：</Col>
                    <Col span={14} offset={2}>已支付</Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>配送渠道：</Col>
                    <Col span={14} offset={2}>987987954654156</Col>
                  </Row>
                </Col>
                <Col span={12}>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>骑士手机号：</Col>
                    <Col span={14} offset={2}>0109108213</Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>送达时间：</Col>
                    <Col span={14} offset={2}>支付宝</Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>超时时间：</Col>
                    <Col span={14} offset={2}>否</Col>
                  </Row>
                  <Row className="bottom_10">
                    <Col className="text_right" span={8}>骑士备注：</Col>
                    <Col span={14} offset={2}>￥ 42</Col>
                  </Row>
                </Col>
              </Card>
            </Col>
        </Row>
      </div>
    );
  }
}
export default WrappedRegistration;