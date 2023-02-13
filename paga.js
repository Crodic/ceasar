//Mỗi trang cần 3 product

let thisPage = 1
let limit = 4
let list = document.querySelectorAll('.item')

function loadItem (){
    let beginGet = limit * (thisPage - 1)
    let endGet = limit * thisPage - 1

    list.forEach((item,index) => {
        if(index >= beginGet && index <=endGet){
            item.style.display = 'block'
        }else{
            item.style.display ='none'
        }
    });
    listPage()
}
loadItem()

function listPage(){
    let count = Math.ceil(list.length / limit)
    document.querySelector('.listPage').innerHTML = ''
    
    if(thisPage != 1){
        let prev = document.createElement('li')
        prev.innerText = 'Prev'
        prev.setAttribute('onclick', `changePage(${thisPage - 1})`)
        document.querySelector('.listPage').prepend(prev)
    }

    
    for ( i = 1; i <= count; i++){
        let newPage = document.createElement('li')
        newPage.innerHTML = i
        if(i==thisPage){
            newPage.classList.add('active')
        }
        newPage.setAttribute('onclick', `changePage(${i})`)
        document.querySelector('.listPage').appendChild(newPage)
    }
    
    if(thisPage != count){
        let next = document.createElement('li')
        next.innerText = 'Next'
        next.setAttribute('onclick', `changePage(${thisPage + 1})`)
        document.querySelector('.listPage').appendChild(next)
    }

}
function changePage(index){
    thisPage = index
    loadItem()
}