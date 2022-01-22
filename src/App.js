import react, { useState } from 'react';
import './App.css';


const App=()=>{
    const[result, setresult]=useState("");
    
const[value, setvalue]=useState('false');

const offkey=()=>{
        setresult("")
    value=='true'?setvalue('false')  : setvalue('true');
}

const clickvalue=(e)=>{
  result!="Error" ?( value=="true"
  ?   (setresult(result + e.target.name))  : setresult("")) : setresult(e.target.name);
}

const clearvalue=()=>{
    setresult("");
}

const backspace=()=>{
setresult(result.slice(0, -1));
}

const calculate=()=>{
    try{
        setresult(eval(result).toString());
    }catch(e){
        setresult("Error");
    }
   
}


    return(<>
    <div className='contanier'>
    <button style={value=="true"? {backgroundColor:"green"} : {backgroundColor:"red"}} id='onoff'  onClick={offkey}></button>
    <form>
    
    <input type="text" value={result}/>
</form>
<div className='keyboard'>
<button className='backcolor' onClick={clearvalue} id='clear'>Clear</button>
<button className='backcolor' onClick={backspace} id='backspace'>C</button>
<button name="/" className='backcolor' onClick={clickvalue}>&divide;</button>
<button name="7" onClick={clickvalue}>7</button>
<button name="8" onClick={clickvalue}>8</button>
<button  name="9" onClick={clickvalue}>9</button>
<button name="*" className='backcolor' onClick={clickvalue}>&times;</button>
<button name="4" onClick={clickvalue}>4</button>
<button name="5" onClick={clickvalue}>5</button>
<button name ="6" onClick={clickvalue}>6</button>
<button name="-" className='backcolor'onClick={clickvalue}>&ndash;</button>
<button name="1" onClick={clickvalue}>1</button>
<button name="2"onClick={clickvalue}>2</button>
<button name="3" onClick={clickvalue}>3</button>
<button name="+" className='backcolor' onClick={clickvalue}>+</button>
<button name="0"onClick={clickvalue}>0</button>
<button name="." onClick={clickvalue}>.</button>
<button className='backcolor' onClick={calculate} id='result'>=</button>
</div>


    </div>

    </>
    );
}

export default App;