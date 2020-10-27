import React from 'react';
import '../../App.css';

export default function Page2() {
  return (
    <>
 
      <form class="Appform2"align="center"> 
      <h2 className="head2" align="center">บทที่ 2 Linear Equations</h2>
        <p><label class="w3-text-dark-gray"><b>Elimination Phase คำนวณเพื่อหาคำตอบของ Ax=b</b></label> </p>
        <div class ='size2'>
        <p>A column 1<input class="w3-input w3-border w3-Azure" align="center" type="text" ></input></p>
        <p>A column 2<input class="w3-input w3-border w3-Azure" align="center" type="text" ></input></p>
        <p>A column 3<input class="w3-input w3-border w3-Azure" align="center" type="text" ></input></p>
        <p>B<input class="w3-input w3-border w3-Azure" align="center" type="text" ></input></p>
        </div>
        <p><button class="w3-btn w3-red">Summit</button></p>
      </form>

      <div class="page2">
      <h2  class="inform" align="center">Your Answer</h2>
      </div>
      
    </>
  );
}
