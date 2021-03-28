// imy ReactDOM from 'react-dom';
// import React from 'react';
const request = require('request-promise');

function HandleClick()
{
    (async ()=>{
        var array=[];
        var a=document.getElementById('username').value;
        a=a+',';
        var arr=[];
        var t=0;
        for(var i=0;i<a.length;i++)
        {
            if(a[i]===',')
            {
                arr.push(t);
                t=0;
                
            }
            else t=t*10+(a[i]-'0');
        }
        var link="https://terriblytinytales.com/testapi?rollnumber=";
        var link1="https://cors-anywhere.herokuapp.com/"+link;
        for(var j=0;j<arr.length;j++)
        {
           array.push(link1+arr[j]);
        }

        var o1=await Promise.all(array.map(async (link2)=>{
            const ans=await request.get(link2);
            return ans;
        }));
        console.log(o1)
        var r=`<table><tr><th>ROLL NUMBER</th><th>RESULT</th></tr>`;
        for(var e=0;e<o1.length;e++)
        {
            r=r+"<tr><td>"+arr[e]+"</td><td>"+o1[e]+"</td></tr>";
        }
        r=r+"</table>";
        document.getElementById("answer").innerHTML=r;
    })();
}
export default HandleClick;