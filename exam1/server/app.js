require("dotenv").config({ path: "./mysql/db.env" });
const express = require("express");
const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(express.urlencoded({ extended : false}));  // 폼태그 사용할때 씀.

const server = app.listen(3000, () => {
  console.log("Server started. port 3000.");
});

const db = require("./db.js");
// 전체조회
app.get("/boards", async (request, res) => {
  res.send(await db.connection("boardList"));
});

// 단건조회
// boards 뒤에 :bno 붙혀서 같이 보냄
app.get("/boards/:bno", async (request, res) => {
  res.send((await db.connection("boardInfo", request.params.bno))[0]); // get 방식은 params로 접근함 
});

// rest api 기준
// 등록 : post
app.post("/boards", async (request, res) => {
  let data = request.body.param;  // param 방식이라 body로 받아와야함
  res.send((await db.connection("boardInsert", data)));
});

// 수정
app.put("/boards/:bno", async (request, res) => {
  let data = [request.body.param, request.params.bno];
  res.send((await db.connection("boardUpdate", data)));
});

// 해당 개시글의 댓글
// 하나의 라우팅에서 키값을 계속 보내주면 데이터 처리 편함
app.get("/comments", async (request, res) => {
  // querystring => ?key=value&key=value...
  let data = request.query.bno;   // 쿼리로 우리가 넘겨줄 키값 
  res.send((await db.connection("commentList", data)));
});

