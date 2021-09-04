import { createContext } from "react";

const WorkerGridContext = createContext([
  {
    email: "george@mail.com",
    fullName: "Jordi Arnau",
    password: "132456",
    profileImage: [],
    role: "employee",
  },
]);
