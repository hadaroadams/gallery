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
        this.counter = 0
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
                    this.counter = index-3
                }else{
                   this.title.firstElementChild.innerText="Nature-"
                   this.title.lastElementChild.innerText=index+1
                   this.counter = index
                }
                console.log(this.counter)
            }
        })
        this.btn()
    }

    selection(image){
        image.forEach((item,index)=>{
            item.onclick=()=>{
                if(parseInt(item.id)>=4){
                    this.show(item.src)
                    this.title.lastElementChild.innerText=index+1
                    this.index
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
            let image , num
            item.onclick=()=>{
            let sliderImages = this.sliderImagescontainer.children
                if(item.id=="close"){
                    console.log("hello")
                    this.gallery.classList.remove('removal')
                    this.modal.classList.add('removal')
                }
                if(item.id=="next"){
                    if(this.counter >= sliderImages.length-1){
                        this.counter=-1
                    }
                        this.counter++
                        console.log(this.counter)
                        image = sliderImages[this.counter].src
                        this.title.lastElementChild.innerText=this.counter+1
                        console.log(image)
                        this.show(image)

                }
                if(item.id=="prev"){
                    if(this.counter<=0){
                        this.counter=sliderImages.length
                    }
                    this.counter--
                    console.log(image)
                    image = sliderImages[this.counter].src
                    this.title.lastElementChild.innerText=this.counter+1
                    this.show(image)
                }
            }
        })
    }

}

let her = new Gallery().imageSelected()