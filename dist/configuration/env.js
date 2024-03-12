"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = exports.env = void 0;
require("dotenv/config");
const config = {
    app: {
        env: process.env.ENV,
        port: parseInt(process.env.APP_PORT, 10),
        kaha_api_base_link: process.env.KAHA_API_LINK,
    },
    database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME,
        username: process.env.DB_USER_NAME,
        password: process.env.DB_PASSWORD,
    },
    jwt: {
        secret: process.env.JWT_SECRET_TOKEN,
    },
};
exports.env = Object.freeze(config);
const environment = () => ({ ...exports.env });
exports.environment = environment;
//# sourceMappingURL=env.js.map