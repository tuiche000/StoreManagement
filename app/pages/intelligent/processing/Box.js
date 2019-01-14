import React, { Component } from 'react';
import {
  ConnectDragSource,
  DragSource,
  DragSourceConnector,
  DragSourceMonitor,
} from 'react-dnd'
import { Table } from 'antd';
import ItemTypes from './ItemTypes'

// const style = React.CSSProperties = {
//   border: '1px dashed gray',
//   backgroundColor: 'white',
//   padding: '0.5rem 1rem',
//   marginRight: '1.5rem',
//   marginBottom: '1.5rem',
//   cursor: 'move',
//   float: 'left',
// }
const style = React.CSSProperties = {}

//
const columns = [{
  title: '订单号',
  dataIndex: 'orderId',
  key: 'orderId',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: '期望时间',
  dataIndex: 'expectedTime',
  key: 'expectedTime',
}, {
  title: '配送地址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '订单金额（￥）',
  key: 'price',
  dataIndex: 'price',
}];

/*
  specObj 对象方法相关参数
  props： 组件当前的props
  monitor：查询当前的拖拽状态，比如当前拖拽的item和它的type，当前拖拽的offsets，当前是否dropped。具体获取方法，参看collect 参数 monitor 部分

  source组件 的 monitor 参数是 DragSourceMonitor 的实例
  target组件 的 monitor 参数是 DropTargetMonitor 的实例
  component：当前组件实例
*/
const boxSource = {
  beginDrag(props) {
    return {
      key: props['data-row-key'],
    }
  },

  endDrag(props, monitor = DragSourceMonitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()
    console.log(item)
    if (dropResult) {
      alert(`You dropped ${item.name} into ${dropResult.name}!`)
    }
  },
}

/*
  参数 connect
  source组件 collect 中 connect是 DragSourceConnector的实例，它内置了两个方法：dragSource() 和 dragPreview()。dragSource()返回一个方法，将source组件传入这个方法，可以将 source DOM 和 React DnD backend 连接起来；dragPreview() 返回一个方法，你可以传入节点，作为拖拽预览时的角色。
  target组件 collect 中 connect是 DropTargetConnector的实例，内置的方法 dropTarget() 对应 dragSource()，返回可以将 drop target 和 React DnD backend 连接起来的方法。
*/
@DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
class Box extends React.Component {
  render() {
    const { isDragging, connectDragSource, ...restProps } = this.props
    const opacity = isDragging ? 0.4 : 1
    let className = restProps.className;
    return connectDragSource(
      <tr
        {...restProps}
        className={className}
        style={{ ...style, opacity }}
      >
      </tr>
    )
  }
}

export default class bigBox extends React.Component {
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
  }

  components = {
    body: {
      row: Box,
    },
  }

  render() {
    return (
      <Table
        className="components-table-demo-drag-sorting"
        columns={columns}
        dataSource={this.state.data}
        components={this.components}
        pagination={false}
      />
    )
  }
}