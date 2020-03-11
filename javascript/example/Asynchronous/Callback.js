console.log("========== 콜백 함수를 쓰기 전 ==========");

function findUser(id) {
    let user;
    setTimeout(function() {
        console.log("waited 0.1 sec");
        user = {
            id : id,
            name : "User" + id,
            email : id + '@test.com'
        };
    }, 100);
    return user;
}

const user = findUser(1);
console.log("user:", user);

console.log("========== 콜백 함수를 쓴 후 ==========");

function findUserAndCallBack(id, cb) {
    setTimeout(function() {
        console.log("waited 0.1 sec");
        const cbUser = {
            id : id,
            name : "User" + id,
            email : id + "@test.com"
        };
        cb(cbUser);
    }, 100);
}

findUserAndCallBack(1, function(cbUser) {
    console.log("user:", cbUser)
});
