const app = require('./index')
const GRAPHQL_PORT = process.env.PORT || 4000;
const port = GRAPHQL_PORT;

app.listen(port)
console.log(`listening on http://localhost:${port}`)
