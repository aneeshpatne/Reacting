const FetchPages = async () =>{
    const response = await fetch('https://aneeshpatne.com');
    if (!response.ok) {
        throw new Error("DATA CANT BE FETCHED");}
    const resposeType = response.headers.get('content-type');
    if (!resposeType || !resposeType.includes("application/json")) {
        throw new Error("API did not return JSON");
      }
    const data = await response.json();
    
    return(
      <div>
        {data.map(d =>(
          <li key={d.id}>
          <h2>{d.title}</h2>
          <p>{d.body}</p>
        </li>
        ))}
      </div>
    );
}
    export default FetchPages;