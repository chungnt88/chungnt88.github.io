const random_int = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

angular.module("app", []).controller("controller", function ($scope) {
    let min = Number(con7.params.min);
    let max = Number(con7.params.max);

    let ok = [];
    for (let i = 0; i < 100; i++) {
        ok.push(con7.params.plus ? random_plus(min, max) : random_minus(min, max));
    }
    $scope.model = ok;
});

function random_plus(min, max) {
    let n1 = random_int(min, max);
    let n2 = random_int(0, max);
    return { v1: n1 > n2 ? n2 : n1, v2: n1 > n2 ? n1 - n2 : n2 - n1, v0: "+" };
}

function random_minus(min, max) {
    let n1 = random_int(min, max);
    let n2 = random_int(min, max);
    return { v1: n1 > n2 ? n1 : n2, v2: n1 > n2 ? n1 - n2 : n2 - n1, v0: "-" };
}
