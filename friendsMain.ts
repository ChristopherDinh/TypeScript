import {Friends} from './Friends';

let f1: Friends = new Friends("Ann",27,"ann@ann.com",true);
let f2: Friends = new Friends("Bill",27,"bill@bill.com",false);

let fArray: Friends[] = [f1,f2];

for (let names of fArray){
    console.log(names.about());
}