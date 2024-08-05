import { JSX } from "react"
import "./Table.css"
import { Animal } from "../../pages/Animals/Animals.tsx"
import Thead from "./Thead/Thead.tsx"
import Tbody from "./Tbody/Tbody.tsx"

interface Column {
    name: string,
    type: string
}

export interface TableProps {
    columns: Column[],
    data: Animal[]
}

function Table({ columns, data }: TableProps): JSX.Element {
    return (
        <table className="table">
            <thead className="thead">
                {/*TABLE HEAD*/}
                <Thead columns={columns} />
            </thead>
            <tbody className="tbody">
                {/*TABLE CONTENT*/}
                <Tbody columns={columns} data={data} />
            </tbody>
        </table>
    )
}

export default Table