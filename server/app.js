const appFactory = require('./app-factory')
const app = appFactory.getAppFromEnvironment();
const port = process.env.PORT || 5000;

console.log("Now listening on " + port + " in " + app.get('env') + " mode.")
app.listen(port)
