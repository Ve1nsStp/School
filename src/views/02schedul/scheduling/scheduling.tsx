import Title from "../../../components/title"
import styled from "styled-components"

// import interact from "interactjs"
const Classes = styled.div`
  .scheduling {
    margin-top: 20px;
    position: relative;
    display: grid;
    grid-template-columns: 100px repeat(7, 1fr);
    grid-template-rows: repeat(11, 60px);
    height: 1200px;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    & > * {
      border-bottom: 1px solid #000;
      border-right: 1px solid #000;
    }
  }
`

export default function Scheduling() {
  const title = ["", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
  const time: { time: string; start: number; end: number }[] = []
  for (let i = 0; i < 11; i++) {
    time.push({
      time: `${i + 8}:00-${i + 9}:00`,
      start: i + 2,
      end: i + 3,
    })
  }

  let blanks: any[] = []
  blanks.length = 7 * 11
  blanks = [...blanks]

  return (
    <div className="main_box" id="demo">
      <Title title="排课管理" />
      <Classes>
        <div className="scheduling">
          {title.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
          {time.map((item, index) => (
            <div
              key={index}
              style={{
                gridRow: `${item.start}/${item.end}`,
              }}>
              {item.time}
            </div>
          ))}
          {blanks.map((_, index) => (
            <div key={index}></div>
          ))}
        </div>
        <div
          style={{
            width: `200px`,
            height: `200px`,
            backgroundColor: `red`,
          }}></div>
      </Classes>
    </div>
  )
}
