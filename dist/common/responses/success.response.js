"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISuccessReponse = void 0;
const openapi = require("@nestjs/swagger");
class ISuccessReponse {
    static _OPENAPI_METADATA_FACTORY() {
        return { message: { required: true, type: () => String } };
    }
}
exports.ISuccessReponse = ISuccessReponse;
//# sourceMappingURL=success.response.js.map