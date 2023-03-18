import { useRef, useState } from 'react';



export default function Card(props) {


    const exportRef = useRef();


    return (
      <div
        className="container-card"
        ref={exportRef}
      >
        <link rel="stylesheet" type="text/css" href={props.font.url} />
        <p className = "text-7xl text-center"
          style={{
            fontFamily: props.font.family,
            color: props.colorTextFinal,
            backgroundColor: props.colorBackgroundFinal
          }}
        >
          {props.msgSubmit}
        </p>
        <img
          src={props.imgPath}
          alt="your image" 
          className = "w-full"
        />
        <p 
            className = "text-7xl text-center"
          style={{
            fontFamily: props.font.family,
            color: props.colorTextFinal,
            backgroundColor: props.colorBackgroundFinal
          }}>
          {props.saveDate}
        </p>
      </div>
    )
  }