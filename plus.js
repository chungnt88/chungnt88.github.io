const random_int = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const page_range = 39;

angular.module("app", []).controller("controller", function ($scope) {
    let min = Number(con7.params.min);
    let max = Number(con7.params.max);
    let plus = Number(con7.params.minus); // ? false : true;

    if (con7.params.com) {
        $scope.model = load_compare(min, max);
        $scope.title = "So sánh";
        $scope.view_com = true;
        return;
    }

    if (con7.params.mix) {
        $scope.model = load_mix(min, max);
        $scope.title = "Phép cộng & trừ";
        $scope.view_plus = true;
        return;
    }

    let ok = [];
    for (let k = 0; k < page_range; k++) {
        let temp = [];
        for (let i = 0; i < 4; i++) {
            switch (plus) {
                case 4:
                    v2 = random_int(2, 9);
                    v1 = v2 * random_int(min || 1, max || 100);
                    temp.push({v1, v2, v0: ":"});
                    break;
                case 3:                   
                    v2 = random_int(2, 9);
                    v1 = random_int(min || 1, max || 100);
                    temp.push({v1, v2, v0: "x"});
                    break;
                case 2:
                    temp.push(random_minus(min, max));
                    break;
                default:
                    temp.push(random_plus(min, max));
                    break;
            }
        }
        ok.push(temp);
    }
    $scope.model = ok;
    $scope.title = plus == 4 ? "Phép chia" : plus == 3 ? "Phép nhân" : plus == 2 ? "Phép cộng" : "Phép trừ";
    $scope.view_plus = true;
});

function load_compare(min, max) {
    let ok = [];
    for (let k = 0; k < page_range; k++) {
        let temp = [];
        for (let i = 0; i < 6; i++) {
            temp.push({ v: random_int(min, max) });     
        }
        ok.push(temp);
    }
    return ok;
}

function load_mix(min, max) {
    let ok = [];
    for (let k = 0; k < page_range; k++) {
        let temp = [];
        for (let i = 0; i < 4; i++) {
            temp.push(k % 2 ? random_plus(min, max) : random_minus(min, max));
        }
        ok.push(temp);
    }
    return ok;
}

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
