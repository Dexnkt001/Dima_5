import * as BD from './DataBase.js';


let arrGroup = [],
count = 0;
const arrInputs = document.querySelectorAll('input'),
form = document.querySelector('form');


class Group{
  constructor(id, args){
    this.id = id;
    this.number = args[0];
    this.kurs = args[1];
    this.fakult = args[2];
    this.countStud = args[3];
    this.email = args[4];
  }


set AddInformation(args){
[ this.number, this.kurs, this.fakult, this.countStud, this.email, this.id] = args;
}

get GetInformation(){
  return [this.number, this.kurs, this.fakult, this.countStud, this.email, this.id]
}

}

const Add = (Group, id, ...args) =>{
  return new Group(id, ...args);
}

const Delete = (id) =>{
  arrGroup.splice(id,1);
}


const UseAdd = () => {
  arrGroup.push(Add(Group, count, Array.prototype.map.call(arrInputs, (element) => element.value)));
  if(count === 0){
  const list = document.createElement('ul');
document.querySelector('.menu').insertAdjacentElement("afterEnd", list);
const li = document.createElement('li');
li.innerHTML = count+1
document.querySelector('ul').append(li)
  }
  else {
    const li = document.createElement('li');
    li.innerHTML = count+1
document.querySelector('ul').append(li)
  }
  count++;
}

function App(baseName, tableName){
  this.db = new BD.DataBase(baseName);
  this.tbl = tableName;
  this.fields =
}


document.getElementById('button_1').addEventListener('click', UseAdd);
document.querySelector('.menu').addEventListener('click', () => {
  document.querySelector('span').classList.toggle('activeS')
})
document.getElementById('button_2').addEventListener('click',()=>{form.reset()});
document.getElementById('button_3').addEventListener('click', Delete);
