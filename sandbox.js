// const button = document.querySelector('button');
// const popup = document.querySelector('.popup-wrapper');
// // const close = document.querySelector('.popup-close');

const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-z]{6,12}$/

form.addEventListener('submit', e => {
    e.preventDefault();

    const username = form.username.value;
    

if(usernamePattern.test(username)){
    feedback.textContent = 'regex test passed :(';
 } else {
     feedback.textContent = 'regex test failed :)';
 }
});

form.username.addEventListener('keyup', e => {
    if(usernamePattern.test(e.target.value)){
        // console.log('passed')
        form.username.setAttribute('class','success');
    } else{
        // console.log('failed')
        form.username.setAttribute('class','error');;
    }
});



// let result = pattern.test(username);
// console.log(result);

// if(result){
//     console.log('regex test passed :(')
//  } else {
//      console.log('regex test failed :)')
//  };

//  let result = username.search(pattern)
//  console.log(result)
// button.addEventListener('click', () => {
//     popup.style.display = 'block'
// });

// close.addEventListener('click', () => {
//     popup.style.display = 'none'
// });

// popup.addEventListener('click', () => {
//     popup.style.display = 'none'
// });