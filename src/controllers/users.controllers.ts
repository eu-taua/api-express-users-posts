import axios from "axios";
import { Request, Response } from "express";
import { Iuser } from "../utils/interfaces";
export const getAll = async (req: Request, res: Response) => {
  const { data: users }: { data: Iuser[] } = await axios.get(
    "http://jsonplaceholder.typicode.com/users"
  );

  res.send(users);
};
