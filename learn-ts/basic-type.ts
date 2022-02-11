const bool: boolean = true;

const num: number = 123;
const binaryNumber: number = 0b111;

const n: null = null;
const un: undefined = undefined;

const message: string = `hello`;
const str: string = "str";

//null和undefined是所有类型的子类型
const num2: number = null;
const str2: string = undefined;

let notSure: any = 4;
notSure = "may";
notSure = true;
notSure.myName;
notSure.getName();

let numberOrString: number | string = 123;
numberOrString = "abc";

let arrOfNumbers: number[] = [1, 2, 3, "23"];
arrOfNumbers.push(5);
arrOfNumbers.push("22");

function test() {
  console.log(arguments);
  arguments.length;
  arguments.forEach;

  let arr: any[] = arguments;
}
//放不同类型的数据到数组里  tuple：合并不同数据的数组,且数量也被限定
let user: [string, number] = ["viking", 1]; //
user = ["ee", 22, 22];
