import axios from "axios";

export async function submit(data, route){
    try{
        await axios.post(`http://localhost:8000/${route}`,{data})
            .then(res => {
                if(res.data === "Success"){
                    console.log(res.data);
                }else{
                    alert(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }catch(err){
        console.log(err)
    }
}
