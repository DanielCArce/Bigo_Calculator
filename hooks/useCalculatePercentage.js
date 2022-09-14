import {useState} from 'react'
function useCalculatePercentage(uri){
const [data, setData] = useState(null);
const [isloading, setLoading] = useState(false);
const [error, setError] = useState(null);
const getData= async (payload)=>{
    const parseBody = JSON.stringify(payload);
    try {
        setLoading(true);
        const request = fetch(uri, {
         headers: {'Accept': 'application/json'}   ,
         method: 'POST',
         body: parseBody
        });
        const data = await request.json();
        setData(data)
    } catch (error) {
        setError(error)
    }finally{
        setLoading(false)
    }
};
return {data, isloading,error, getData}
}
export default useCalculatePercentage