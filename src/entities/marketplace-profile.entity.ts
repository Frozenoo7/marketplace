import { Entity, Column, Index } from "typeorm";
import { Point } from "geojson";
import { BaseEntity } from "entities/base.entity";

@Entity({ name: "marketplaceProfile" })
export class MarketplaceProfileEntity extends BaseEntity {
  @Column({ length: 255 })
  name: string;

  @Index({ spatial: true })
  @Column({
    type: "geography",
    spatialFeatureType: "Point",
    srid: 6207,
    nullable: true,
  })
  public location: Point;

  @Column({ length: 255 })
  entityId: string;

  @Column({ length: 255 })
  type: string;

  @Column()
  createdBy: string;
}
