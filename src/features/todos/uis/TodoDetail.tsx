"use client";
import { useTodoDetail } from "../hooks/useTodoDetail";

export const TodoDetail = ({ id }: { id: string }) => {
  const {} = useTodoDetail(id);

  return null;
};
