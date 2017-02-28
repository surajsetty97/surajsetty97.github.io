app.controller('MainController', ['$scope', function($scope) {
    $scope.projects = [{
            name: 'Gastro Game',
            img: "img/Gastro.png",
            description: 'The game involves an avatar consuming good blobs and avoiding bad blobs. There will be bombs and bonus collectables as the game progresses. Try to get as many points as you can without hitting the bad blobs. Three strikes and you are out!',
            link: 'https://github.com/surajsetty97/GastroGame'
        },
        {
            name: 'Tree of Life',
            img: "img/TreeOfLife.png",
            description: 'The program reads values from an input file, and organizes the values based on their genus, rank, family, etc. Utilizing a tree structure and hashmap, an algorithm outputs all the values in a readable indented manner.',
            link: 'https://github.com/surajsetty97/TreeOfLife'
        }
    ];
}]);
