solution=n=>Array(n).fill(0).map((_,x)=>(((++x%3?"":"Fizz")+(x%5?"":"Buzz")||x))).join("\n")


