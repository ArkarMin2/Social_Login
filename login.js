//Button Functions
const createAccButton = document.querySelector('.createAcc');
const closeButton     = document.querySelector('.closeButton');
const signupButton    = document.querySelector('.signupButton');
const backButton1     = document.querySelector('.backButton1');
const nextButton1     = document.querySelector('.nextButton1');
const backButton2     = document.querySelector('.backButton2');


const showFunction = (className) =>{
    document.querySelector(className).style.display = "block";
}
const hideFunction = (className) =>{
    document.querySelector(className).style.display = "none";

}

createAccButton.addEventListener('click',()=>{
    showFunction("#overlay");
    showFunction(".signupCon");
});
closeButton.addEventListener('click',()=>{
    hideFunction(".signupCon");
    hideFunction("#overlay");
});
signupButton.addEventListener('click',()=>{
    hideFunction(".signupCon");
    showFunction(".birthdayCon");
});
backButton1.addEventListener('click',()=>{
    hideFunction(".birthdayCon");
    showFunction(".signupCon");
});
nextButton1.addEventListener('click',()=>{
    hideFunction(".birthdayCon");
    showFunction(".verifycodeCon");
})
backButton2.addEventListener('click',()=>{
    hideFunction(".verifycodeCon");
    showFunction(".birthdayCon");
});
