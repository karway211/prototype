class FoodDate {
  constructor(id, name, nameDescription, ingredients, portions, gift, customer, description, cont, available) {
    this.id = id;
    this.name = name;
    this.nameDescription = nameDescription;
    this.ingredients = ingredients;
    this.portions = portions;
    this.gift = gift;
    this.customer = customer;
    this.description = description;
    this.cont = cont;
    this.available = available;
  }
}
const catsData1 = new FoodDate(1, 'Нямушка', 'Сказочное заморское яство', 'с фуа-гра', 10, 'мышь в подарок'
                              , '', 'Печень утки разварная с артишоками.', '0,5', true);
const catsData2 = new FoodDate(2, 'Нямушка', 'Сказочное заморское яство', 'с рыбой', 40, '2 мыши в подарок'
                              , '', 'Головы щучьи с чесноком да свежайшая сёмгушка.', '2', true);
const catsData3 = new FoodDate(3, 'Нямушка', 'Сказочное заморское яство', 'с курой', 100, '5 мышей в подарок'
                              , 'заказчик доволен', 'Филе из цыплят с трюфелями в бульоне.', '5', false);
const catsData = [catsData1, catsData2, catsData3];

export default catsData;
