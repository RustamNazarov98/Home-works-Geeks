class TrafficLight {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }
    show() {
        this.$element.style.display = 'block'
    }
    hide() {
        this.$element.style.display = 'none'
    }
}

class Block extends TrafficLight {
    constructor(options){
        super(options.selector);
        this.$element.style.width =this.$element.style.height = options.size + 'px'
        this.$element.style.background = options.bgColor
        this.$element.style.borderRadius = options.radius + '%'
    }
}

const redBlock = new Block ({
    selector:'.red',
    size: 300,
    bgColor: 'red',
    radius: 50,
})
const yellowBlock = new Block ({
    selector:'.yellow',
    size: 300,
    bgColor: 'yellow',
    radius: 50
})
const greenBlock = new Block ({
    selector:'.green',
    size: 300,
    bgColor: 'green',
    radius: 50
})

const writeColor = prompt('напишите цвет светофора').trim().toLowerCase();
if(writeColor === "красный" || writeColor === "red"){
    redBlock.show()
    yellowBlock.hide()
    greenBlock.hide()
}else if(writeColor === "желтый" || writeColor === "yellow"){
    redBlock.hide()
    yellowBlock.show()
    greenBlock.hide()
}else if(writeColor === "зеленый" || writeColor === "green") {
    redBlock.hide()
    yellowBlock.hide()
    greenBlock.show()
}else {
    alert('введите корректный данные');
}