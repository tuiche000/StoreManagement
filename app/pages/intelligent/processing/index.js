import React from "react";
import { Row, Col, Button, Card, Table } from 'antd';
import update from 'immutability-helper';
import './index.css'
// dnd
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Box from './Box';
import Dustbin from './Dustbin';

@DragDropContext(HTML5Backend)
export default class Processing extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    data: [{
      key: '1',
      orderId: '1',
      expectedTime: 'John Brown',
      address: 32,
      price: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      orderId: '2',
      expectedTime: 'Jim Green',
      address: 42,
      price: 'London No. 1 Lake Park',
    }],
    tragetData: [{
      key: '1',
      orderId: '0094',
      expectedTime: '08-01  12:30',
      address: '上海市普陀区祁连山路666号',
      price: '919',
    }, {
      key: '2',
      orderId: '0095',
      expectedTime: '08-01  12:30',
      address: '上海市普陀区祁连山路666号',
      price: '199',
    }, {
      key: '3',
      orderId: '0096',
      expectedTime: '08-01  12:30',
      address: '上海市普陀区祁连山路666号',
      price: '199',
    }]
  }

  render() {
    return (
      <div>
        <Row gutter={10}>
          <Col span={12}>
            <Row type="flex" align="middle" justify="center" style={{ background: '#e8e8e8', padding: '10px' }}>未分配运单（100单）</Row>
            <div>
              <Box data={this.state.data}></Box>
            </div>
          </Col>
          <Col span={12}>
            <Row type="flex" align="middle" justify="center" style={{ background: '#e8e8e8', padding: '10px' }}>未分配运单（100单）</Row>
            <div>
              <Dustbin tragetData={this.state.tragetData} name="蜂鸟配送"></Dustbin>
              <Dustbin tragetData={this.state.tragetData} name="达达"></Dustbin>
              <Dustbin tragetData={this.state.tragetData} name="张三"></Dustbin>
              <Dustbin tragetData={this.state.tragetData} name="李四"></Dustbin>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}