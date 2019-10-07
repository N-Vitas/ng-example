export class Leaf{

	private MIN_LEAF_SIZE: number = 2;

    public x: number;
    public y: number;
    public width: number;
    public height: number; // положение и размер этого листа

	public leftChild: Leaf; // левый дочерний Leaf нашего листа
    public rightChild: Leaf; // правый дочерний Leaf нашего листа
	// public room: Rectangle; // комната, находящаяся внутри листа
	// public halls: Vector.; // коридоры, соединяющие этот лист с другими листьями

	constructor(X: number, Y: number, Width: number, Height: number)
	{
		// инициализация листа
		this.x = X;
		this.y = Y;
		this.width = Width;
		this.height = Height;
        // this.leafs.push(new Leaf(1,1,10,10));
	}

	split(): boolean {
		// начинаем разрезать лист на два дочерних листа
		if (this.leftChild != null || this.rightChild != null) {
            return false; // мы уже его разрезали! прекращаем!
        }
		// определяем направление разрезания
		// если ширина более чем на 25% больше высоты, то разрезаем вертикально
		// если высота более чем на 25% больше ширины, то разрезаем горизонтально
		// иначе выбираем направление разрезания случайным образом
		let splitH: boolean = Math.random() > 0.5;
		if (this.width > this.height && this.width / this.height >= 1.25){
			splitH = false;
		} else if (this.height > this.width && this.height / this.width >= 1.25){
			splitH = true;
        }
        const max: number = (splitH ? this.height : this.width) - this.MIN_LEAF_SIZE;
        // определяем максимальную высоту или ширину
		if (max <= this.MIN_LEAF_SIZE) {
            return false; // область слишком мала, больше её делить нельзя...
        }
		const split: number = Math.floor(Math.random() * max) + this.MIN_LEAF_SIZE; // определяемся, где будем разрезать

		// создаём левый и правый дочерние листы на основании направления разрезания
		if (splitH)
		{
			this.leftChild = new Leaf(this.x, this.y, this.width, split);
			this.rightChild = new Leaf(this.x, this.y + split, this.width, this.height - split);
		}
		else
		{
			this.leftChild = new Leaf(this.x, this.y, split, this.height);
			this.rightChild = new Leaf(this.x + split, this.y, this.width - split, this.height);
		}
		return true; // разрезание выполнено!
    }
    generate():Leaf[] {
        let did_split: boolean = true;
        const leafs: Leaf[] = [new Leaf(1, 1, 10, 10)];
        const MAX_LEAF_SIZE: number = 10;
        // циклически снова и снова проходим по каждому листу в нашем Vector, пока больше не останется листьев, которые можно разрезать.
        while (did_split)
        {
        did_split = false;
        for(let l of leafs)
        {
            if (l.leftChild == null && l.rightChild == null) // если лист ещё не разрезан...
            {
            // если этот лист слишком велик, или есть вероятность 75%...
            if (l.width > MAX_LEAF_SIZE || l.height > MAX_LEAF_SIZE || Math.random() > 0.25)
            {
                if (l.split()) // разрезаем лист!
                {
                // если мы выполнили разрезание, передаём дочерние листья в Vector, чтобы в дальнейшем можно было в цикле обойти и их
                leafs.push(l.leftChild);
                leafs.push(l.rightChild);
                did_split = true;
                }
            }
            }
        }
        }
        // console.log(leafs);
        return leafs;
    }
}