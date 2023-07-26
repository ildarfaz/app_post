import { Dispatch, SetStateAction } from "react";
import { IPosts } from "./posts";

export enum enumDirection {
    "ASC" = "asc", "DESC" = "desc"
}
export interface IContent extends IPosts {
    sort: {
        column: string;
        direction: enumDirection;
    },
    onChangeSort: Dispatch<SetStateAction<{ column: string; direction: enumDirection; }>>;
}

export interface ITable extends IContent {
    
}