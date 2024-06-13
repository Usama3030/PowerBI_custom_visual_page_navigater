import { Dispatch, SetStateAction } from "react";
import { appState } from "../Types/Types";
export type contextType = {
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
    state: appState;
};
export declare const Context: import("react").Context<contextType>;
