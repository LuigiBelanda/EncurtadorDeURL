import { env } from "../../environments/env";

export const config = {
  API_URL: "http://localhost:5000",
  MONGO_CONNECTION: `mongodb+srv://LuigiBelanda:${env.password_db}@encurtadordeurlcluster.q53tw.mongodb.net/URLsSalvasEncurtador?retryWrites=true&w=majority`,
};
