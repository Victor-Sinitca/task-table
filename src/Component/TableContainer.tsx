import React, {FC, useEffect, useState} from "react";
import {StringCell, TableComponent} from "./TableComponent";
import {AddDataUrlForm} from "./AddDataUrlForm";
import s from "./Table.module.css"


export const TableContainer: FC = React.memo( () => {
    const [dataUrl, setDataUrl] = useState("")
    // данные для таблицы
    const [data, setData] = useState<Array<StringCell> | null>(null)
    //данные для настройки заглавия таблицы
    const [dataHeader, setDataHeader] = useState<StringCell | null>(null)
    // объект используется для настройки отображения таблицы:
    // очередность вывода колонок соответствует очередности свойств
    // количество свойств - количество колонок
    // значение свойств - название колонок
    const dataHeaderRow= {
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
    }
    // массив для хранения данных таблицы
    const dataTable= [
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
    const handleAddDataUrl = (data:string) => {
        setDataUrl(data)
    }
    useEffect(() => {
        async function getData(url: string) {
            try{
                const res = await fetch(url)
                const data = await res.json() as Array<StringCell>
                setData(data)
                setDataHeader(data[0])
                console.log(`загрузка удалась ${data}`)
            }catch (e) {
               console.log(e)
                setData(dataTable)
                setDataHeader(null)
            }
        }
        if (dataUrl) {
           getData(dataUrl)
        }else{
            setData(dataTable)
            setDataHeader(dataHeaderRow)
        }
    }, [dataUrl])
    if(!data){
        return <div> </div>
    }
    return <div className={s.container}>
        {dataUrl && <div>dataUrl:{dataUrl}</div>}
        <AddDataUrlForm onSubmit={handleAddDataUrl}/>
        <TableComponent dataTable={data}  dataHeader={dataHeader} />
    </div>
})


