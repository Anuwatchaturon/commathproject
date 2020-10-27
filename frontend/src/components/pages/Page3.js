import React from 'react';
import '../../App.css';

export default function Page3() {
  return (
    <>
 
      <form class="Appform3"align="center"> 
      <h2 className="head3" align="center">บทที่ 3</h2>
        <p><label class="w3-text-dark-gray"><b>Input</b></label> </p>
        <p><input class="w3-input w3-border w3-Azure" align="center" type="text" ></input></p>
        <p><button class="w3-btn w3-indigo">Summit</button></p>
      </form>

      <div class="page3">
      <h2  class="inform"align="center">Your Answer</h2>
      </div>

    </>
  );
}