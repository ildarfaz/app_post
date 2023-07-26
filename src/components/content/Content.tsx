import { FC } from "react"
import { Table } from "../ui/table/Table"
import { IContent } from "../../types/common"

export const Content: FC<IContent> = ({ posts, sort, onChangeSort }) => {

    return (
        <div>
            <Table posts = {posts} sort = {sort} onChangeSort = {onChangeSort}/>
        </div>
    )
}