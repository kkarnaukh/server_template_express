import express from "express";
import {json, urlencoded} from "body-parser";
import {appRouter} from "./src/modules/common/health-check/router";

export function createApp(): express.Application {
    const app = express();
    app.use(json({limit: '50mb'}));
    app.use(urlencoded({ extended: false, limit: '50mb' }));

    app.use(appRouter());

    return app;
}