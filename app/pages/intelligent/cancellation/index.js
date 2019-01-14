import React, { Component } from 'react';
import { Form, Input, Table, Button , Select, Row, Col,Card } from 'antd';
import {
  Link,
} from 'react-router-dom'
const data = [];
for (let i = 1; i <46; i++) {
  data.push({
    key: i,
    orderTime: '2018-12-04 10:10',
    serviceTime: '2018-12-05 10:10',
    state: 1,
    customerName: "张三",
    customerPhoto: '130****2391',
    money: '99',
    address: "上海市普陀区祁连山南路28888号A座15B",
    channel: 1,
    knightName: "李四",
    remarks: "没人在家，放到小区保安处"
  });
}
const FormItem = Form.Item;
const { Option } = Select;

class ThirdParty extends React.Component {
  constructor(props){
    super(props)
  }
  columns = [
      {
        title: '订单编号',
        dataIndex: 'key',
        align:"center",
        render: text => <a href="javascript:;">{text}</a>,
    }, {
        title: '下单时间',
        align:"center",
        dataIndex: 'orderTime'
    }, {
        title: '送达时间',
        align:"center",
        dataIndex: 'serviceTime',
    }, {
        title: '订单状态',
        align:"center",
        render: record => <p>{record.state==1?"已完成":"异常完成"}</p>,
    }, {
        title: '客户姓名',
        align:"center",
        dataIndex: 'customerName',
    }, {
        title: '客户手机号',
        align:"center",
        dataIndex: 'customerPhoto',
    }, {
        title: '订单金额(￥)',
        align:"center",
        dataIndex: 'money',
    }, {
        title: '派送地址',
        align:"center",
        dataIndex: 'address',
    }, {
        title: '配送渠道',
        align:"center",
        render: record => <p>{record.channel==1?"美团":"饿了么"}</p>,
    }, {
        title: '骑士姓名',
        align:"center",
        dataIndex: 'knightName',
    }, {
        title: '骑士备注',
        align:"center",
        dataIndex: 'remarks',
    }
];
  state = {
    total: 46,
    current: 1,
    hasData: true,
  };
  handleSearch = (e) => {
    // form表单
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });

  }
  changePageSize = (page, pageSize) => {
    // 改变页数
    console.log(page + "++++" + pageSize)
    this.setState({
      current: page
    });
  }
  onShowSizeChange = (current, size) => {
    // 改变条数
    console.log(current + "++++" + size);
  }
  handleChange = (val) => {
    // select
    console.log(val)
  }
  onRowClick =(val) =>{
      console.log(val)
      this.props.ps.history.push({
        pathname: "/app/intelligent/details",
        state: {
          data: val
        }
      });
  }
  render() {
    const state = this.state;
    const { getFieldDecorator } = this.props.form;
    const paginationProps = {
      current: state.current,
      total: state.total,
      showSizeChanger: true,
      onChange: this.changePageSize,
      showSizeChanger: false,
      onShowSizeChange: this.onShowSizeChange
    };
    console.log(this)
    return (
      <div className="tableList">
        <div className="tableListForm">
          <Form onSubmit={this.handleSearch} layout="inline">
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
              <Col md={6} sm={24}>
                <FormItem label="门店电话">
                  {getFieldDecorator('photoNum')(
                    <Input placeholder="请输入" />
                  )}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="使用状态" style={{ width: '100%' }}>
                  {getFieldDecorator('select')(
                    <Select className="tableFormInput" placeholder="请选择">
                      <Option value="0">关闭</Option>
                      <Option value="1">运行中</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="门店名称">
                  {getFieldDecorator('name')(
                    <Input placeholder="请输入" />
                  )}
                </FormItem>
              </Col>
              <Col md={6} sm={24} className="searchBtn">
                <span className="submitButtons">
                  <Button type="primary" htmlType="submit">
                    查询
                  </Button>
                </span>
              </Col>
            </Row>
          </Form>
          <Card bordered={false}>
            <Table
                {...this.state}
                pagination={paginationProps}
                columns={this.columns} 
                bordered 
                dataSource={state.hasData ? data : null}
                onRow={(record) => {
                    return {
                      onClick: this.onRowClick.bind(this,record),       // 点击行
                    };
                }}
            />
          </Card>
        </div>
      </div>
    );
  }
}
const WrappedRegistration = Form.create()(ThirdParty);
export default WrappedRegistration;