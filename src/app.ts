import express from 'express';
import { initRestRoutes } from './api/routes';

const app = express();
const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Server Running here 👉 https://localhost:${port}`);
	initRestRoutes(app);
});
