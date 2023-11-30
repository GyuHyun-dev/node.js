class Human {
    // 필드 , 생성자, 메소드
    constructor() { // constructor() 안에 생성해야함 자바랑 다름;;
        // _로 시작하는 필드는 건들지마라 라는 암묵적인 룰
        this._ssn;
        this._name = 'Hong';
        this._age;
    } 
    set ssn(ssn){
        this._ssn = ssn;
    }
    get ssn(){
        return this._ssn;
    }

    set name(name){
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set age(age){
        this._age = age;
    }
    get age() {
        return this._age;
    }

    getInfo(){
        console.log(this._ssn, this._name, this._age);
    }
}

let hu = new Human();
hu.ssn = '940531';
hu.name = 'Park';
hu.age = 30;
hu.getInfo();