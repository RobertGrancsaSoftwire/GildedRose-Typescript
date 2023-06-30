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

enum ItemNames {
    Sulfuras = 'Sulfuras, Hand of Ragnaros',
    AgedBrie = 'Aged Brie',
    BackstagePasses = 'Backstage passes to a TAFKAL80ETC concert',
    ManaCake = 'Conjured Mana Cake'
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
                case ItemNames.Sulfuras:
                    continue;
                case ItemNames.AgedBrie:
                    this.items[i].quality = Math.min(this.items[i].quality + 1, 50);
                    break;
                case ItemNames.BackstagePasses:
                    if (this.items[i].sellIn < 6) {
                        this.items[i].quality = Math.min(this.items[i].quality + 3, 50);
                    } else if (this.items[i].sellIn < 11) {
                        this.items[i].quality = Math.min(this.items[i].quality + 2, 50);
                    } else {
                        this.items[i].quality = Math.min(this.items[i].quality + 1, 50);
                    }

                    break;
                case ItemNames.ManaCake:
                    this.items[i].quality = Math.max(this.items[i].quality - 2, 0);
                    break;
                default:
                    this.items[i].quality = Math.max(this.items[i].quality - 1, 0);
                    break;
            }
            this.items[i].sellIn--;

            if (this.items[i].sellIn < 0) {
                if (itemName === ItemNames.BackstagePasses) {
                    this.items[i].quality = 0;
                } else if (itemName === ItemNames.ManaCake) {
                    this.items[i].quality = Math.max(this.items[i].quality - 2, 0);
                } else if (itemName === ItemNames.AgedBrie) {
                    this.items[i].quality = Math.min(this.items[i].quality + 1, 50);
                } else {
                    this.items[i].quality = Math.max(this.items[i].quality - 1, 0);
                }
            }
        }

        return this.items;
    }
}
