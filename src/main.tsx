import ReactDOM from "react-dom/client"
import zhCN from "antd/locale/zh_CN"
import { ConfigProvider } from "antd"
import Mylayout from "./Layout"
import "./index.css"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    locale={zhCN}
    theme={{
      token: {
        colorPrimary: "#f0a6a9",
        colorText: "#000",
      },
    }}>
    <Mylayout />
  </ConfigProvider>
)
