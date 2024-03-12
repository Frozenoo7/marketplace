"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IProductResponse = void 0;
const openapi = require("@nestjs/swagger");
class IProductResponse {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, isAvailable: { required: true, type: () => Boolean }, description: { required: false, type: () => String }, price: { required: false, type: () => Number }, discountedPrice: { required: false, type: () => Number }, weight: { required: false, type: () => Number }, productType: { required: false, type: () => String }, images: { required: false, type: () => [String] } };
    }
}
exports.IProductResponse = IProductResponse;
//# sourceMappingURL=product.response.js.map