// This file is for the start of the server
import app from './app.js';
import { connectDB }  from './database.js';

connectDB();

app.listen(app.get('port'), () => {
    console.log("Server running on port", app.get('port'));
});
