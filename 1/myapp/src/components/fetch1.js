function fetch1() {
    async function fetcher (){
        try{
        const data = await fetch('https://api.example.com/data') ;
        const res = await data.json() ; 
        console.log(res) ; 
        

    }
catch(error){
    console.error(error) ; 
}
}
fetcher();
}

export default fetch1 ; 