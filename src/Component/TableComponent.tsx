import React, {FC, useEffect, useRef, useState} from "react";
import t from "./Table.module.css"

type TableComponentPropsType = {
    dataUrl: string
}
export const TableComponent: FC<TableComponentPropsType> = ({dataUrl}) => {
    const headRef = useRef<HTMLTableSectionElement>(null)
    const [top, setTop] = useState(0)
    const data = {
        dataHeader: {
            number: "Номер",
            age: "Возраст",
            name: "Имя",
            city: "Город",
            city2: "Город",
            city3: "Город",
            city4: "Город",
            city5: "Город",
            city6: "Город",
            city7: "Город",
        },
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
                number: "5",
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
                number: "6",
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
                number: "7",
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
                number: "8",
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
                number: "9",
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
                number: "10",
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
                number: "11",
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
                number: "12",
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
                number: "13",
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
                number: "14",
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
    const headerRow = data.dataHeader
    type KeysRowType = keyof typeof headerRow;
    type RowType = typeof headerRow;

    type TableRowPropsType = {
        r: RowType
        rowHeaderName: Array<KeysRowType>
    }

    const TableRow: FC<TableRowPropsType> = React.memo(  ({r, rowHeaderName}) => {
        const tableCell = rowHeaderName.map((R) => <TableCell key={r[R][0]} value={r[R]}/>)
        return <tr>
            {tableCell}
        </tr>
    })

    const rowHeaderName = Object.entries(headerRow).map((R) => R[0]) as Array<KeysRowType>


    const tableRow = data.dataTable.map((r) => <TableRow key={r[rowHeaderName[0]]} r={r} rowHeaderName={rowHeaderName}/>)

    const handleScroll = (event: Event) => {
        const ref = headRef
        // @ts-ignore
        const target = event.currentTarget.scrollY
        /*console.log(target)*/
        if (ref.current &&
            ref.current.parentElement
            && ref.current.parentElement.offsetTop <target
            && ref.current.parentElement.offsetTop + ref.current.parentElement.offsetHeight -ref.current.clientHeight > target) {
            /*console.log(ref.current.parentElement.offsetTop)*/
            setTop(target- ref.current.parentElement.offsetTop)
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return <table className={t.tableFixedHead} cellPadding="0">
        <thead ref={headRef} style={{position: "relative", top: top, backgroundColor: "moccasin"}}>
        <TableHeaderRow r={headerRow}/>
        </thead>
        <tbody>
        {tableRow}
        </tbody>
    </table>
}

function TableRow1<RowTypes extends Object>  (r:RowTypes, rowHeaderName:(Array<Extract<keyof RowTypes,string>>))  {
    const tableCell = rowHeaderName.map((R) => r[R])
    return <tr>
        {tableCell}
    </tr>
})




type TableHeaderPropsType = {
    r: {
        number: string,
        name: string,
        age: string,
        city: string
    }
}
const TableHeaderRow: FC<TableHeaderPropsType> = React.memo(  ({r}) => {
    const tableCell = Object.entries(r).map((R) => <TableCell key={R[1]} value={R[1]}/>)
    return <tr>
        {tableCell}
    </tr>
})



function getTableCell <T extends string> (value:T){
    return <td>
        {value}
    </td>
}



type TableCellPropsType = {
    value: string
}
const TableCell: FC<TableCellPropsType> = React.memo( ({value}) => {
    return <td>
        {value}
    </td>
})


