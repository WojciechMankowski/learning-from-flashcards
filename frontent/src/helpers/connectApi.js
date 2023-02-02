
export const connectToAPI = async (metchod, data) => { 
    const URL = "http://127.0.0.1:8000/"
    const connect = await fetch(URL, {
        method: metchod,
        
        // body: JSON.stringify(data)
    })
    return connect
 }