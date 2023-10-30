import React, { useState } from 'react'
import "./style.css"
 
const Cart = () =>{
    const [text, settext] = useState ("")
    
    const handleChange = (event) =>{
        settext(event.target.value);
    };
    const UpperCase = () =>{
        settext(text.toUpperCase());
    };
    const LowerCase = () =>{
        settext(text.toLowerCase());
    };
    const Copy = () =>{
        navigator.clipboard.writeText(text)
       let data =  document.getElementById('text');
        data.select()
    }
    const Cut = () => {
        navigator.clipboard.writeText(text)
            settext('');
          };
    const Paste = () => {
        navigator.clipboard.readText().then((text) => {
            settext(text);
        });
    }
    const SelectAll = () => {
        navigator.clipboard.select();
    }
    const Remove = () =>{
        settext('')
    }
    const ExtraSpace = () =>{
        // settext(text.replace(/\s+/g,' '))
        let newText  =text.split(/[ ]+/)
        
        settext(newText.join(" "))
        
    }
   
   const FontSize = ()=>{
    navigator.clipboard.readText(text)
    let f = document.getElementById('text').style.fontSize ="16"
    if (f==16) {
        f++
    }
    
   }
    let a = 1;
       const Theme = () => {
        if (a%3 === 0 ) {
            document.querySelector('.main').style.backgroundColor = "pink";
            document.getElementById('text').style = 'background-color:skyblue; color:black';
        }
        else if (a%3 === 1 ) {
            document.getElementById('text').style = 'background-color:yellow; color:blue';
            document.querySelector('.main').style.backgroundColor = "skyblue";
        }
        else  {
            document.getElementById('text').style = 'background-color:black ; color:white';
            document.querySelector('.main').style.backgroundColor = "red";
        }
        a++;
       }
    

    return(
        <>
         <div className='main'> 
      <textarea onChange={handleChange} name="" id="text" cols="30" rows="10" placeholder='type here...' value={text}>

      </textarea>
      <div id='btn1'>
        <button onClick={UpperCase}  type="button" class="btn btn-lg btn-dark">toUpperCase</button>
        <button onClick={LowerCase} type="button" class="btn btn-lg btn-dark">toLowerCase</button>
        <button onClick={Copy}  type="button" class="btn btn-lg btn-dark">Copy</button>
      </div>
      <div id='btn2'>
        <button  onClick={Cut} type="button" class="btn btn-lg btn-dark">Cut</button>
        <button  onClick={Paste} type="button" class="btn btn-lg btn-dark">Paste</button>
        <button onClick={SelectAll} type="button" class="btn btn-lg btn-dark">SelectAll</button>
      </div>
      <div id='btn3'>
        <button  onClick={Remove} type="button" class="btn btn-lg btn-dark">Remove</button>
        <button onClick={Theme} type="button" class="btn btn-lg btn-dark">Theme</button>
        <button onClick={ExtraSpace} type="button" class="btn btn-lg btn-dark">Extra Space</button>
      </div>
    </div>
        </>
    )
}


export default Cart
