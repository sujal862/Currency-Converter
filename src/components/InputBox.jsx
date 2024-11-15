import React , {useId} from 'react'

function InputBox({   //are props (object destructuring) will be passed by parent will using <InputBox />
    label,   //stores from or to 
    amount,
    onAmountChange,     // onAmountChange amount ko update krdo
    onCurrencyChange,  //onCurrencyChange selectCurrency ko update krdo
    currencyOptions = [], //will store the all currency name in array returned from api
    selectCurrency = "usd",  // default value if selectCurrency isn't passed
    optionDisabled = false,
    className = "",
}) {
   const amountInputId = useId(); //stores a unique id in var

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 

            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id = {amountInputId} //for binding with label (extra ha)
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value = {amount}
                    disabled = {optionDisabled}
                    onChange={(e) => onAmountChange &&      // it is done bec first it will be checked that onAmountChange fun exist or not if true than only fun will be called 
                    onAmountChange(Number(e.target.value)) //e.target.value will give string so using Number() method to convert into number
                    }
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value = {selectCurrency} //selected part ma kya dikhana ha user ko (dynamically updating the value part using onChange property)
                    onChange={(e) => {onCurrencyChange &&   //dropdown sa koi currency select kroga tb onChange trigger hoga and dynamically select ka value update krdega
                    onCurrencyChange(e.target.value)
                    }}
                >  
                        {/* loop -> for getting all the currency from api and displaying in select option */}
                        {currencyOptions.map((currency)=>{
                            // see Notes.md line ->  26 to 31
                            return (
                                <option key={currency} value={currency}>  
                                    {currency}
                                </option>
                            );
                        })}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
