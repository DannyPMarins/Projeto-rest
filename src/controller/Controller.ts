import { Request, Response } from "express";
import { Repository } from "../repository/repository";
import { Registry } from "../domain/entity/Registry";
import { RegistryRequest } from "../domain/resquest/RegistryRequest";
import { alreadyDone, badRequest } from "./utils";

export const repository: Repository = new Repository();

export class Controller {
  async upload(request: Request, response: Response) {
    const registry = new RegistryRequest(request.body);

    const api = 1;

    const entity = new Registry({
      measureNumber: api,
      measureDateTime: new Date(registry.measureDateTime),
      measureType: registry.measureType,
    });

    if (badRequest(response, registry)) {
      return;
    }
    if (await alreadyDone(response, registry)) {
      return;
    }

    response.status(200).json(await repository.save(entity));
  }

  async confirm(request: Request, response: Response) {
    const payload = {
      measureId: request.body.measureId,
      confirmedValue: request.body.confirmedValue,
    };

    const entity = (await repository.findById(payload.measureId)) as Registry;

    //400

    if (!entity) {
      response
        .status(404)
        .json({
          error_code: "MEASURE_NOT_FOUND",
          error_description: "Leitura do mês já realizada",
        });
    }

    entity.measureNumber = payload.confirmedValue;

    response.status(200).json(await repository.save(entity));
  }
}
