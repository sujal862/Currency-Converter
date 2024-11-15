import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({}); //initially data = empty object 

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((datas)=> setData( datas[currency])) // check the js object in postman
        
    }, [currency])
    console.dir(data);
    return data
}

export default useCurrencyInfo; //pura method hi export krdiya