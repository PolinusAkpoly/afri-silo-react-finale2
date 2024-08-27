export let request: string

if(process.env.NODE_ENV === "production"){
    request = "https://api.afrisilo.com/"
}else{
    request = "http://localhost:9080/"
}