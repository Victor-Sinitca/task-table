import React, {FC, useEffect, useRef, useState,} from "react";
import s from "./Table.module.css"
import {v1} from "uuid"
import {HeaderObjectType, TableRowType} from "./TableContainer";


type TableComponentPropsType = {
    dataTable: Array<TableRowType>
    dataHeader?: Array<HeaderObjectType> | null
}
export const TableComponent: FC<TableComponentPropsType> = React.memo(({dataTable, dataHeader}) => {
    //ссылка на главную таблицу
    const refOnTable = useRef<HTMLDivElement>(null)
    //ссылка на заголовок
    const refOnHeaderTable = useRef<HTMLDivElement>(null)
    // стили для установки сдвига
    const [styleData, setStyleData] = useState({
        top: 0,
        display: "none" as "none" | "block"
    })
    //отслеживание скрола страницы
    const handleScroll = (event: Event) => {
        //ссылка на таблицу
        const ref = refOnTable
        //ссылка на заголовок
        const ref2 = refOnHeaderTable
        if (event.currentTarget) {
            // координаты верхней границы поля главного скрола
            // @ts-ignore
            const target = event.currentTarget.scrollY
            // установка сдвига для заголовка
            if (ref.current
                && ref.current.parentElement
                && ref.current.parentElement.offsetTop < target
                && ref.current.parentElement.offsetTop + ref.current.parentElement.offsetHeight
                - ref.current.parentElement.offsetHeight / dataTable.length > target) {
                setStyleData({
                    display: "block",
                    top: target - ref.current.parentElement.offsetTop
                })
            } else if (ref2.current && ref2.current.style.display === "block") {
                //удаление заголовка
                setStyleData({
                    display: "none",
                    top: 0
                })
            }
        }
    }
    useEffect(() => {
        //подписка на событи скролл
        const win: Window = window
        win.addEventListener('scroll', handleScroll)
        return () => {
            //отписка от события скролл
            win.removeEventListener('scroll', handleScroll);
        }
    }, [])


    return <div style={{position: "relative"}}>
        <div ref={refOnTable}>
            <Table dataTable={dataTable} dataHeader={dataHeader}/>
        </div>
        <div ref={refOnHeaderTable} style={{position: "absolute", top: styleData.top, display: styleData.display}}>
            <Table dataTable={dataTable} dataHeader={dataHeader} visibility={"collapse"}/>
        </div>
    </div>
})


interface TableType extends TableComponentPropsType {
    visibility?:"collapse" | "initial",
}
const Table: FC<TableType> = React.memo(({visibility = "initial", dataTable, dataHeader}) => {
    // определение массива с ключами и названиями колонок
    const headerRow = dataHeader || Object.entries(dataTable[0]).map((d)=> {
        return{
            key:d[0],
            name:d[0]
        }
    } ) as Array<HeaderObjectType>
    //добавления Id в массив данных получения key при маппинге
    const dataTableAddId = [...dataTable.map(m => ({...m, idTableComponent: v1()}))] as Array<TableRowType>
    // строки таблицы
    const tableRow = dataTableAddId.map((row) => {
        const keyOfId = row["idTableComponent"]
        return <TableRow key={keyOfId} r={row} rowHeaderName={headerRow} keyOfId={keyOfId}/>
    })

    return <table className={s.tableFixedHead} cellPadding="0">
        <thead style={{backgroundColor: "moccasin"}}>
        <TableHeaderRow rowHeaderName={headerRow} keyOfId={"anyString"}/>
        </thead>
        <tbody style={{visibility: visibility}}>
        {tableRow}
        </tbody>
    </table>
})

type PropsTableHeaderRowType={
    rowHeaderName: Array<HeaderObjectType>,
    keyOfId: string,
}
const TableHeaderRow: FC<PropsTableHeaderRowType> = React.memo(({rowHeaderName, keyOfId}) => {
    const tableCell = rowHeaderName.map((R) => {
        const keyCell = R.key + keyOfId
        return <TableCell key={keyCell} value={R.name}/>
    })
    return <tr>
        {tableCell}
    </tr>
})

interface PropsTableRowType extends PropsTableHeaderRowType{
    r: TableRowType,
}
const TableRow: FC<PropsTableRowType> = React.memo(({r, rowHeaderName, keyOfId}) => {
    const tableCell = rowHeaderName.map((R) => {
        const keyCell = R.key + keyOfId
        return <TableCell key={keyCell} value={r[R.key]}/>
    })
    return <tr>
        {tableCell}
    </tr>
})

const TableCell: FC<{ value: string }> = React.memo(({value}) => {
    return <td>
        {value}
    </td>
})








