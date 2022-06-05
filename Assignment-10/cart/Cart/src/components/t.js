function runProgram(input){
    input = input.trim().split('\n');
    let qr= +input[0];
    let queue = [];
    let stack = [];
    let line = 1;
    for(let i=0; i<q; i++){
        if(input[line][0]=="1" ){
           let x = input[line].trim().split(" ");
           queue.push(x[1]) 
        }
        else if(input[line][0]=="2"){
           let x = input[line].trim().split(" ");
            stack.push(x[1])
        }
        else{
            if(input[line]=="3"){
                if(queue.length==0){
                    console.log(-1)
                }else{
                    console.log(queue[0])
                }
            }
            else if(input[line]=="4"){
                if(queue.length==0){
                    console.log(-1)
                }else{
                    console.log(stack[stack.length-1])
                } 
            }
            else{
                stack.push(queue.shift())
            }
        }
        line++;
    }

}