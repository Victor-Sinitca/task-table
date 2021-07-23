import React, {FC} from "react";
import s from "./Table.module.css"
import {TableComponent} from "./TableComponent";
import dataJson from "../../data.json"

type TableContainerPropsType = {
    dataUrl: string
}
export const TableContainer: FC<TableContainerPropsType> = ({dataUrl}) => {

    return <div >
        <TableComponent dataUrl={dataUrl}/>
    </div>
}


