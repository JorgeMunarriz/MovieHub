import config from "./config/config";
import app from "./server";
const PORT = config.app.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);

});
