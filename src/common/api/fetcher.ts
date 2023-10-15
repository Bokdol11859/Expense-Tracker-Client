import { Expense } from "../entities/expense.entity";
import { AxiosInstance } from "./axios";

export const getAllExpense = async (): Promise<Expense[]> => {
  return (await AxiosInstance.get("/expense")).data;
};

export const getExpenseById = async (id: string): Promise<Expense> => {
  return (await AxiosInstance.get(`/expense/${id}`)).data;
};

export const createExpense = async (
  expense: Omit<Expense, "id">
): Promise<Expense> => {
  return (await AxiosInstance.post("/expense", expense)).data;
};

export const updateExpense = async (
  id: string,
  expense: Partial<Expense>
): Promise<Expense> => {
  return (await AxiosInstance.patch(`/expense/${id}`, expense)).data;
};

export const deleteExpense = async (id: string): Promise<Expense> => {
  return (await AxiosInstance.delete(`/expense/${id}`)).data;
};
