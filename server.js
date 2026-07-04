

const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>Fadini AI está funcionando!</h1>");
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
