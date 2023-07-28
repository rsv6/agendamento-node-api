import express from 'express';
import { AppRouters } from './routers';

export class App {
    public app: express.Application = express();
    public router = new AppRouters();

    start() {
        this.app.use(
            express.urlencoded({ extended: true }), 
            express.json()
        )
        this.app.use(this.router.start());

        this.app.listen(8081, () => {
            console.log("Server running on port 8081");
        })
    }

}