export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            let itemName = this.items[i].name;
            switch (itemName) {
                case 'Sulfuras, Hand of Ragnaros':
                    continue;
                case 'Aged Brie':
                    this.items[i].quality = Math.min(this.items[i].quality + 1, 50);
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    if (this.items[i].sellIn < 6) {
                        this.items[i].quality = Math.min(this.items[i].quality + 3, 50);
                    } else if (this.items[i].sellIn < 11) {
                        this.items[i].quality = Math.min(this.items[i].quality + 2, 50);
                    } else {
                        this.items[i].quality = Math.min(this.items[i].quality + 1, 50);
                    }

                    break;
                case 'Conjured Mana Cake':
                    this.items[i].quality = Math.max(this.items[i].quality - 2, 0);
                    break;
                default:
                    this.items[i].quality = Math.max(this.items[i].quality - 1, 0);
                    break;
            }
            this.items[i].sellIn--;

            if (this.items[i].sellIn < 0) {
                if (itemName == 'Backstage passes to a TAFKAL80ETC concert') {
                    this.items[i].quality = 0;
                } else if (itemName == 'Conjured Mana Cake') {
                    this.items[i].quality = Math.max(this.items[i].quality - 2, 0);

                } else if (itemName == 'Aged Brie') {
                    this.items[i].quality = Math.min(this.items[i].quality + 1, 50);
                } else {
                    this.items[i].quality = Math.max(this.items[i].quality - 1, 0);
                }
            }
        }

        return this.items;
    }
}
