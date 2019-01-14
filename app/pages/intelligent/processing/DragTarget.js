import React from "react";
import { Row, Col } from 'antd'
import {
  DropTarget,
  DropTargetConnector,
  DropTargetMonitor,
  ConnectDropTarget,
} from 'react-dnd'
import ItemTypes from './ItemTypes'

const style = React.CSSProperties = {
  border: '1px solid #e8e8e8'
}

const targetSpec = {
  drop(props, monitor, component) { //组件放下时触发的事件，可选。
    alert('放下')
    return { name: '蜂鸟配送' }
  },
  hover(props, monitor, component) { //组件在DropTarget上方时响应的事件，可选。
    console.log('hover')
  },
  canDrop(props, monitor) { //组件可以被放置时触发的事件，可选。
    // ..
  }
}

@DropTarget(ItemTypes.BOX, targetSpec, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
export default class ItemTarget extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  state = {
    data: [{
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
    const { canDrop, isOver, connectDropTarget } = this.props
    const isActive = canDrop && isOver
    
    let backgroundColor = ''
    if (isActive) {
      backgroundColor = 'darkgreen'
    } else if (canDrop) {
      backgroundColor = 'darkkhaki'
    }

    return (
      <Row type="flex" align="middle" style={{ ...style, backgroundColor }}>
        <Col span={6}>蜂鸟配送</Col>
        <Col span={18}>
          {
            this.state.data.map(item => {
              return (
                <Row type="flex" gutter={20} key={item.key}>
                  <Col>{item.expectedTime}</Col>
                  <Col>{item.address}</Col>
                  <Col>{item.price}</Col>
                </Row>
              )
            })
          }
        </Col>
      </Row>
    )
  }
}