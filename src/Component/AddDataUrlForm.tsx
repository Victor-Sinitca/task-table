import React, {ChangeEvent, FC, FormEvent, useState} from "react";

type AddDataUrlFormType={
    onSubmit:(data:string)=>void
}
export const AddDataUrlForm:FC<AddDataUrlFormType> = React.memo(({onSubmit})=>{
    const [inputUrl, setInputUrl] =useState("")
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setInputUrl(e.target.value)
    }
    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        onSubmit(inputUrl)
        event.preventDefault()

    }

    return<div>
        <form onSubmit={handleSubmit}>
            <input name={"url"}  value={inputUrl} onChange={handleChange}/>
            <input type="submit" value="Отправить" />
        </form>
    </div>
})
