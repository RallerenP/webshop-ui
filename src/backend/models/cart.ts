import type CartItem from "./cartitem";

export default class Cart
{
    public items: CartItem[] = [];

    public count(): number
    {
        let num = 0;
        for (let item of this.items)
        {
            num += item.amount;
        }
        return num;
    }
}