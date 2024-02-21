import { BrowserRouter as Router, Link } from "react-router-dom"
import AppRoute from "./router"
import { Layout, Menu, MenuProps } from "antd"
import React from "react"
import { Icon } from "@ricons/utils"
import { Braille, GraduationCap, CalendarAltRegular, ChartLine, Centos, Cogs } from "@ricons/fa"
const { Header, Sider, Content } = Layout
const headerStyle: React.CSSProperties = {
  textAlign: "left",
  color: "#fff",
  height: 64,
  // paddingInline: 10,
  lineHeight: "64px",
  backgroundColor: "#f0a6a9",
}

const contentStyle: React.CSSProperties = {
  textAlign: "left",
  minHeight: `calc(100vh - 64px)`,
  backgroundColor: "#f8f8f8",
  color: "#000",
  padding: 10,
}
const siderStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  color: "#fff",
  minHeight: `calc(100vh - 64px)`,
}

function AppLayout() {
  type sidebarItem = Required<MenuProps>["items"][number]
  const getItem = (label: React.ReactNode, key?: React.Key | null, icon?: React.ReactNode, children?: sidebarItem[]): sidebarItem => {
    return { label, key, icon, children } as sidebarItem
  }

  const sidebarItems: MenuProps["items"] = [
    getItem(
      "学生管理",
      1,
      <Icon size={20}>
        <GraduationCap />
      </Icon>,
      [
        getItem(<Link to="/grade">班级管理</Link>, "/grade"),
        getItem(<Link to="/student">学生管理</Link>, "/student"),
        getItem(<Link to="/enrollment">报课管理</Link>, "/enrollment"),
        getItem(<Link to="/quit">退课管理</Link>, "/quit"),
      ]
    ),
    getItem(
      "排课管理",
      2,
      <Icon size={20}>
        <CalendarAltRegular />
      </Icon>,
      [getItem(<Link to="/scheduling">排课管理</Link>, "/scheduling"), getItem(<Link to="/adjust">调课管理</Link>, "/adjust")]
    ),
    getItem(
      "教师管理",
      3,
      <Icon size={20}>
        <GraduationCap />
      </Icon>,
      [getItem(<Link to="/teacher">教师管理</Link>, "/teacher"), getItem(<Link to="/salaryList">工资管理</Link>, "/salaryList")]
    ),
    getItem(
      "资金统计",
      4,
      <Icon size={20}>
        <ChartLine />
      </Icon>,
      [getItem(<Link to="/fundList">资金统计</Link>, "/fundList")]
    ),
    getItem(
      "基础管理",
      5,
      <Icon size={20}>
        <Centos />
      </Icon>,
      [getItem(<Link to="/courseManagement">课程管理</Link>, "/courseManagement"), getItem(<Link to="/classRoom">教室管理</Link>, "/classRoom")]
    ),
    getItem(
      "系统管理",
      6,
      <Icon size={20}>
        <Cogs />
      </Icon>,
      [
        getItem(<Link to="/userAdmin">用户管理</Link>, "/userAdmin"),
        getItem(<Link to="/userLogs">操作日志</Link>, "/userLogs"),
        getItem(<Link to="/setting">系统设置</Link>, "/setting"),
      ]
    ),
  ]

  return (
    <Router>
      <Layout>
        <Header style={headerStyle}>
          <div style={{ display: "flex" }}>
            <div>
              <Icon size={30}>
                <Braille />
              </Icon>
            </div>
            <div style={{ fontSize: "20px" }}>天下棋先管理系统</div>
          </div>
        </Header>
        <Layout hasSider>
          <Sider style={siderStyle}>
            <Menu style={{ width: 200 }} defaultSelectedKeys={["/grade"]} defaultOpenKeys={["1"]} mode="inline" items={sidebarItems} />
          </Sider>
          <Content style={contentStyle}>
            <AppRoute />
          </Content>
        </Layout>
      </Layout>
    </Router>
  )
}

export default AppLayout
