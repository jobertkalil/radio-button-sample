export interface IGenericObject {
  [key: string]: any;
}

export interface INameValue {
  name: any;
  value: any;
}

export interface IChoice {
  id: string;
  value: string;
}

export interface IOrder {
  preference: IChoice;
  meal: IChoice;
  side: IChoice;
}

export interface IRules {
  [key: string]: number[];
}
