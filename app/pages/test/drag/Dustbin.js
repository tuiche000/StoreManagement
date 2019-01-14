import React, { Component } from 'react';
import {
  DropTarget,
  DropTargetConnector,
  DropTargetMonitor,
  ConnectDropTarget,
} from 'react-dnd'
import ItemTypes from './ItemTypes'

const style = React.CSSProperties = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}
/*
  specObj 对象方法相关参数
  props： 组件当前的props
  monitor：查询当前的拖拽状态，比如当前拖拽的item和它的type，当前拖拽的offsets，当前是否dropped。具体获取方法，参看collect 参数 monitor 部分

  source组件 的 monitor 参数是 DragSourceMonitor 的实例
  target组件 的 monitor 参数是 DropTargetMonitor 的实例
  component：当前组件实例
*/
const boxTarget = {
	drop() {
		return { name: 'Dustbin' }
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
	render() {
		const { canDrop, isOver, connectDropTarget } = this.props
		const isActive = canDrop && isOver

		let backgroundColor = '#222'
		if (isActive) {
			backgroundColor = 'darkgreen'
		} else if (canDrop) {
			backgroundColor = 'darkkhaki'
		}

		return connectDropTarget(
			<div style={{ ...style, backgroundColor }}>
				{isActive ? 'Release to drop' : 'Drag a box here'}
			</div>,
		)
	}
}