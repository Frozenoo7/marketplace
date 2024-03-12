import { Point } from "geojson";
import { BaseEntity } from "entities/base.entity";
export declare class MarketplaceProfileEntity extends BaseEntity {
    name: string;
    location: Point;
    entityId: string;
    type: string;
    createdBy: string;
}
