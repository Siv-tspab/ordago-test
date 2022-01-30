import { User } from "../models/User";

type Order = "DESC" | "ASC";

export const useReorder = (users: User[], label: string, order: Order = "DESC"): User[] => {
    const reorderedUsers: User[] = users;

    // let currentValue: string | number = users[0]["gender"] ?? "";
    for (let i = 0; i < users.length; i++) {
    //     currentValue = users[i]["gender"];
    //     console.log(users[i]["gender"] > "female");
    //     if (users[i]["gender"] > "female") {
    //         reorderedUsers.push(users[i]);
    //     }
        
    }
    console.log(users);
    
    return reorderedUsers;
};
