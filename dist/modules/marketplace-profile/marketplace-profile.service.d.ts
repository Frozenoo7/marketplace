import { MarketplaceProfileRepository } from "repository/index";
import { CreateMarketplaceProfileDto } from "./dto/index";
import { IMarketplaceProfileResponse } from "./response/index";
import { ISuccessReponse } from "common/responses/index";
export declare class MarketplaceProfileService {
    private readonly MarketplaceProfileRepository;
    constructor(MarketplaceProfileRepository: MarketplaceProfileRepository);
    createMarketplaceProfile(createMarketplaceProfileDto: CreateMarketplaceProfileDto): Promise<ISuccessReponse>;
    findAllMarketplaceProfilees(): Promise<IMarketplaceProfileResponse[]>;
    findMarketplaceProfileById(id: string): Promise<IMarketplaceProfileResponse>;
    updateMarketplaceProfile(id: string, updateMarketplaceProfileDto: CreateMarketplaceProfileDto): Promise<ISuccessReponse>;
    deleteMarketplaceProfile(id: string): Promise<ISuccessReponse>;
    private transformToMarketplaceProfileResponse;
}
