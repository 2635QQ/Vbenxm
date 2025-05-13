//定义一个接口，用于限制person对象的具体属性
export interface PersonInter{
    id:string,
    name:string,
    age:number,
    x?:number  //可选属性，即可有可无
}
//自定义一个类型
//export type Persons = Array<PersonInter>
export type Persons = PersonInter[]
