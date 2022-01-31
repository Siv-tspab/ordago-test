import { User } from "../../models/User";

export const useSort = (users: User[], sortLabel: string, sortDirection: boolean) => {
    return users?.sort((a, b) => {
        // If label is in a subtree
        if (sortLabel.includes(".")) {

            let splitedLabel = sortLabel.split(".")
            let obj1 = a[splitedLabel[0]][splitedLabel[1]];
            let obj2 = b[splitedLabel[0]][splitedLabel[1]];

            if (sortDirection) {
                return obj1 > obj2 ? 1 : -1
            }
            return obj1 < obj2 ? 1 : -1
        }

        // If label is on first level
        let obj1 = a[sortLabel];
        let obj2 = b[sortLabel];

        if (sortDirection) {
            return obj1 > obj2 ? 1 : -1
        }
        return obj1 < obj2 ? 1 : -1
    })
}