'use strict';

angular.module('SatanApp.paktas')
    .factory('paktasVardaiFactory', ['$http', function($http) {

        var paktasVardai = {};

        var abominacija1Wafter = ['kliukpis', 'plunkius', '"kas čia dabar?"']

        var abominacija2W1st = ['siaubo', 'apkiautimo', 'betvarkės', 'anatemos']

        var abominacija2W2nd = ['srutpalaikis', 'sušutmuo', 'čvirpštas', 'klerferdas', 'čiulkinys']

        var istvirkelis2Wnd = ['duobkasys', 'alfonsas', 'mistras', 'Ložės pirmininkas', 'tikrasis narys', 'gizelis', 'tenkintojas', 'lipšnūnas']

        var universal2W1st = ['kapinių', 'zakristijos', 'Prahos miesto', 'Senojo Testamento', 'valstybės užkulisių', 'klano', 'napoleonmečio', 'caro-maro laikų', 'gizelio', 'juodųjų mišių', 'Nekronomikono skaitovų', 'Padugnių', 'neva tai']

        var istvirkele2W2nd = ['lėbautoja', 'madam', 'žiniuonė', 'valdybos pirmininkė', 'ligų platintoja', 'Valdovė', 'moteriškė', 'veteranė', 'tenkintoja', 'socialdemokratė']
        
        var akademonsFactory = {};

        /**
         * Titles
         */
        paktasVardai.getTitle = function (type, name) {

            var title = '';

            if(type === 'istvirkelis' || type === 'istvirkele') {
                //universal first
                title = name + ' ' + universal2W1st[Math.floor(Math.random() * universal2W1st.length)];

                if(type === 'istvirkelis') {
                    title += ' ' + istvirkelis2Wnd[Math.floor(Math.random() * istvirkelis2Wnd.length)];
                }
                if(type === 'istvirkele') {
                    title += ' ' + istvirkele2W2nd[Math.floor(Math.random() * istvirkele2W2nd.length)];
                }
            }

            if(type === 'abominacija') {
                
            }

            return title;
        };

        return paktasVardai;
}]);