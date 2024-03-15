export interface CardType {
  id: string;
  title: string;
  body: string[];
  price: number;
  type: string;
}

export interface CardsType {
  cards: CardType[];
}
