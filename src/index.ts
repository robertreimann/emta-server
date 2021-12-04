import express, { Request, Response, Application } from 'express';

const app = express();
const port = process.env.PORT || 8080;
app.get("/", (req: Request, res: Response) => {
    res.send("Wassup");
});
app.listen(port, () => {
    `Server Running here 👉 https://localhost:${port}`;
});