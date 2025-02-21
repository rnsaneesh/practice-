import { useEffect, useState } from "react"

const useMemoize =(key,value)=>{
    var [text, setText] = useState(() => {
        try {
            var jsonval = localStorage.getItem(key);
            return jsonval !== null ? JSON.parse(jsonval) : value;
        } catch (e) {
            console.error("Error parsing JSON from localStorage", e);
            return value;
        }
    });
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(text));
    }, [key, text]);
    
    return [text,setText]
};
export default useMemoize;