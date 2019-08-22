let todo = [
    {
        title:"Rendang",
        description:"Rendang atau randang adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali.",
    },
    {
        title:"Kebab",
        description:"Kebab adalah penganan cepat saji terdiri atas daging sapi yang dipanggang seperti satai kemudian diiris-iris ditambah dengan sayuran segar dan mayones, lalu dibalut dengan kulit tortila"
    },
    {
        title:"Ayam Bakar",
        description:"Ayam bakar adalah sebuah hidangan Asia Tenggara Maritim, terutama hidangan Indonesia atau Malaysia, dari ayam yang dipanggang di atas arang.",
    },
    {
        title:"Pecel Lele",
        description:"Pecellele di Indonesia adalah nama sebuah makanan khas Jawa yang terdiri dari ikan lele dan sambal pecak. Biasanya yang dimaksud adalah ikan lele yang digoreng kering dengan minyak lalu disajikan dengan sambal tomat dan lalapan. Lalapan biasa terdiri dari kemangi, kubis, mentimun, dan kacang panjang",
    },
    {
        title: "Indomie Goreng",
        description:"Indomie goreng berarti mie yang digoreng adalah makanan yang populer dan digemari di Indonesia, Malaysia, dan Singapura",
    }
]

class TodoList{
    hasilnya(hasil){
        document.getElementById('todo-list').innerHTML += hasil.toString()
   
    }
    
    item = document.getElementById('todo-list')
    content = document.getElementById('todo-description')
    listItem = ()=> {
        for(let x in todo){
            this.item.innerHTML += '<div class="list-item">'+todo[x].title+'</div>'
        }
    }
    setDisplay = (n=0)=>{
        this.content.innerHTML = '<div class="title">'+todo[n].title+'</div>\
        <div class="container">'+todo[n].description+'</div>'
    }

    
    
}


const todoList = new TodoList()

