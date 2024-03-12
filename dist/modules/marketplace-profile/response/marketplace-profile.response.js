"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMarketplaceProfileResponse = void 0;
const openapi = require("@nestjs/swagger");
class IMarketplaceProfileResponse {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, location: { required: true, type: () => Object }, entityId: { required: true, type: () => String }, type: { required: true, type: () => String }, createdBy: { required: true, type: () => String } };
    }
}
exports.IMarketplaceProfileResponse = IMarketplaceProfileResponse;
//# sourceMappingURL=marketplace-profile.response.js.map