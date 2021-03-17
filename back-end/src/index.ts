import express from 'express';
import cors from 'cors';
import router from './API/TMDb_Routes';
import HelloWord from "./API/controller_hw"

const app = express();
const hw_msg = new HelloWord();

app.use(express.json());

app.use(cors({
	origin:"http://localhost:3333",
	methods:['GET', 'PUT', 'POST'],
}));

app.use(router);

app.get("/hsTest", hw_msg.show_hs);

app.get("/", (request, response) => {
	return response.json({
		message: "MVP - Backend Commit Jr.",
		author: "Pablo Felipe"
	});
});

app.listen(3333);
