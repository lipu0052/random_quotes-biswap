 import React from 'react';
 import {useState,useEffect}  from 'react';
 import css from './App.css';

function App() {
  const [quotes,setQuotes]=React.useState
  ([]);
  const [randomQuotes,setRandomQuotes]=React.useState(" ");
  const[color,setColor]=React.useState("white");
 React.useEffect(()=>{
   async function fetchData(){
     const response=await fetch("https://type.fit/api/quotes");
    const data= await response.json();
     
    setQuotes(data);
    let idx=Math.floor(Math.random()* data.length);
    setRandomQuotes(data[idx]);

     
    }
     fetchData();
  },[])
  React.useEffect(() => {
    function getRandomQuoteOnLoad() {
      const colors = ["red", "green", "blue", "teal", "navy", "brown", "black"];
      let randColor = Math.floor(Math.random() * colors.length);
      setColor(colors[randColor]);
    }
    getRandomQuoteOnLoad();
  }, []);  
  function newQuote(){
    const colors = ["red", "green", "blue", "teal",
    "navy","brown","black"
    
  
    ];

   
    let idx=Math.floor(Math.random()* quotes.length);
    let randColor=Math.floor(Math.random() * color.length);
    setRandomQuotes(quotes[idx]);
    setColor(colors[randColor]);
  }

    return (
      
      <div  className="content  my-auto d-flex align-items-center justify-content-center " style={{backgroundColor:color,minHeight:"100vh"}} >
        
      
      
            <div className="wrapper" id="quote-box">
           

            <div className="card  ">
                
                <div className="card-body" style={{color:color}}>
                        
                            <i className="fa fa-quote-left" style={{color:color}}></i>
                            
                                
                         
                              {randomQuotes  ?(
                                <>
                                 <p  id="text" className='card-text'>{randomQuotes.text}</p> 
                                <h5 id="author" className='card-title'> -- {randomQuotes.author || "No author"}</h5>
                                
                                </>
                              ):(
                                <h2>loading</h2>
                              ) } 

                             

                            

                       
                        
        



                </div> 
                <div className="card-footer  " style={{color:color}}>
                  <div className='icons'>
                  <a id="tweet-quote" style={{color:color}} href='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Challenges%20are%20what%20make%20life%20interesting%20and%20overcoming%20them%20is%20what%20makes%20life%20meaningful.%22%20Joshua%20J.%20Marine'><i class="fa fa-twitter-square"></i></a>
                  <a style={{color:color}} href='https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DJoshua%2BJ.%2BMarine%26content%3DChallenges%2Bare%2Bwhat%2Bmake%2Blife%2Binteresting%2Band%2Bovercoming%2Bthem%2Bis%2Bwhat%2Bmakes%2Blife%2Bmeaningful.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button'><i class="fa fa-tumblr-square"></i></a>
                  </div>
                  
                   <div className='btns'>

                    <button id="new-quote"  style={{backgroundColor:color,borderRadius:"20px",color:'white'}} onClick={newQuote} >New Quote</button>
                    </div>
                </div>
           
          </div>
          </div>
        </div>
      
          );
  }


 export default App;
