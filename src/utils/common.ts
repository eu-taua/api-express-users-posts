import { Ipostcard, Iuser } from "./interfaces";

export const mergePostUsers = (users: Iuser[], posts: Ipostcard[]) =>
  users.forEach((u) => {
    const idUsuario = u.id;
    const nomeUsuario = u.name;
    const empresa = u.company.name;

    posts.forEach((p) => {
      if (idUsuario === p.userId) {
        p.name = nomeUsuario;
        p.groupName = empresa;
      }
    });
  });
