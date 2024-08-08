import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "Divyansh",
    lastName: "Sharma",
    email: "divyanshsharma@apple.com",
    password: "divyanshsharma",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
