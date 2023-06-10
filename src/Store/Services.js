// import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:8000'

// export const getUserApi = async()=>await axios.get('/user')

// export const createUserApi = async(data)=>await axios.post('/user',data)



export const getUserApi = async()=>{
    var response = await fetch('http://localhost:8000/user')
    return await response.json()
}



export const createUserApi = async(data)=>{
    var response = await fetch('http://localhost:8000/user',{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
    })
    return await response.json()
}

export const deleteUserApi = async(data)=>{
    var response = await fetch('http://localhost:8000/user/'+data.payload.id,{
        method:"delete",
        header:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}

export const updateUserApi = async(data)=>{
    var response = await fetch('http://localhost:8000/user/'+data.id,{
        method:"put",
        header:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}