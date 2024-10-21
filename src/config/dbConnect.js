import { connect } from "mongoose";

const dbConnect = async () => {
  try {
    const mongoDBconnection = await connect(process.env.CONNECTION_STRING);
    console.log(`Database connected : ${mongoDBconnection.connection.host}`);
  } catch (error) {
    console.log(`Database connection error: ${error}`);
    process.exit(1);
  }
};

export default dbConnect;
