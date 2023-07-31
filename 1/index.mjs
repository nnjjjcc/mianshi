import express from "express";
const app = express();
import fs from "fs-then";

// 写接口
// app.请求方式('接口地址', '带有req、res参数的处理函数');
// app.get('/api/student', (req, res) => {});
// app.post();
// app.delete();
// app.put();
app.listen(3000, () => console.log("启动了"));
app.get("/api/getbooks", async (req, res) => {
  const data = await fs.readFile("./数据.json", "utf-8");
  res.send({ status: 0, message: "获取图书成功", data: JSON.parse(data) });
});
