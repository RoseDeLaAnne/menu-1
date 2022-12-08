interface IType {
  id: number;
  name: string;
}

export default interface IDish {
  id: number;
  category: string;
  weight: number;
  name: string;
  price: number;
  types: IType[];
  color: string;
  backgroundColor: string;
  imageUrl: string;
}
