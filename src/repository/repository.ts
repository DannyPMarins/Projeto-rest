import { PrismaClient } from "@prisma/client";
import { Registry } from "../domain/entity/Registry";

export class Repository {
  private prisma = new PrismaClient();

  async save(data: Registry) {
    return this.prisma.meter.create({
      data: {
        measureNumber: data.measureNumber,
        measureDateTime: data.measureDateTime,
        measureType: data.measureType,
      },
    });
  }

  async alreadyDone(id: string) {
    const registries = this.prisma.meter.findMany();
    const currentMonth = new Date().getMonth();

    (await registries).forEach((registry) => {
      const registryMeasureMonth = registry.measureDateTime.getMonth();
      if (registryMeasureMonth === currentMonth) {
        return true;
      }
    });

    return false;
  }

  async findById(id: string) {
    return this.prisma.meter.findUnique({
      where: { id: id },
    });
  }
}
