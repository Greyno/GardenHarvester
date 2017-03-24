export class VegetableModel {
    constructor(public vegetableType: string, public vegetableName: string, public items: any[]){
    }

    addItem(item){
        this.items.push({
            vegetableType: item,
            vegetableName: item,
        });
    }

removeItem(item){
        for(var i = 0; i < this.items.length; i++) {
            if(this.items[i] == item){
                this.items.splice(i, 1);
            }
        }
    }

}