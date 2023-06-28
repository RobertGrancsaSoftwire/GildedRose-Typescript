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
                case 'Aged Brie':
                    if (this.items[i].quality < 50) {
                        this.items[i].quality++;
                    }
                    this.items[i].sellIn--;
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    if (this.items[i].quality < 50) {
                        this.items[i].quality++
                        if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
                            this.items[i].quality++;
                        }
                        if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
                            this.items[i].quality++;
                        }
                    }

                    this.items[i].sellIn--;
                    break;
                case 'Sulfuras, Hand of Ragnaros':
                    break;
                default:
                    if (this.items[i].quality > 0) {
                        this.items[i].quality--;
                    }
                    this.items[i].sellIn--;
                    break;
            }

            if (this.items[i].sellIn < 0) {
                if (itemName == 'Backstage passes to a TAFKAL80ETC concert') {
                    this.items[i].quality = 0;
                } else if (itemName != 'Aged Brie' && this.items[i].quality > 0 && itemName != 'Sulfuras, Hand of Ragnaros') {
                    this.items[i].quality--;
                } else if (this.items[i].quality < 50) {
                    this.items[i].quality++;
                }
            }
        }

        return this.items;
    }
}
