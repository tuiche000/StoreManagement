import React from "react";
import { Table } from 'antd';

class DragSourceBox extends React.Component {
  render() {

    const {
      ...restProps
    } = this.props;
    const style = { ...restProps.style, cursor: 'move' };
    const className = restProps.className;
    


    return (
      <tr
        {...restProps}
        className={className}
        style={{...style}}
      />
    )
  }
}

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


export default class DragTable extends React.Component {
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
      row: DragSourceBox,
    },
  }

  // moveRow = (dragIndex, hoverIndex) => {
  //   console.log(dragIndex)
  //   console.log(hoverIndex)
  // }

  render() {
    return (
      <Table
        className="components-table-demo-drag-sorting"
        columns={columns}
        dataSource={this.state.data}
        components={this.components}
        pagination={false}
        // onRow={(record, index) => ({
        //   index,
        //   moveRow: this.moveRow,
        // })}
      />
    )
  }
}

