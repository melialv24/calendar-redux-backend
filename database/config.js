const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB Online");
  } catch (error) {
    console.log(error);
<<<<<<< HEAD
    throw new Error("Error a la hora de inicializar BD");
  }
};

module.exports = {
  dbConnection,
};
=======
    throw new Error("Error al inicializar la BD");
  }
};

module.exports = { dbConnection };
>>>>>>> 25edf5e0421b39b8fa217b125b2f3eb29777a50d
