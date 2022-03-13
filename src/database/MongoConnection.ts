import mongoose from "mongoose";
import { config } from "../config/Constants";

export class MongoConnection {
  public async connect(): Promise<void> {
    try {
      await mongoose.connect(config.MONGO_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database connect");
    } catch (err) {
      let errorMessage = "ERROR";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      console.log(errorMessage);
      process.exit(1);
    }
  }
}
