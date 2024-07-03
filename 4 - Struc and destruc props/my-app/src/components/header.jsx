import './styles/style.css';
function HeaderComponenet(props) {
    return (
        <div>
        <h1 id='main-header' className={props.c1 % 2===0 ? 'red-box' : 'blue-box'}   >My React App</h1>
        <p>{props.c1}</p>
        </div>
      );
}
export default HeaderComponenet;