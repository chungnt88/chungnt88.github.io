angular.module('app', [])
    .controller('controller', function ($scope) {
        $scope.font = ["", "fa-cat", "fa-crow", "fa-apple-alt", "fa-carrot", "fa-pizza-slice", "fa-fish", "fa-frog", "fa-horse", "fa-hamburger"];
        $scope.color = ["text-info", "text-primary", "text-success"];
        $scope.l1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        $scope.num = 1;
        $scope.ran = 1;

        $scope.Num = function (n) {
            $scope.num = n;
            $(".card").removeClass("card-x");
            $(".kq-x").removeClass("d-none");
            $(".kq-y").addClass("d-none");
        }

        $scope.Ran = function () {
            var ran = Math.floor(Math.random() * 9) + 1;
            $(".card").addClass("card-x");
            $(".card-" + ran).removeClass("card-x");
            $(".kq-x.kq-" + ran).removeClass("d-none");
            $(".kq-y.kq-" + ran).addClass("d-none");
        }

        $scope.Toggle = function (x) {
            $(".kq-" + x).toggleClass("d-none");
        }
    });