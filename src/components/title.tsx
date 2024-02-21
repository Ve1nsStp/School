import { Col, Row } from "antd"
import { Icon } from "@ricons/utils"
import { Spinner } from "@ricons/fa"
export default function Title(props: { title: string }) {
  return (
    <Row justify={"space-between"} style={{ borderBottom: "1px solid #f0a6a9" }}>
      <Col span={4} style={{ fontSize: 19, fontWeight: "700", color: "#ffc5c7" }}>
        {props.title}
      </Col>
      <Col span={1}>
        <Icon size={20}>
          <Spinner />
        </Icon>
      </Col>
    </Row>
  )
}
