import { Response } from "express";
import { RegistryRequest } from "../domain/resquest/RegistryRequest";
import { repository } from "./Controller";


export function badRequest(response: Response, registry: RegistryRequest) {
  if (!registry.measureDateTime) {
    response.status(400).json({
      error_code: "INVALID_DATA",
      error_description: "Data inválida",
    });
    return true;
  }
}

export async function alreadyDone(
  response: Response,
  registry: RegistryRequest
) {
  if (await repository.alreadyDone(registry.customerId)) {
    response.status(409).json({
      error_code: "DOUBLE_REPORT",
      error_description: "Leitura do mês já foi realizada",
    });
    return true;
  }
}
