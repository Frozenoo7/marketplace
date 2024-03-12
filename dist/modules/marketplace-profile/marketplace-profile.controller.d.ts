import { CreateMarketplaceProfileDto } from "./dto/create-marketplace-profile.dto";
import { MarketplaceProfileService } from "./marketplace-profile.service";
export declare class MarketplaceProfileController {
    private readonly marketplaceProfileService;
    constructor(marketplaceProfileService: MarketplaceProfileService);
    createBusiness(createBusinessDto: CreateMarketplaceProfileDto): Promise<import("../../common/responses").ISuccessReponse>;
    findAllBusiness(): Promise<import("./response").IMarketplaceProfileResponse[]>;
    findBusinessById(id: string): Promise<import("./response").IMarketplaceProfileResponse>;
    updateBusiness(id: string, updateBusinessDto: CreateMarketplaceProfileDto): Promise<import("../../common/responses").ISuccessReponse>;
    deleteBusiness(id: string): Promise<import("../../common/responses").ISuccessReponse>;
}
