import React, {FC, useEffect, useRef, useState} from "react";
import t from "./Table.module.css"
import {v1} from "uuid"

type TableComponentPropsType = {
    dataUrl: string
}
export const TableComponent: FC<TableComponentPropsType> = ({dataUrl}) => {
    //ссылка на элемент thead
    const headRef = useRef<HTMLTableSectionElement>(null)
    // установка сдвига thead
    const [top, setTop] = useState(0)
    const data = {
        // объект используется для настройки отображения таблицы:
        // очередность вывода колонок соответствует очередностим свойств
        // количество свойств - количество колонок
        // значение свойств - название колонок
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
        // массив для хранения данных таблицы
        dataTable: [
            {
                number: "1",
                name: "Dima111",
                age: "1",
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
    //добавления Id в массив данных получения key при маппинге
    const dataTableAddId = [...data.dataTable.map(m => ({...m, id: v1()}))]
    //строка с названиями колонок
    const headerRow = data.dataHeader
    //строка таблицы, для определения типа
    const row = dataTableAddId[0]
    //тип для ключей
    type KeysRowType = keyof typeof headerRow;
    //тип строк
    type RowType = typeof row;

    // массив ключей для маппинга ячеек
    const rowHeaderName = Object.entries(headerRow).map((R) => R[0]) as Array<KeysRowType>
    // строки таблицы
    const tableRow = dataTableAddId.map((row) => {
        const keyOfId = row["id"]
        return <tr key={keyOfId}>
            {getTableRow<RowType, KeysRowType>(row, rowHeaderName, keyOfId)}
        </tr>
    })

    //отслеживание скрола страницы
    const handleScroll = (event: Event) => {
        const ref = headRef
        if (event.currentTarget) {
            // @ts-ignore
            const target = event.currentTarget.scrollY
            debugger
            // установка сдвига для заголовка
            if (ref.current &&
                ref.current.parentElement
                && ref.current.parentElement.offsetTop < target
                && ref.current.parentElement.offsetTop + ref.current.parentElement.offsetHeight - ref.current.clientHeight > target) {
                /*console.log(ref.current.parentElement.offsetTop)*/
                setTop(target - ref.current.parentElement.offsetTop)
            } else {
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

    return <table className={t.tableFixedHead} cellPadding="0">
        <thead ref={headRef} style={{position: "relative", top: top, backgroundColor: "moccasin"}}>
        <tr>
            {getTableRow(headerRow, rowHeaderName, "id")}
        </tr>
        </thead>
        <tbody>
        {tableRow}
        </tbody>
    </table>
}

interface StringMap {
    [key: string]: string;
}
//дженерик строки таблицы
function getTableRow<RowTypes extends StringMap,
    HeaderNameTypes extends Extract<keyof RowTypes, string>>
(r: RowTypes, rowHeaderName: Array<HeaderNameTypes>, keyOfId: string) {
    const tableCell = rowHeaderName.map((R) => {
        const keyCell = keyOfId + R
        return <td key={keyCell}>
            {getTableCell(r[R])}
        </td>
    })
    return <>
        {tableCell}
    </>
}
//дженерик ясейки таблицы
function getTableCell(value: string) {
    return <>
        {value}
    </>
}












