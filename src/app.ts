import express from 'express';
import { initializeRESTRoutes } from './api/routes';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8080;
app.use(cors({ origin: '*'}));
app.listen(port, () => {
	console.log(`Server Running here 👉 https://localhost:${port}`);
	initializeRESTRoutes(app);
});
