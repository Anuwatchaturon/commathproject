import React from 'react';
import '../../App.css';

export default function Page6() {
  return (
    <>
 
      <form class="Appform6"align="center"> 
      <h2 className="head6" align="center">บทที่ 6 Root-finding</h2>
        <p><label class="w3-text-dark-gray"><b>การหาคำตอบของสมการ f(x)=0 หมายถึงการหาค่า x ที่จำทำให้สมการ f(x) มีค่าเป็นศูนย์ คำตอบของสมการเรียกอีกอย่างว่า root ซึ่งแต่ละฟังก์ชันอาจมี 0, 1, หรือ หลายคำตอบก็ได้</b></label> </p>
        <p><label class="w3-text-dark-gray"><b>หาคำตอบโดยใช้ Incremental Search Method</b></label> </p>
        <p><label class="w3-text-dark-gray"><b>เมื่อโจทย์กำหนด f(x1) และ f(x2) มีค่าที่เป็นบวกหรือลบต่างกัน เราอาจจะเดาได้ว่าระหว่างค่า (x1,x2) จะมีค่า xi ที่ทำให้ f(xi)=0</b></label> </p>
        <p><label class="w3-text-dark-gray"><b>ดังนั้นวิธีการค้นหา xi จึงเกิดจากการหาค่า f(xi) ไปเรื่อยจนกว่าจะเจอ โดยให้ xi=x1+i∗Δ โดยจะต้องกำหนด Δ ให้มีขนาดเล็กพอที่จะค้นหา root เจอ</b></label> </p>
        <p><label class="w3-text-dark-gray"><b>สูตร (f(x0+0*h) + 4*f(x0+1*h) + 2*f(x0+2*h) + 4*f(x0+3*h) + f(x0+4*h))*h/3 เมื่อ n=4 , x0 = a ,h = (b-a)/n</b></label> </p>
        <div class ='size6'>
        <p>A <input class="w3-input w3-border w3-Azure" align="center" type="text" ></input></p>
        <p>B <input class="w3-input w3-border w3-Azure" align="center" type="text" ></input></p>
        <p>dx <input class="w3-input w3-border w3-Azure" align="center" type="text" ></input></p>
        </div>
        <p><button class="w3-btn w3-green">Summit</button></p>
      </form>

      <div class="page6">
      <h2  class="inform"align="center">Your Answer</h2>
      </div>

    </>
  );
}