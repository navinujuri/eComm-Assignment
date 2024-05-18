const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const dotenv = require("dotenv").config();
const PORT = 5000;
const path = require("path");

const productRouter = require("./routes/productRoutes");

app.use(express.json());

const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use("/api/products", productRouter);



// swagger


const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swaggerConfig');



app.use('/api/products', productRouter);

// Swagger UI setup

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));




app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});
