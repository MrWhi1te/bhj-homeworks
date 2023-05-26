const pollAnswers = document.getElementById('poll__answers');
const pollTitle = document.getElementById('poll__title');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE){
    const sur = JSON.parse(xhr.responseText);

    pollTitle.innerHTML = sur.data.title
    let buttons = '';      
    for (let i = 0; i < sur.data.answers.length; i++)
      buttons += `<button class="poll__answer" value="${i}">${sur.data.answers[i]}</button>`;
    pollAnswers.innerHTML = buttons;
    
for (let poll of pollAnswers.querySelectorAll('.poll__answer')){
    poll.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
    })
}
}
})