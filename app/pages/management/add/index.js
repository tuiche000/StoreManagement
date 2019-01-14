import React from 'react';
import { Form, Input, Select, Row, Col, Button, Card ,Radio} from 'antd';
import './index.css'
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
class RegistrationForm extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  state = {
    styles: 3, // 2-编辑   3-新增 -- 默认新增
    conveyData: null,  // 组件传递数据 residenceStyle
  };
  componentDidMount() {
    const _data = this.props.location.state;
    console.log(_data)
    if ( _data.style==2) {
      this.setState({
        styles: _data.style, //   2-编辑   3-新增 -- 默认新增
        conveyData: _data.data
      });
      this.props.form.setFieldsValue({
        nickname: '测试配送发生撒'
      });
    }else{
      this.props.form.setFieldsValue({
        gender: '1',
        states: "1",
        residenceStyle: 0
      });
    }

  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
      return (
        <Row span={24}>
          <Card title={this.state.styles == 3 ? '基本资料' : '编辑资料'} bordered={false}>
            <Col span={8}>
              <Form onSubmit={this.handleSubmit}>
              <FormItem
                  {...formItemLayout}
                  label="姓名"
                >
                  {getFieldDecorator('nickname', {
                    rules: [{ required: true, message: '请输入账户昵称', whitespace: true }],
                  })(
                    <Input />
                  )}
                </FormItem>
                 <FormItem
                  {...formItemLayout}
                  label="性别"
                >
                  {getFieldDecorator('gender',{
                     rules: [{ required: true, message: '请选择员工性别', whitespace: true }],
                  })(
                    <RadioGroup>
                      <Radio value="1">男</Radio>
                      <Radio value="2">女</Radio>
                    </RadioGroup>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="手机号"
                >{getFieldDecorator('phone',{
                  rules: [{ required: true, message: '请输入手机号', whitespace: true }],
                })(
                  <Input placeholder="请输入手机号(即骑士登录账户)" />
                )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="登录密码"
                >{getFieldDecorator('password',{
                  rules: [{ required: true, message: '请设置账户登录密码', whitespace: true }],
                })(
                  <Input placeholder="请设置账户登录密码" type="password" />
                )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="员工编号"
                >
                  {getFieldDecorator('AppId', {
                    rules: [{ required: true, message: '请输入员工编号', whitespace: true }],
                  })(
                    <Input placeholder="请输入员工编号" disabled={this.state.styles == 2} />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="员工属性"
                >
                  {getFieldDecorator('residence', {
                    rules: [{ required: true, message: '请选择员工属性!' }],
                  })(
                    <Select>
                      <Option key={0} value={0}>本店员工</Option>
                      <Option key={1} value={1}>外店员工</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="用工方式"
                >
                  {getFieldDecorator('residenceStyle')(
                    <Select>
                      <Option key={0} value={0}>全职</Option>
                      <Option key={1} value={1}>兼职</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="身份证号"
                >{getFieldDecorator('idCarf')(
                  <Input placeholder="请输入身份证号" />
                )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="开户人"
                >{getFieldDecorator('account')(
                  <Input placeholder="请输入开户人" />
                )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="银行卡号"
                >{getFieldDecorator('bankCard')(
                  <Input placeholder="请输入银行账户" />
                )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="状态"
                >
                  {getFieldDecorator('states')(
                    <RadioGroup>
                      <Radio value="1">正常</Radio>
                      <Radio value="2">禁用</Radio>
                    </RadioGroup>
                  )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">保存</Button>
                </FormItem>
              </Form>
            </Col>
          </Card>
        </Row>
      )
  }
}
const WrappedRegistrationForm = Form.create()(RegistrationForm);
export default WrappedRegistrationForm;