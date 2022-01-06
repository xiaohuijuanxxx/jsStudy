//能继承原型上的方法，以及父类属性

function Person(name, age){
    this.name = name;
    this.age = 18;
    say = function(){
        console.log('name is '+name+'age is '+age);
    }
}

Person.prototype.talk = function(){
    alert('父类function')
}

function Children(name,sex){
    Person.call(this);
    this.sex = sex;
    this.name = name;
}

Children.prototype.xxx = function(){
    alert("子类function");
}

Children.prototype = Object.create(Person.prototype);

let child = new Children('xxx','男');
  
