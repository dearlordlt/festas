angular.module('SatanApp.directives').directive('blasphemer', function() {
    return {
        scope: {},
        templateUrl: '/akademonai/ad.directives/ad.blasphemer.drv.html',
        controller: ['$scope', 'blasphemerSrv', function($scope, blasphemerSrv) {
            $scope.posts = [];
	        $scope.form = {};
	        $scope.error = null;
	        $scope.limit = 5;
	        
	        $scope.more = function () {
		        $scope.limit += 5;
		        getBlasphemes();
	        };
	        
	        var getBlasphemes = function () {
		        blasphemerSrv.getBlasphemes($scope.limit, 0).success(function (data) {
			        $scope.posts = data;
			        $scope.error = null;
		        }).error(function (error) {
			        console.log(error);
			        $scope.error = 'Could not contact satan!';
		        });
	        };
	        getBlasphemes();
	        
	        $scope.blaspheme = function () {
	        	if ($scope.form.message < 3 && $scope.form.username < 3) {
	        		$scope.error = 'You don`t play with Satan!';
			        return;
		        } else {
		        	$scope.error = null;
		        }
	        	
		        blasphemerSrv.message = $scope.form.message;
		        blasphemerSrv.username = $scope.form.username;
	        	blasphemerSrv.post().success(function (data) {
			        $scope.form.message = '';
			        $scope.form.username = '';
			        $scope.keistiSnuki();
			        $scope.error = null;
			        getBlasphemes();
		        }).error(function (error) {
			        console.log(error);
			        $scope.error = 'Could not contact satan!';
		        });
		        
	        };
	        
	        
            $scope.basePathAvatars = 'assets/avatars/';
            $scope.basePathBots = 'assets/avatars/bots/';
            $scope.avatars = [
                    "Japanese_Demon_MOCK__37974_std.png",
                    "Wl2_portrait_dog.png",
                    "Y-Gu7qpK.png",
                    "Zai952bu.png",
                    "aparatas.png",
                    "avatar_0b3c7c56f712_128.png",
                    "avatar_108e6bb7fc3d_128.png",
                    "avatar_125615824933_128.png",
                    "avatar_2197684cd711_128.png",
                    "avatar_2d4a37b998b3_128.png",
                    "avatar_2f5ab9dd289f_96.png",
                    "avatar_8b817384b116_128.png",
                    "avatar_a5cd5df5054e_128.png",
                    "avatar_bf0c4e6ef8d0_128.png",
                    "avatar_d703f0fbf2c0_128.png",
                    "avatar_f69048063872_128.png",
                    "cat_skull.png",
                    "good_boy_____by_saffronpanther-d8d1lf4.png",
                    "grinic_kreign_mq.png",
                    "satanHead.png",
                    "skeleton_PNG5552.png",
                    "star-256.png",
                    "succubus_pic.png",
                    "title119589078.png",
                    "title200181995.png",
                    "title297197317.png",
                    "title379341139.png",
                    "title393518232.png",
                    "title420932873.png",
                    "title441294333.png",
                    "title454856223.png",
                    "title475208221.png",
                    "title49856557.png",
                    "title498587187.png",
                    "title501097291.png",
                    "title516556465.png",
                    "title568578088.png",
                    "title572800711.png",
                    "title605077739.png",
                    "title636991968.png",
                    "title648354040.png",
                    "title685663863.png",
                    "title69751520.png",
                    "title699567984.png",
                    "title711406535.png",
                    "title738642826.png",
                    "title801924374.png",
                    "title817636211.png",
                    "title819932945.png",
                    "title829860852.png",
                    "title835297423.png",
                    "title855529559.png",
                    "title930821348.png",
                    "title993922740.png",
                    "trump.png",
                    "yBuDxvGl.png"
                ];

                $scope.bots = [
                    "ZamolskiuRomas.png",
                    "aparatas2.png",
                    "augustus.png",
                    "cool.png",
                    "doctor.png",
                    "files.js",
                    "grazulis.png",
                    "henyte.png",
                    "jonka.png",
                    "morda.png",
                    "rasputin.jpg",
                    "vytas.png",
                    "yesferatu.png",
                    "zukauskas.png"
                ];
	
	        $scope.keistiSnuki = function () {
		        $scope.form.snukis = $scope.basePathAvatars + $scope.avatars [Math.round(Math.random()*($scope.avatars.length-1))];
		        blasphemerSrv.avatar = $scope.form.snukis;
	        };
	        $scope.keistiSnuki();
	
        }]
    }
});