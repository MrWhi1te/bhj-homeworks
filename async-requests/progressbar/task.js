let form = document.getElementById('form')
form.addEventListener('submit',(a)=>{
    a.preventDefault()
    let el = new XMLHttpRequest()
    el.upload.addEventListener('progress', (e)=>{
        let progress = document.getElementById( 'progress' );
        progress.value = e.loaded/e.total;
    })
    el.open( 'POST',"https://students.netoservices.ru/nestjs-backend/upload");
    let f = new FormData()
    el.send(f)
})