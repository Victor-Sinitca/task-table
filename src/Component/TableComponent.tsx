import React, {FC} from "react";
import s from "./TableComponent.module.css"
import t from "./Table.module.css"

type TableComponentPropsType = {
    dataUrl: string
}
export const TableComponent: FC<TableComponentPropsType> = ({dataUrl}) => {
    const data = {
        dataTable: [
            {
                number: "1",
                name: "Dima111",
                age: "28",
                city: "Minsk",
                city2: "Minsk",
                city3: "Minsk",
                city4: "Minsk",
                city5: "Minsk",
                city6: "Minsk",
                city7: "Minsk",
            },
            {
                number: "2",
                name: "Dima222",
                age: "244",
                city: "Minsk22",
                city2: "Minsk",
                city3: "Minsk",
                city4: "Minsk",
                city5: "Minsk",
                city6: "Minsk",
                city7: "Minsk",
            },
            {
                number: "3",
                name: "Dima333",
                age: "25",
                city: "Minsk33",
                city2: "Minsk",
                city3: "Minsk",
                city4: "Minsk",
                city5: "Minsk",
                city6: "Minsk",
                city7: "Minsk",
            },
            {
                number: "4",
                name: "Dima444",
                age: "26",
                city: "Minsk44",
                city2: "Minsk",
                city3: "Minsk",
                city4: "Minsk",
                city5: "Minsk",
                city6: "Minsk",
                city7: "Minsk",
            },
            {
                number: "2",
                name: "Dima222",
                age: "244",
                city: "Minsk22",
                city2: "Minsk",
                city3: "Minsk",
                city4: "Minsk",
                city5: "Minsk",
                city6: "Minsk",
                city7: "Minsk",
            },
            {
                number: "2",
                name: "Dima222",
                age: "244",
                city: "Minsk22",
                city2: "Minsk",
                city3: "Minsk",
                city4: "Minsk",
                city5: "Minsk",
                city6: "Minsk",
                city7: "Minsk",
            },
            {
                number: "2",
                name: "Dima222",
                age: "244",
                city: "Minsk22",
                city2: "Minsk",
                city3: "Minsk",
                city4: "Minsk",
                city5: "Minsk",
                city6: "Minsk",
                city7: "Minsk",
            },
            {
                number: "2",
                name: "Dima222",
                age: "244",
                city: "Minsk22",
                city2: "Minsk",
                city3: "Minsk",
                city4: "Minsk",
                city5: "Minsk",
                city6: "Minsk",
                city7: "Minsk",
            },
            {
                number: "2",
                name: "Dima222",
                age: "244",
                city: "Minsk22",
                city2: "Minsk",
                city3: "Minsk",
                city4: "Minsk",
                city5: "Minsk",
                city6: "Minsk",
                city7: "Minsk",
            },
            {
                number: "2",
                name: "Dima222",
                age: "244",
                city: "Minsk22",
                city2: "Minsk",
                city3: "Minsk",
                city4: "Minsk",
                city5: "Minsk",
                city6: "Minsk",
                city7: "Minsk",
            },
            {
                number: "2",
                name: "Dima222",
                age: "244",
                city: "Minsk22",
                city2: "Minsk",
                city3: "Minsk",
                city4: "Minsk",
                city5: "Minsk",
                city6: "Minsk",
                city7: "Minsk",
            },
            {
                number: "2",
                name: "Dima222",
                age: "244",
                city: "Minsk22",
                city2: "Minsk",
                city3: "Minsk",
                city4: "Minsk",
                city5: "Minsk",
                city6: "Minsk",
                city7: "Minsk",
            },
            {
                number: "2",
                name: "Dima222",
                age: "244",
                city: "Minsk22",
                city2: "Minsk",
                city3: "Minsk",
                city4: "Minsk",
                city5: "Minsk",
                city6: "Minsk",
                city7: "Minsk",
            },
            {
                number: "2",
                name: "Dima222",
                age: "244",
                city: "Minsk22",
                city2: "Minsk",
                city3: "Minsk",
                city4: "Minsk",
                city5: "Minsk",
                city6: "Minsk",
                city7: "Minsk",
            },


        ]
    }

    const headerRow = data.dataTable[0]
    type KeysRowType = keyof typeof headerRow;
    type RowType = typeof headerRow;
    type TableRowPropsType = {
        r: RowType
        rowHeaderName: Array<KeysRowType>
    }
    const TableRow: FC<TableRowPropsType> = ({r, rowHeaderName}) => {
        const tableCell = rowHeaderName.map((R) => <TableCell value={r[R]}/>)
        return <tr className={s.row}>
            {tableCell}
        </tr>
    }
    const rowHeaderName = Object.entries(headerRow).map((R) => R[0]) as Array<KeysRowType>
    const tableRow = data.dataTable.map((r) => <TableRow r={r} rowHeaderName={rowHeaderName}/>)

    return <div style={{overflow: "auto"}}>
        <table className={t.tableFixedHead} cellPadding="0">
            <thead>
            <TableHeaderRow r={headerRow}/>
            </thead>
            <tbody>
            {tableRow}
            </tbody>
        </table>
    </div>
}

type TableHeaderPropsType = {
    r: {
        number: string,
        name: string,
        age: string,
        city: string
    }
}
const TableHeaderRow: FC<TableHeaderPropsType> = ({r}) => {
    const tableCell = Object.entries(r).map((R) => <TableCell value={R[0]}/>)
    return <tr className={s.header}>
        {tableCell}
    </tr>
}


type TableCellPropsType = {
    value: string
}
const TableCell: FC<TableCellPropsType> = ({value}) => {
    return <td className={s.cell}>
        {value}
    </td>
}


