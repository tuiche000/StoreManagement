import React from "react";
import Home from "@/pages/home"
import Intelligent from "@/pages/intelligent/processing"
import Completed from "@/pages/intelligent/completed"
import Cancellation from "@/pages/intelligent/cancellation"
import Test from "@/pages/test"
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
class Basiccolumn extends React.Component {
  render() {
    return (
      <div>
          <Tabs defaultActiveKey="1" type="card">
            <TabPane tab="处理中的订单" key="1">
              <Intelligent></Intelligent>
            </TabPane>
            <TabPane tab="已完成" key="2">
              <Completed></Completed>
            </TabPane>
            <TabPane tab="取消订单" key="3">
              <Cancellation  ps={this.props}></Cancellation>
            </TabPane>
          </Tabs>
      </div>
    );
  }
}
export default Basiccolumn;