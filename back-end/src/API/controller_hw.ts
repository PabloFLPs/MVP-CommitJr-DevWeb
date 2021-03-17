import {Request, Response} from 'express';

export default class HelloWorld{
    show_hs(req: Request, res: Response){
        return res.json({
            helloWord: "Hello Word",
            App: "NodeJs App"
        });
    }
}
