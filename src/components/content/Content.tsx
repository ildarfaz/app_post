import { FC } from "react"
import { IPosts } from "../../types/posts"
import { Table } from "../ui/table/Table"

export const Content: FC<IPosts> = ({ posts }) => {

    return (
        <div>
            <Table posts = {posts}/>
        </div>
    )
}