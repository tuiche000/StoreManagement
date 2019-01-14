import React, { Component } from 'react';
import { Form, Input, Table, Button , Select, Row, Col,Card } from 'antd';
import './index.css';
import {
  Link,
} from 'react-router-dom'
const data = [];
for (let i = 1; i <46; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: "测试啊沙发沙发案说法",
  });
}
const expandedRowRender = record =>{
  return(<Row>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>Col</Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>Col</Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>Col</Col>
        </Row>)
};

const FormItem = Form.Item;
const { Option } = Select;

class ThirdParty extends React.Component {
  columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    align:"center",
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: 'Age',
    align:"center",
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    align:"center",
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '操作',
    align:"center",
    key: 'action',
    render: (record) => (
      <Row>
        <Button type="primary" onClick={() => this.deleteRow(record)}>编辑</Button>
      </Row>
    ),
  }];
  state = {
    total: 46,
    current: 1,
    expandedRowRender,
    hasData: true,
  };
  deleteRow = (res) => {
    // 编辑
    debugger
    this.props.history.push({
      pathname: "/app/management/add",
      state: {
        data: res,
        style: 2  //   2-编辑   3-新增
      }
    });
  }
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
          <Button type="primary" className="selectedDelete"><Link to={{ pathname: "/app/management/add",state: {data:null, style: 3 } }}>添加骑士</Link></Button>
          <Card bordered={false}>
            <Table {...this.state} pagination={paginationProps} columns={this.columns} dataSource={state.hasData ? data : null} />
          </Card>
        </div>
      </div>
    );
  }
}
const WrappedRegistration = Form.create()(ThirdParty);
export default WrappedRegistration;