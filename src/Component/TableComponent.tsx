import React, {FC} from "react";
import s from "./TableComponent.module.css"

type PropsType = {
    dataUrl: string
}


export const TableComponent: FC<PropsType> = ({dataUrl}) => {



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
    const tableRow = data.dataTable.map((r) => <TableRow r={r}/>)

    return <div>
        <table className={s.table}  cellPadding="0">
            <TableHeader r={data.dataTable[0]}/>
            {tableRow}
        </table>
    </div>
}

type TableCellType = {
    value: string
}
const TableCell: FC<TableCellType> = ({value}) => {
    return <td className={s.cell}>
        {value}
    </td>
}

type TableRowType = {
    r: {
        number: string,
        name: string,
        age: string,
        city: string
    }
}
const TableRow: FC<TableRowType> = ({r}) => {
    const tableCell = Object.entries(r).map((R)=><TableCell value={R[1]}/>)
    return  <tr className={s.row}>
            {tableCell}
        </tr>

}
type TableHeaderType = {
    r: {
        number: string,
        name: string,
        age: string,
        city: string
    }
}
const TableHeader: FC<TableHeaderType> = ({r}) => {
    const tableCell = Object.entries(r).map((R)=><TableCell value={R[0]}/>)
    return <tr className={s.header}>
        {tableCell}
    </tr>
}
