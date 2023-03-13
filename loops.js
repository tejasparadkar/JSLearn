function evenNum()
{
    var e = document.getElementById("t1").value;
    //var numArr = String.split(",");
    const evens = [];
    for(const num of e)
    {
        if (num%2==0)
        {
            evens.push(num);
        }
    }
    console.log(evens);
}
function slargeNum(a)
{
    let largestNum = -1 , secondLargestnum = -1;
    for(let i = 0; i <= a.length-1; i++)
    {
        if(a[i] > largestNum)
        {
            secondLargestnum = largestNum;
            largestNum = a[i];
        }
        else if( a[i] > secondLargestnum && a[i] != largestNum)
        {
            secondLargestnum = a[i];
        }
    }
    console.log(secondLargestnum);
    
}
let a = [1,4,6,3,2,8,10]
slargeNum(a);
function fiboSer()
{
let num = document.getElementById("t3").value;
let n1 = 0, n2 = 1, n;
document.write("",n1," ");
document.write("",n2," ");
for (let i = 1; i <= num; i++) 
{
    n = n1 + n2;
    document.write("",n," ");
    n1 = n2;
    n2 = n;
}
}