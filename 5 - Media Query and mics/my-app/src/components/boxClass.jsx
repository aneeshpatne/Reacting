import './styles/box.css'
const BoxClass = ({s1}) => {
    return(<div>
        <div id='box' className={`${s1 ? 'green' : 'alter'}`}></div>
    </div>);

};
export default BoxClass;