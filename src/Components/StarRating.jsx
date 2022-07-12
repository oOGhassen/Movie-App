import React from 'react'

export const StarRating = ({rating , handleRating}) => {
    const stars=(rating)=>{
        let tab = []
        for (let i = 1;i<=5 ;i++)
          if (i<=rating){
            tab.push(<span onClick={()=>handleRating(i)} style={{color:"gold" , fontSize:"20px" , cursor:"pointer"}} c>★</span>)
          }else{
            tab.push(<span onClick={()=>handleRating(i)} style={{color:"black" , fontSize:"20px" , cursor:"pointer"}}>★</span>)
          } return tab}
    
  return (
    <div>{React.Children.toArray(stars(rating))}</div>
  )
}
StarRating.defaultProps={
  handleRating: ()=>{}}