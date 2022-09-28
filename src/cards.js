import React from 'react'
import JsonData from './data.json'
import './marvel.css'
import { useState } from 'react';

function JsonDataDisplay(){

    let [page,setPage]=useState('Characters');
    

    let changePage1=()=>{ setPage(page='Characters');setContent(content=DisplayData)};
    let changePage2=()=> {setPage(page='Comics');setContent(content=DisplayData2)};
    let chnagePage3=()=>{setPage(page='Stories');setContent(content=DisplayData3)};

    const DisplayData=JsonData.marvel.Characters.map(
        (info)=>{
            return(
                <div className='j-body'>
                    <div className='image1'>
                        <img src={info.img1} alt='imageOfCard' className='cardImage'></img>
                    </div>
                    <div className='cardBody'>
                      <p className='title1'>{info.title1}</p>
                      <button className='button1'>{info.button1}</button>
                    </div>
                </div>
            )
        }
    )

    let [content,setContent]=useState(DisplayData);

    const DisplayData2=JsonData.marvel.Comics.map(
        (info)=>{
            return(
                <div className='j-body'>
                  <div className='image1'>
                    <img src={info.img2} alt='imageOfCard' className='cardImage'></img>
                  </div>
                  <div className='cardBody'>
                    <p className='title1'>{info.title2}</p>
                    <button className='button1'>{info.button2}</button>
                  </div>
                </div>
            )
        }
    )




    const DisplayData3=JsonData.marvel.Stories.map(
        (info)=>{
            return(
                <div className='j-body'>
                    <div className='image1'>
                        <img src={info.img3} alt='imageOfCard' className='cardImage'></img>
                    </div>
                    <div className='cardBody'>
                      <p className='title1'>{info.title3}</p>
                      <button className='button1'>{info.button3}</button>
                    </div>
                </div>
            )
        }
    )


    return(
        <div className='content-body'>
            <div className='header'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png' alt='marvel' className='logo'></img>
                
               <button  onClick={changePage1} className='menuButton'>Characters</button>
                <button  onClick={changePage2} className='menuButton'>Comics</button>
                <button onClick={chnagePage3} className='menuButton'>Stories</button>
            </div>
            <h3 className='pageInfo'>{page}</h3>
            <div className='card1'>
                <div className='main-body'>
                    {content}
                    
                </div>
            </div>
        </div>
    )
}

export default JsonDataDisplay;