var models = [
    {
        name: "bmw",
        image: "resimlerim/araba1.jpg",
        link: "https://www.istockphoto.com/tr/foto%C4%9Fraf/grey-bmw-m5-gm1401350948-454628589?searchscope=image%2Cfilm"
    },
    {
        name: "bmw 2",
        image: "resimlerim/araba2.jpg",
        link: "https://www.istockphoto.com/tr/foto%C4%9Fraf/gri-spor-araba-yolda-s%C3%BCr%C3%BC%C5%9F-gm1300994247-393153338?searchscope=image%2Cfilm"
    },
    {
        name: "bmw 3",
        image: "resimlerim/araba3.jpg",
        link: "https://www.istockphoto.com/tr/foto%C4%9Fraf/mavi-spor-araba-yolda-s%C3%BCr%C3%BC%C5%9F-gm1299087868-391820515"
    },
    {
        name: "bmw 4",
        image: "resimlerim/araba4.jpg",
        link: "https://www.istockphoto.com/tr/foto%C4%9Fraf/yolda-beyaz-spor-araba-gm1299780504-392301015"
    }, {
        name: "bmw 5",
        image: "resimlerim/araba5.jpg",
        link: "https://www.istockphoto.com/tr/foto%C4%9Fraf/gri-spor-araba-bir-g%C3%BCnbat%C4%B1m%C4%B1-yolda-s%C3%BCr%C3%BC%C5%9F-gm1291591343-386662682"
    },
    {
        name: "bmw 6",
        image: "resimlerim/araba6.jpg",
        link: "https://www.istockphoto.com/tr/foto%C4%9Fraf/gri-spor-araba-bir-g%C3%BCnbat%C4%B1m%C4%B1-yolda-s%C3%BCr%C3%BC%C5%9F-gm1291591346-386662683"
    },
    {
        name: "bmw 7",
        image: "resimlerim/araba7.jpg",
        link: "https://www.istockphoto.com/tr/foto%C4%9Fraf/ticari-van-%C5%9Fehir-s%C3%BCr%C3%BC%C5%9F-gm985947582-267472587"
    }
]
var index = 0;
var slaytCount = models.length;
var intervalStartStop;
var settings = {
    random: false,
    interval: '1000'
}
// not = init fonksiyonundan önce settings objesi yazılmalıdır.
// yani 1 settings yaz  2 init kullan 
init(settings);

document.querySelector(".fa-arrow-circle-left").addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector(".fa-arrow-circle-right").addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index)
});

function showSlide(diziIndex) {

    if (slaytCount <= diziIndex) {
        index = 0;
    }
    if (diziIndex < 0) {
        index = slaytCount - 1;
    }
    document.querySelector(".card-img-top").setAttribute("src", models[index].image);
    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-link").setAttribute("href", models[index].link)
}

document.querySelectorAll(".intervalStartStop").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(intervalStartStop);
    })
    });
    document.querySelectorAll(".intervalStartStop").forEach(function(item){
        item.addEventListener("mouseleave",function(){
            init(settings)
        })
    });

function init(settings) {

    // setTimeout() // declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    // bir kere çalışır

    // setInterval() // declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    // durdurulmadığı sürece belirtilen aralıklarda çalışır. örnek 3 sn 5sn 
    // durdurmak için clearInterval() kullan
    // clearInterval() declare function clearInterval(id: number | undefined): void;

    var beforeNumber;
    intervalStartStop=  setInterval(function () {
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == beforeNumber);
            beforeNumber = index;
        } else {

            if (slaytCount == index + 1) {
                index=-1;
            }
            
            showSlide(index);
            index++;
        }
        console.log(index);
        showSlide(index)
    }, settings.interval);
}

