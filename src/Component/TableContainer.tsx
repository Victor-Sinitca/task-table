import React, {FC} from "react";
import s from "./TableComponent.module.css"
import {TableComponent} from "./TableComponent";
import dataJson from "../../data.json"

type TableContainerPropsType = {
    dataUrl: string
}
export const TableContainer: FC<TableContainerPropsType> = ({dataUrl}) => {






    return <TableComponent dataUrl={dataUrl}/>
}


