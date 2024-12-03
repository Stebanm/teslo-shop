import mongoose from "mongoose";

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
  isConnected: 0,
};

// export const connect = async () => {
//   if (mongoConnection.isConnected) {
//     console.log("Ya estabamos conectados");
//     return;
//   }

//   if (mongoose.connections.length > 0) {
//     mongoConnection.isConnected = mongoose.connections[0].readyState;

//     if (mongoConnection.isConnected === 1) {
//       console.log("Usando conexión anterior");
//       return;
//     }

//     await mongoose.disconnect();
//   }

//   await mongoose.connect(process.env.MONGO_URL || "");
//   mongoConnection.isConnected = 1;
//   console.log("Conectado a MongoDB:", process.env.MONGO_URL);
// };

export const connect = async () => {
  if (mongoConnection.isConnected) {
    console.log("Ya estamos conectados a MongoDB");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) {
      console.log("Usando conexión existente a MongoDB");
      return;
    }

    await mongoose.disconnect();
  }

  try {
    await mongoose.connect(process.env.MONGO_URL || "", {
      dbName: "teslodb",
    });
    mongoConnection.isConnected = 1;
    console.log("Conectado a MongoDB:", process.env.MONGO_URL);
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
    throw new Error("Error al conectar a MongoDB");
  }
};

export const disconnect = async () => {
  // Mantener conexión activa en modo estático
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test"
  ) {
    return;
  }

  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  mongoConnection.isConnected = 0;
  console.log("Desconectado de MongoDB");
};
