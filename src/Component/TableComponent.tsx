import React, {FC, useEffect, useRef, useState,} from "react";
import s from "./Table.module.css"
import {v1} from "uuid"
import {StringCell} from "./TableContainer";
import {Simulate} from "react-dom/test-utils";



type TableComponentPropsType = {
    dataTable: Array<StringCell>
    dataHeader?: StringCell | null
}


export const TableComponent: FC<TableComponentPropsType> = React.memo(({dataTable, dataHeader}) => {
    //ссылка на главную таблицу
    const refOnTable = useRef<HTMLDivElement>(null)
    const ref22 = useRef<HTMLDivElement>(null)
    // стили для установки сдвига
    const [styleData, setStyleData] = useState({
        top: 0,
        visibility: "none" as "none" | "block"
    })
    //отслеживание скрола страницы
    const handleScroll = (event: Event) => {
        //ссылка на таблицу
        const ref = refOnTable
        //ссылка на заголовок
        const ref2 = ref22
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
                    visibility: "block",
                    top: target - ref.current.parentElement.offsetTop
                })
            } else if (ref2.current && ref2.current.style.display === "block") {
                //удаление заголовка
                setStyleData({
                    visibility: "none",
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
        <div ref={ref22} style={{position: "absolute", top: styleData.top, display: styleData.visibility}}>
            <TableForHeader dataTable={dataTable} dataHeader={dataHeader}/>
        </div>
    </div>

})

type TableType = {
    dataTable: Array<StringCell>
    dataHeader?: StringCell | null
}

const Table: FC<TableType> = React.memo(({dataTable, dataHeader}) => {
    // определение объекта для извлечения ключей для таблицы
    const headerRow = dataHeader || dataTable[0] as StringCell
    //добавления Id в массив данных получения key при маппинге
    const dataTableAddId = [...dataTable.map(m => ({...m, idTableComponent: v1()}))] as Array<StringCell>
    //тип для ключей
    type KeysRowType = Extract<keyof typeof headerRow, string>;
    //тип строк
    type RowType = typeof dataTableAddId[0];
    //тип строки заглавия
    type headerRowType = typeof headerRow
    // массив ключей для маппинга ячеек
    const rowHeaderName = Object.entries(headerRow).map((R) => R[0]) as Array<KeysRowType>
    // строки таблицы
    const tableRow = dataTableAddId.map((row) => {
        const keyOfId = row["idTableComponent"]
        return <TableRow key={keyOfId} r={row} rowHeaderName={rowHeaderName} keyOfId={keyOfId}/>
    })

    return <table className={s.tableFixedHead} cellPadding="0">
        <thead style={{backgroundColor: "moccasin"}}>
        {
            dataHeader ? <TableRow r={headerRow} rowHeaderName={rowHeaderName} keyOfId={"anyString"}/>
                : <TableHeaderRow r={headerRow} rowHeaderName={rowHeaderName} keyOfId={"anyString"}/>
        }
        </thead>
        <tbody>
        {tableRow}
        </tbody>
    </table>
})
const TableForHeader: FC<TableType> = React.memo(({dataTable, dataHeader}) => {
    // определение объекта для извлечения ключей для таблицы
    const headerRow = dataHeader || dataTable[0] as StringCell
    //добавления Id в массив данных получения key при маппинге
    const dataTableAddId = [...dataTable.map(m => ({...m, idTableComponent: v1()}))] as Array<StringCell>
    //тип для ключей
    type KeysRowType = Extract<keyof typeof headerRow, string>;
    //тип строк
    type RowType = typeof dataTableAddId[0];
    //тип строки заглавия
    type headerRowType = typeof headerRow
    // массив ключей для маппинга ячеек
    const rowHeaderName = Object.entries(headerRow).map((R) => R[0]) as Array<KeysRowType>
    // строки таблицы
    const tableRow = dataTableAddId.map((row) => {
        const keyOfId = row["idTableComponent"]
        return <TableRow key={keyOfId} r={row} rowHeaderName={rowHeaderName} keyOfId={keyOfId}/>
    })


    return <table className={s.tableFixedHead} cellPadding="0">
        <thead style={{backgroundColor: "moccasin"}}>
        {
            dataHeader ? <TableRow r={headerRow} rowHeaderName={rowHeaderName} keyOfId={"anyString"}/>
                : <TableHeaderRow r={headerRow} rowHeaderName={rowHeaderName} keyOfId={"anyString"}/>
        }
        </thead>
        <tbody style={{visibility: "collapse"}}>
        {tableRow}
        </tbody>
    </table>
})


type PropsTableRowType = {
    r: StringCell,
    rowHeaderName: Array<string>,
    keyOfId: string,
}
const TableRow: FC<PropsTableRowType> = React.memo(({r, rowHeaderName, keyOfId}) => {
    const tableCell = rowHeaderName.map((R) => {
        const keyCell = R + keyOfId
        return <TableCell key={keyCell} value={r[R]}/>
    })
    return <tr>
        {tableCell}
    </tr>
})
const TableHeaderRow: FC<PropsTableRowType> = React.memo(({r, rowHeaderName, keyOfId}) => {
    const tableCell = rowHeaderName.map((R) => {
        const keyCell = R + keyOfId
        return <TableCell key={keyCell} value={R}/>
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





const ExampleComponent: FC<{}> = () => {

    type HeaderTableType={[key:string]:string}


    interface DataTableType  {
        headerTable: HeaderTableType,
        table: [
            {[key in keyof HeaderTableType]:string}
        ]
    }
    const [dataTable, setDataTable] = useState<DataTableType>({
        headerTable:{
            name: "22",
            age: "2222",
            city: "4444"
        },
        table:[
            {
                name: "1",
                age: "2222",
                city: "4444"
            }
        ]
    })

    return <div>

    </div>
}







