import { Item, GildedRose } from '../app/gilded-rose';
import {assert} from "chai";
// Add a master test here

describe("Master test", () => {
    it("One iteration", () => {
        const items: Item[] = [];

        items.push(new Item("Aged Brie", 15, 30));
        items.push(new Item("Aged Brie", -15, 30));
        items.push(new Item("Aged Brie", -15, 60));
        items.push(new Item("Sulfuras, Hand of Ragnaros", 15, 30));
        items.push(new Item("Sulfuras, Hand of Ragnaros", -1, 60));
        items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 25));
        items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 3, 49));
        items.push(new Item("Backstage passes to a TAFKAL80ETC concert", -4, 25));
        items.push(new Item("Something else", 0, 69));
        items.push(new Item("Something else negative", -10, 69));

        const app = new GildedRose(items);
        const firstIteration = app.updateQuality();

        const reference: Item[] = [];
        reference.push(new Item("Aged Brie", 14, 31));
        reference.push(new Item("Aged Brie", -16, 32));
        reference.push(new Item("Aged Brie", -16, 60));
        reference.push(new Item("Sulfuras, Hand of Ragnaros", 15, 30));
        reference.push(new Item("Sulfuras, Hand of Ragnaros", -1, 60));
        reference.push(new Item("Backstage passes to a TAFKAL80ETC concert", 14, 26));
        reference.push(new Item("Backstage passes to a TAFKAL80ETC concert", 2, 50));
        reference.push(new Item("Backstage passes to a TAFKAL80ETC concert", -5, 0));
        reference.push(new Item("Something else", -1, 67));
        reference.push(new Item("Something else negative", -11, 67));


        assert.deepEqual(firstIteration, reference);
    })

    it("More iterations", () => {
        const items: Item[] = [];

        items.push(new Item("Aged Brie", 15, 30));
        items.push(new Item("Aged Brie", -15, 30));
        items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 3, 49));
        items.push(new Item("Backstage passes to a TAFKAL80ETC concert", -4, 25));
        items.push(new Item("Something else", 0, 69));
        items.push(new Item("Something else negative", -10, 69));

        const reference: Item[] = [];
        reference.push(new Item("Aged Brie", 12, 33));
        reference.push(new Item("Aged Brie", -18, 36));
        reference.push(new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50));
        reference.push(new Item("Backstage passes to a TAFKAL80ETC concert", -7, 0));
        reference.push(new Item("Something else", -3, 63));
        reference.push(new Item("Something else negative", -13, 63));

        const app = new GildedRose(items);
        app.updateQuality();
        app.updateQuality();
        const moreIters = app.updateQuality();
        assert.deepEqual(moreIters, reference);
    });

    it("Bad arguments", () => {
        const app = new GildedRose();
        const result = app.updateQuality();

        assert.equal(result.length, 0);
    })
})