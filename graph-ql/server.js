const express = require("express");
const app = express();
const PORT = 4047;

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

app.use(express.json());

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});
