function fetch1(setAdvice) {
    async function fetcher (){

        try{
        const data = await fetch('https://api.adviceslip.com/advice') ;
        const res = await data.json() ; 
        console.log(res.slip.advice) ; 
        setAdvice(res.slip.advice);
        

    }
catch(error){
    console.error(error) ; 
}
}
fetcher();
}

export default fetch1 ; 