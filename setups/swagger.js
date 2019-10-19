const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

exports.setup = (app) => {
  const swaggerOptions = {
      swaggerDefinition: {
        info: {
          title: "Kakshya API",
          description: "Kakshya API Information",
          servers: ["http://localhost:3001"]
        }
      },
      apis: ["./routes/*.js"]
    }
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}