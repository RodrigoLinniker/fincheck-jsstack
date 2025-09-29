import type { BankAccount } from "../../entities/backAccount";
import { httpClient } from "../httpClient";

type BankAccountsResponse = Array<BankAccount>;

export async function getAll() {
  const { data } = await httpClient.get<BankAccountsResponse>("/bank-accounts");

  return data;
}
