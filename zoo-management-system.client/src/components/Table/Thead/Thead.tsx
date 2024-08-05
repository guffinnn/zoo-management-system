import { JSX } from "react"
import "./Thead.css"
import { TableProps } from "../Table.tsx"

function Thead({ columns }: Pick<TableProps, "columns">): JSX.Element { // (*)
    return (
        <tr>
            {columns.map((column, index) => (
                <th key={index}>
                    <p className={`head__cell__content ${column.type}`}>
                        {column.name}
                    </p>
                </th>
            ))}
        </tr>
    )
}

export default Thead

// (*) - Pick<Type, Keys> - take only columns type in TableProps