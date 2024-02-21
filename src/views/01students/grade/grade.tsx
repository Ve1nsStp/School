import Title from "../../../components/title"
import { Col, Row, Form, Input, Select, Button, Space, Table, Popconfirm } from "antd"
import { useState, useEffect, useCallback } from "react"
import { getBookList, deleteBook } from "@/APi/api"
const { Column, ColumnGroup } = Table
import type { ColumnsType, ColumnGroupType } from "antd/es/table"
export default function Grade() {
  const [bookList, setBookList] = useState([])
  const getBookListApi = useCallback(async () => {
    const res: any = await getBookList({ creator: "赵云" })

    setBookList(res)
  }, [])
  type ColmnsItem = {
    title: string
    dataIndex: string
    key: string
  }

  const columns: ColumnsType<ColmnsItem> | ColumnGroupType<ColmnsItem> = [
    {
      title: "图书ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "图书名称",
      dataIndex: "bookname",
      key: "bookname",
    },
    {
      title: "图书作者",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "图书出版社",
      dataIndex: "publisher",
      key: "publisher",
    },
  ]
  useEffect(() => {
    getBookListApi()
  }, [getBookListApi])
  return (
    <div className="main_box">
      <Title title="班级管理" />
      <div className="form_box" style={{ paddingTop: 5 }}>
        <Form style={{ maxWidth: "100%" }} autoComplete="off" size="large">
          <Row gutter={24} justify={"space-around"}>
            <Col span={5}>
              <Form.Item label="教学科目">
                <Select
                  placeholder="请选择"
                  options={[
                    { value: "象棋", label: "象棋" },
                    { value: "围棋", label: "围棋" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="教学段位">
                <Select
                  placeholder="请选择"
                  options={[
                    { value: "初级", label: "初级" },
                    { value: "中级", label: "中级" },
                    { value: "高级", label: "高级" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="班级选择">
                <Select
                  placeholder="请选择"
                  options={[
                    { value: "2020初级班", label: "2020初级班" },
                    { value: "2020中级班1对2", label: "2020中级班1对2" },
                    { value: "2020高级班", label: "2020高级班" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item label="剩余课时">
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col span={2}>
              <Form.Item>
                <Button type="primary" style={{ width: 88, marginLeft: 10 }} htmlType="submit">
                  查询
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={5}>
              <Form.Item label="授课教师">
                <Select
                  placeholder="请选择"
                  options={[
                    { value: "张惠民老师", label: "张惠民老师" },
                    { value: "向红老师", label: "向红老师" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="是否开课">
                <Select
                  placeholder="请选择"
                  options={[
                    { value: "是", label: "是" },
                    { value: "否", label: "否" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item label="班级编号">
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item label="班级名称">
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col span={2}>
              <Form.Item>
                <Button style={{ width: 88, marginLeft: 10 }}>重置</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="mid_button">
        <Button type="primary" size="large" style={{ width: 100 }}>
          添加班级
        </Button>
      </div>
      <div className="table_box">
        <Table dataSource={bookList} rowKey="bookname">
          <ColumnGroup>
            {columns.map(item => <Column title={item.title} dataIndex={item?.dataIndex} key={item.key} />) as any}

            <Column
              title="操作"
              key="action"
              render={() => (
                <Space>
                  <Button type="primary" onClick={() => {}}>
                    编辑
                  </Button>
                  <Popconfirm
                    title="删除确认"
                    description="删除后无法恢复，是否继续？"
                    onConfirm={async () => {
                      getBookListApi()
                    }}
                    okText="确认"
                    cancelText="取消">
                    <Button type="dashed">删除</Button>
                  </Popconfirm>
                </Space>
              )}
            />
          </ColumnGroup>
        </Table>
      </div>
    </div>
  )
}
