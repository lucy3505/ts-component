interface IPerson {
  name: string;
  age: number;
}

let viking: IPerson = {
  name: "viking",
  age: 12,
};

viking = {
  //形状必须完全匹配
  name: "3",
};

interface IPerson2 {
  readonly id: number; //只读属性
  name: string;
  age?: number; //可选属性
}

let p: IPerson2 = {
  name: "p",
  id: 22,
};
p.id = 22;
