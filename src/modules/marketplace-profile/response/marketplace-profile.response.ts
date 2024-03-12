import { Point } from "geojson";

export class IMarketplaceProfileResponse {
  id: string;
  name: string;
  location: Point;
  entityId: string;
  type: string;
  createdBy: string;
}
