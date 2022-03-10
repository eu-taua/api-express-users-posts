import axios from "axios";
import { Request, Response } from "express";
import { mergePostUsers } from "../utils/common";
import { Ipostcard, Iuser } from "../utils/interfaces";

export const getAll = async (req: Request, res: Response) => {
  try {
    const { data: posts }: { data: Ipostcard[] } = await axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );

    const { data: users }: { data: Iuser[] } = await axios.get(
      "http://jsonplaceholder.typicode.com/users"
    );

    mergePostUsers(users, posts);

    res.send(posts);
  } catch (error) {
    throw error;
  }
};
