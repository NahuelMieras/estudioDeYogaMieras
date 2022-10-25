(function(){
    const sliders = [...document.querySelectorAll(".profes__body")]
    const buttonNext = document.querySelector("#next");
    const buttonBefore = document.querySelector("#before");
    let value;

    buttonNext.addEventListener("click", ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener("click",()=>{
        changePosition(-1);
    })

    const changePosition =(add)=>{
        const currentProfes =document.querySelector(".profes__body--show").dataset.id;
        value = Number(currentProfes);
        value += add;
        
        sliders[Number(currentProfes)-1].classList.remove("profes__body--show");
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1
        }

        sliders[value-1].classList.add("profes__body--show");
    } 
})();