export class Color {
    protected colorTaken: string
    protected nameTaken: string
    travelColor() {
        return this
    }
    getColor(): string { return this.colorTaken }
    getName(): string { return this.nameTaken }
}
export class White extends Color {
    constructor() {
        super();
        this.nameTaken = 'Белый';
        this.colorTaken = 'white';
    }
}
export class Black extends Color {
    constructor() {
        super();
        this.nameTaken = 'Черный';
        this.colorTaken = 'black';
    }
}
export class Yellow extends Color {
    constructor() {
        super();
        this.nameTaken = 'Желтый';
        this.colorTaken = 'yellow';
    }
}
export class Red extends Color {
    constructor() {
        super();
        this.nameTaken = 'Красный';
        this.colorTaken = 'red';
    }
}
export class TravelColor {
    static travel(transport: Color): Color {
        return transport.travelColor();
    }
}