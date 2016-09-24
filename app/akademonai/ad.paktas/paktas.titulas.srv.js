'use strict';

angular.module('SatanApp.paktas')
    .factory('paktasVardaiFactory', ['$http', function($http) {

        var paktasVardai = {};

        var abominacija1Wafter = ['Kliukpis', 'Plunkius', '"kas čia dabar?"', ', MC "Hell`s Angels"', ', neva tai', 'Vinkšna', 'Raukelė', ', MG valda', '3rd lvl Bard', ', be teistumo', ' geros dienos.', ' 21 metai', ' gelinis nagų lakavimas Alytus'];

        var abominacija2W1st = ['siaubo', 'apkiautėlių', 'krešmenų', 'AMB`o', 'karštligės', 'klejonių', 'čiulkinių', 'srutpalaikių', 'sušutmens', 'čvirpštų', 'klerferdalijos', 'akrofnijos', 'čirvirvyrių', 'aparatų', 'mašinų', 'psoriazės'];

        var abominacija2W2nd = ['srutpalaikis', 'sušutmuo', 'čvirpštas', 'klerferdas', 'čiulkinys', 'akrofnija', 'čirvirvyrė', 'aparatas', 'klejonė', 'psoriazė', 'siaubas', 'krešmuo', 'apkiautėlis', 'vaisius'];

        var istvirkelis2Wnd = ['duobkasys', 'alfonsas', 'mistras', 'Ložės pirmininkas', 'tikrasis narys', 'gizelis', 'tenkintojas', 'lipšnūnas', 'socdemas', 'konservatorius', 'liberalas', 'gražulininkas', 'amžinasis jaunikis', 'ekskursijų vadovas', 'auka'];

        var universal2W1st = ['kapinių', 'zakristijos', 'Prahos miesto', 'Senojo Testamento', 'valstybės užkulisių', 'klano', 'napoleonmečio', 'caro-maro laikų', 'gizelių', 'juodųjų mišių', 'Nekronomikono skaitovų', 'Padugnių', 'neva tai', 'autopsijos', 'pradinės mokyklos'];

        var istvirkele2W2nd = ['lėbautoja', 'madam', 'žiniuonė', 'valdybos pirmininkė', 'ligų platintoja', 'Valdovė', 'moteriškė', 'veteranė', 'tenkintoja', 'socialdemokratė', 'partietė', 'revoliucionierė', 'biržos galva', 'pavaduotoja', 'objektas', 'auka'];
            
        var akademonsFactory = {};

        /**
         * Titles
         */
        paktasVardai.getTitle = function (type, name) {

            var title = '';

            if(type === 'istvirkelis' || type === 'istvirkele') {
                //universal first
                title = universal2W1st[Math.floor(Math.random() * universal2W1st.length)];

                if(type === 'istvirkelis') {
                    //istvirkelis second
                    title += ' ' + istvirkelis2Wnd[Math.floor(Math.random() * istvirkelis2Wnd.length)] + ' ' + name;
                }
                if(type === 'istvirkele') {
                    //istvirkele second
                    title += ' ' + istvirkele2W2nd[Math.floor(Math.random() * istvirkele2W2nd.length)] + ' ' + name;
                }
            }

            if(type === 'abominacija') {
                title = name;
                var placement = Math.floor(Math.random() * 2);
                //Title after name
                if(placement === 1) {
                    title = name + ' ' + abominacija1Wafter[Math.floor(Math.random() * abominacija1Wafter.length)];
                }
                //Before name
                if(placement === 0) {
                    title = abominacija2W1st[Math.floor(Math.random() * abominacija2W1st.length)] + ' ' 
                        + abominacija2W2nd[Math.floor(Math.random() * abominacija2W2nd.length)] + ' '
                        + name;
                }
            }

            return title;
        };

        return paktasVardai;
}]);