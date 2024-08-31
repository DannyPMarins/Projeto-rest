import { MeasureType } from "../model/MeasureType";

export class Registry {
  measureNumber: number;
  measureDateTime: Date;
  measureType: MeasureType;

  constructor(meter: Registry) {
    this.measureNumber = meter.measureNumber;
    this.measureDateTime = meter.measureDateTime;
    this.measureType = meter.measureType;
  }
}
