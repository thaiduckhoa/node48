// let check = "welcome nodejs 48";
// console.log(check);
// import thư viện express
import express from "express";

// khởi tạo ứng dụng express
const app = express();

//Khai báo API đơn giản
//param1: đường dẫn API. Kiểu string
//param2: function xử lý API
//domain default của BE: http://localhost:3000/
// => http://localhost:3000/
// req: nhận yêu cầu từ client (frontend, postman,..)
// res: trả về kết quả cho client
app.get('/', (req, res) => {
    res.send('Welcome to NodeJS 48');
})

app.get('/test', (req, res) => {
    res.send('Test API 123456');
})

// để BE luôn có code mới thì => nodemon

// khai báo port mặc định cho BackEnd
const port = 3000;
// () => {}: arrow function
app.listen(port,() => {
    console.log(`Server is running on port ${port} `);
})