import React, {FC, useEffect, useRef, useState, memo, SyntheticEvent} from "react";
import s from "./Table.module.css"
import {v1} from "uuid"

declare module "react" { // augment React types
    function memo<A, B>(Component: (props: A) => B): (props: A) => ReactElement | null

    // return type is same as ReturnType<ExoticComponent<any>>
}


export interface StringCell {
    [key: string]: string;
}

type TableComponentPropsType = {
    dataTable: Array<StringCell>
    dataHeader?: StringCell | null
}
export const TableComponent: FC<TableComponentPropsType> = React.memo(({dataTable, dataHeader}) => {
    //ссылка на элемент thead
    const headRef = useRef<HTMLTableSectionElement>(null)
    // установка сдвига thead
    const [top, setTop] = useState(0)
    // определение объекта для извлечения ключей для таблицы
    const headerRow = dataHeader || dataTable[0] as StringCell
    //добавления Id в массив данных получения key при маппинге
    const dataTableAddId = [...dataTable.map(m => ({...m, id: v1()}))] as Array<StringCell>
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
        const keyOfId = row["id"]
        return <MemoTableRow key={keyOfId} r={row} rowHeaderName={rowHeaderName} keyOfId={keyOfId}/>
        /*return <tr key={keyOfId}>
            {getTableRow<RowType, KeysRowType>(row, rowHeaderName, keyOfId)}
        </tr>*/
    })
    //отслеживание скрола страницы
    const handleScroll = (event: Event ) => {
        const ref = headRef
        if (event.currentTarget) {
            // @ts-ignore
            const target = event.currentTarget.scrollY
            // установка сдвига для заголовка
            if (ref.current &&
                ref.current.parentElement
                && ref.current.parentElement.offsetTop < target
                && ref.current.parentElement.offsetTop + ref.current.parentElement.offsetHeight - ref.current.clientHeight > target) {
                /*console.log(ref.current.parentElement.offsetTop)*/
                setTop(target - ref.current.parentElement.offsetTop)
            } else if (ref.current &&
                ref.current.parentElement
                && ref.current.parentElement.offsetTop > target) {
                //возвращение заголовка на место
                setTop(0)
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



    return <table className={s.tableFixedHead} cellPadding="0">
        <thead ref={headRef} style={{position: "relative", top: top, backgroundColor: "moccasin"}}>
        {
            dataHeader ? <MemoTableRow r={headerRow} rowHeaderName={rowHeaderName} keyOfId={"id"}/>
                : <MemoTableHeaderRow r={headerRow} rowHeaderName={rowHeaderName} keyOfId={"id"}/>
        }
        </thead>
        <tbody>
        {tableRow}
        </tbody>
    </table>
})


interface Props<T> {
    a: T
}

const TableWrapped = <T extends {}>(props: Props<T>) => <div>{props.a}</div>
const Table = memo(TableWrapped)


interface PropsTableRow<RowTypes, HeaderNameTypes> {
    r: RowTypes,
    rowHeaderName: Array<HeaderNameTypes>,
    keyOfId: string
}

const TableRow = <RowTypes extends StringCell, HeaderNameTypes extends Extract<keyof RowTypes, string>>
({r, rowHeaderName, keyOfId}: PropsTableRow<RowTypes, HeaderNameTypes>) => {
    const tableCell = rowHeaderName.map((R) => {
        const keyCell = R + keyOfId
        return <TableCell key={keyCell} value={r[R]}/>
    })
    return <tr>
        {tableCell}
    </tr>
}
const MemoTableRow = memo(TableRow)


const TableHeaderRow = <RowTypes extends StringCell, HeaderNameTypes extends Extract<keyof RowTypes, string>>
({r, rowHeaderName, keyOfId}: PropsTableRow<RowTypes, HeaderNameTypes>) => {
    const tableCell = rowHeaderName.map((R) => {
        const keyCell = R + keyOfId
        return <TableCell key={keyCell} value={R}/>
    })
    return <tr>
        {tableCell}
    </tr>
}
const MemoTableHeaderRow = memo(TableHeaderRow)


const TableCell: FC<{ value: string }> = React.memo(({value}) => {
    return <td>
        {value}
    </td>
})












