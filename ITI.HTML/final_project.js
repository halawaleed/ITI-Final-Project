

    function Start(){
    document.querySelectorAll('.LABEL').forEach(show => {
        show.style.display="block";
    });
    document.querySelectorAll('.INPUT').forEach(show =>{
        show.style.display="block";
    })
    document.getElementById("HOMEPAGE").style.display="none"

    }
    function WELCOME(){
        let nameValue=document.getElementsByClassName("INPUT")[0].value;
        let ageValue=document.getElementsByClassName("INPUT")[1].value;
        let education_level=document.querySelector('input[ name="one"]:checked')
        if(nameValue=="" || ageValue==""|| ageValue<0 || !education_level){
            alert("Please fill the whole form before submitting");
        }else{
            document.getElementById("WELCOME").innerText="Welcome "+nameValue+". Hope you enjoy!"
        }document.getElementsByClassName("NEXT")[0].style.display="block"

    }
    function SHOWCONTINUE() {
           document.querySelectorAll('.NEXT').forEach(show=> {
            show.style.display="block";
           })
        }

    



