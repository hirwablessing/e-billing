import app from "./utils/app";

const server = app();

server.listen(8000, () => {
  console.log("Server started on port 8000");
});
