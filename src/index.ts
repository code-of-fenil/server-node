import app from "./configs/express";
import ENV from "./configs/env";

app.listen(3001, () => {
  console.log(
    `⚡️⚡️ Server is running at http://localhost:${ENV.PORT} ⚡️⚡️`
  );
});
