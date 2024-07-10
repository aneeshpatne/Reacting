import './styles/box.css'
function RedBox({height}){
    console.log(height);
    return(<div>
        <div id='red-box'>
        {height}
        </div>
    </div>);
}

function BlueBox(){
    return(<div>
        <div id='blue-box'></div>
    </div>);
}

export {RedBox, BlueBox };