import React, { Component } from 'react';
import PropTypes from 'prop-types'
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
// const style = React.CSSProperties = {
//   height: '12rem',
//   width: '12rem',
//   marginRight: '1.5rem',
//   marginBottom: '1.5rem',
//   color: 'white',
//   padding: '1rem',
//   textAlign: 'center',
//   fontSize: '1rem',
//   lineHeight: 'normal',
//   float: 'left',
// }

/*
  specObj 对象方法相关参数
  props： 组件当前的props
  monitor：查询当前的拖拽状态，比如当前拖拽的item和它的type，当前拖拽的offsets，当前是否dropped。具体获取方法，参看collect 参数 monitor 部分

  source组件 的 monitor 参数是 DragSourceMonitor 的实例
  target组件 的 monitor 参数是 DropTargetMonitor 的实例
  component：当前组件实例
*/
const boxTarget = {
  drop(props= DustbinProps, monitor= DropTargetMonitor) {
    return {
      name: props.name
    }
	},
}

/*
  参数 connect
  source组件 collect 中 connect是 DragSourceConnector的实例，它内置了两个方法：dragSource() 和 dragPreview()。dragSource()返回一个方法，将source组件传入这个方法，可以将 source DOM 和 React DnD backend 连接起来；dragPreview() 返回一个方法，你可以传入节点，作为拖拽预览时的角色。
  target组件 collect 中 connect是 DropTargetConnector的实例，内置的方法 dropTarget() 对应 dragSource()，返回可以将 drop target 和 React DnD backend 连接起来的方法。
*/
@DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
export default class Dustbin extends React.Component {
  static propTypes = {
    tragetData: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
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

    return connectDropTarget(
      <div>
        <Row type="flex" align="middle" style={{ ...style, backgroundColor }}>
          <Col span={6}>{this.props.name}</Col>
          <Col span={18}>
            {
              this.props.tragetData.map(item => {
                return (
                  <Row type="flex" gutter={20} key={item.key}>
                    <Col>{item.expectedTime}</Col>
                    <Col>{item.expectedTime}</Col>
                    <Col>{item.expectedTime}</Col>
                  </Row>
                )
              })
            }
          </Col>
        </Row>
      </div>
    )
  }
}