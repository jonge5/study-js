// js에서는 객체 내부의 필드를 프로퍼티라고 부른다.
let user = {
    name: "한동석",
    age: 30,
    address: "경기도",
    introduce: () => {
        console.log("Hi");
    },
};
console.log(typeof user);
user.introduce();
console.log(user.name);
console.log(user["name"]);
