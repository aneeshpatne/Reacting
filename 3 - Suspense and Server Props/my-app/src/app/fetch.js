const FetchPages = async () =>{
    const response = await fetch('https://jsonplaceholder.typicoe.com/posts');
    if (!response.ok) {
        throw new Error("DATA CANT BE FETCHED");}
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
    catch (error) {
        return <div>Error: {error.message}</div>;
      }
    };

    export default FetchPages;