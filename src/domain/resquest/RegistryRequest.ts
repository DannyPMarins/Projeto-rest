import { MeasureType } from "../model/MeasureType";

export class RegistryRequest {
  customerId: string;
  image: string;
  measureDateTime: Date;
  measureType: MeasureType;

  constructor(registry: RegistryRequest) {
    this.customerId = registry.customerId;
    this.image = registry.image;
    this.measureDateTime = registry.measureDateTime;
    this.measureType = registry.measureType;
  }
}