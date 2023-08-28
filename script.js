function generateNumber(){
    const input1 = Math.ceil(document.querySelector(".input1").value)
    const input2 = Math.floor(document.querySelector(".input2").value)

    if (input1 >= input2){
        alert("O segundo valor deve ser maior que o primeiro!")
    }
    else{
        const result = Math.floor(Math.random() * (input2 - input1 + 1)) + input1;
        alert(result)
    }
}