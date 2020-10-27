import React from 'react';
import '../../App.css';

export default function Page4() {
  return (
    <>
 
      <form class="Appform4"align="center"> 
      <h2 className="head4" align="center">บทที่ 4 Differentiation</h2>
        <p><label class="w3-text-dark-gray"><b>หาค่า Central Difference Approximations: CDA
โดยใช้ Richardson Extrapolation</b></label> </p>
        <p><label class="w3-text-dark-gray"><b>สูตร ((2**p)* g(h/2)- g(h))/(2**p - 1)</b></label> </p>
        <div class ='size3'>
        <p>h<input class="w3-input w3-border w3-Azure" align="center" type="text" ></input></p>
        <p>p<input class="w3-input w3-border w3-Azure" align="center" type="text" ></input></p>
        </div>
        <p><button class="w3-btn w3-teal">Summit</button></p>
      </form>

      <div class="page4">
      <h2  class="inform"align="center">Your Answer</h2>
      </div>

    </>
  );
}