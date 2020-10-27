import React from 'react';
import '../../App.css';

export default function Page5() {
  return (
    <>
 
      <form class="Appform5"align="center"> 
      <h2 className="head5" align="center">บทที่ 5 Integration</h2>
        <p><label class="w3-text-dark-gray"><b>คำนวณหาพื้นที่ใต้กราฟ f(x) จากในช่วง x∈[a,b] โดยปกติแล้วจะใช้วิธีประมาณค่าโดยการแบ่งพื้นที่ออกเป็นช่วงๆ แต่ละช่วงจะเป็นสี่เหลี่ยมแล้วรวมพื้นที่สี่เหลี่ยมเหล่านั้นมาประมาณค่าพื้นที่ใต้กราฟ</b></label> </p>
        <p><label class="w3-text-dark-gray"><b>หาพื้นที่ใต้กราฟโดยใช้ Simpson's rule</b></label> </p>
        <p><label class="w3-text-dark-gray"><b>สูตร (f(x0+0*h) + 4*f(x0+1*h) + 2*f(x0+2*h) + 4*f(x0+3*h) + f(x0+4*h))*h/3 เมื่อ n=4 , x0 = a ,h = (b-a)/n</b></label> </p>
        <div class ='size5'>
        <p>A<input class="w3-input w3-border w3-Azure" align="center" type="text" ></input></p>
        <p>B<input class="w3-input w3-border w3-Azure" align="center" type="text" ></input></p>
        </div>
        <p><button class="w3-btn w3-blue">Summit</button></p>
      </form>

      <div class="page5">
      <h2  class="inform"align="center">Your Answer</h2>
      </div>

    </>
  );
}