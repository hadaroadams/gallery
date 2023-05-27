console.log(document.querySelector('#modal').classList)

class Gallery{
    constructor(){
        this.imagedisplay = document.querySelector('.sliderContainer img')
        this.allImages = document.querySelectorAll('img:not(.upper img)')
        this.modal = document.querySelector('#modal')
        this.gallery = document.querySelector('main')
        this.buttons = document.querySelectorAll('button')
        this.sliderImagescontainer = document.querySelector('.downImageContainer')
        this.title = document.querySelector('#title')
       // this.imagedisplay.draggable= false
    }
    show(image){
        this.imagedisplay.src=image
    }
    imageSelected(){ 
        this.allImages.forEach((item,index)=>{
            item.onclick=()=>{
                this.gallery.classList.add('removal')
                this.modal.classList.remove('removal')
                let src= item.src
                this.show(src)
                
                let images =item.parentElement.innerHTML
                this.sliderImagescontainer.innerHTML=images
                this.sliderButtomImage = document.querySelectorAll('.downImageContainer img');
                this.selection(this.sliderButtomImage)
                if(parseInt(item.id)>=4){
                    this.title.firstElementChild.innerText="City-"
                    this.title.lastElementChild.innerText=index-2
                }else{
                   this.title.firstElementChild.innerText="Nature-"
                   this.title.lastElementChild.innerText=index+1
                }
            }
        })
        this.btn()
    }

    selection(image){
        image.forEach((item,index)=>{
            item.onclick=()=>{
                console.log('hello')
            }
            item.onclick=()=>{
                if(parseInt(item.id)>=4){
                    this.show(item.src)
                    this.title.lastElementChild.innerText=index+1
                    item.classList.toggle('active')
                }
                if(parseInt(item.id)<=3){
                    this.show(item.src)
                    this.title.lastElementChild.innerText=index+1
                     item.classList.toggle('active')
                }
            }
        })
    }
    btn(){
        this.buttons.forEach((item)=>{
            
            item.onclick=()=>{
                if(item.id=="close"){
                    console.log("hello")
                    this.gallery.classList.remove('removal')
                    this.modal.classList.add('removal')
                }
                if(item.id=="next"){
                    this.counter++
                    console.log()
                }
                if(item.id=="prev"){
                    this.counter--
                    console.log(this.counter)
                }
            }
        })
    }

}

let her = new Gallery().imageSelected()