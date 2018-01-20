app.controller('MainController', ['$scope', function($scope) {

    $scope.cont = 0;

    $scope.plusOne = function () {
        $scope.cont += 1;

        if ($scope.cont > 149)
        $scope.cont = 0;

    };
    
    $scope.minusOne = function () {
        $scope.cont -= 1;
        
        if ($scope.cont < 0)
            $scope.cont = 149;

    };
    
    
    $scope.pokemon = [

        {id: 001, nome: 'Bulbasaur', tipo: 'Grass', source: '001'}, 

        {id: 002, nome: 'Ivysaur', tipo: 'Grass', source: '002'}, 
        
        {id: 003, nome: 'Venusaur', tipo: 'Grass', source: '003'}, 
                
        {id: 004, nome: 'Charmander', tipo: 'Fire', source: '004'}, 
        
        {id: 005, nome: 'Charmeleon', tipo: 'Fire', source: '005'}, 
        
        {id: 006, nome: 'Charizard', tipo: 'Fire', source: '006'}, 
                        
        {id: 007, nome: 'Squirtle', tipo: 'Water', source: '007'}, 
        
        {id: 008, nome: 'Wartortle', tipo: 'Water', source: '008'}, 
        
        {id: 009, nome: 'Blastoise', tipo: 'Water', source: '009'}, 
                
        {id: 010, nome: 'Caterpie', tipo: 'Bug', source: '010'}, 
        
        {id: 011, nome: 'Metapod', tipo: 'Bug', source: '011'}, 
        
        {id: 012, nome: 'Butterfree', tipo: 'Bug', source: '012'}, 
        
        {id: 013, nome: 'Weedle', tipo: 'Bug', source: '013'}, 
        
        {id: 014, nome: 'Kakuna', tipo: 'Bug', source: '014'}, 
        
        {id: 015, nome: 'Beedrill', tipo: 'Bug', source: '015'}, 
                
        {id: 016, nome: 'Pidgey', tipo: 'Normal', source: '016'}, 
        
        {id: 017, nome: 'Pidgeotto', tipo: 'Normal', source: '017'}, 
        
        {id: 018, nome: 'Pidgeot', tipo: 'Normal', source: '018'}, 
                
        {id: 019, nome: 'Rattata', tipo: 'Normal', source: '019'}, 
        
        {id: 020, nome: 'Raticate', tipo: 'Normal', source: '020'}, 
        
        {id: 021, nome: 'Spearow', tipo: 'Normal', source: '021'}, 
        
        {id: 022, nome: 'Fearow', tipo: 'Normal', source: '022'}, 
        
        {id: 023, nome: 'Ekans', tipo: 'Poison', source: '023'}, 
        
        {id: 024, nome: 'Arbok', tipo: 'Poison', source: '024'}, 
        
        {id: 025, nome: 'Pikachu', tipo: 'Electric', source: '025'}, 
        
        {id: 026, nome: 'Raichu', tipo: 'Electric', source: '026'}, 
        
        {id: 027, nome: 'Sandshrew', tipo: 'Ground', source: '027'}, 
        
        {id: 028, nome: 'Sandslash', tipo: 'Ground', source: '028'}, 
        
        {id: 029, nome: 'Nidoran', tipo: 'Poison', source: '029'}, 
        
        {id: 030, nome: 'Nidorina', tipo: 'Poison', source: '030'}, 
        
        {id: 031, nome: 'Nidoqueen', tipo: 'Poison', source: '031'}, 
        
        {id: 032, nome: 'Nidoran', tipo: 'Poison', source: '032'}, 
        
        {id: 033, nome: 'Nidorino', tipo: 'Poison', source: '033'}, 
        
        {id: 034, nome: 'Nidoking', tipo: 'Poison', source: '034'}, 
        
        {id: 035, nome: 'Clefairy', tipo: 'Fairy', source: '035'}, 
        
        {id: 036, nome: 'Clefable', tipo: 'Fairy', source: '036'}, 
        
        {id: 037, nome: 'Vulpix', tipo: 'Fire', source: '037'}, 
        
        {id: 038, nome: 'Ninetales', tipo: 'Fire', source: '038'}, 
        
        {id: 039, nome: 'Jigglypuff', tipo: 'Normal', source: '039'}, 
        
        {id: 040, nome: 'Wigglytuff', tipo: 'Normal', source: '040'}, 
        
        {id: 041, nome: 'Zubat', tipo: 'Poison', source: '041'}, 
        
        {id: 042, nome: 'Golbat', tipo: 'Poison', source: '042'}, 
        
        {id: 043, nome: 'Oddish', tipo: 'Grass', source: '043'}, 
        
        {id: 044, nome: 'Gloom', tipo: 'Grass', source: '044'}, 
        
        {id: 045, nome: 'Vileplume', tipo: 'Grass', source: '045'}, 
        
        {id: 046, nome: 'Paras', tipo: 'Bug', source: '046'}, 
        
        {id: 047, nome: 'Parasect', tipo: 'Bug', source: '047'}, 
        
        {id: 048, nome: 'Venonat', tipo: 'Bug', source: '048'}, 
        
        {id: 049, nome: 'Venomoth', tipo: 'Bug', source: '049'}, 
        
        {id: 050, nome: 'Diglett', tipo: 'Ground', source: '050'}, 
        
        {id: 051, nome: 'Dugtrio', tipo: 'Ground', source: '051'}, 
        
        {id: 052, nome: 'Meowth', tipo: 'Normal', source: '052'}, 
        
        {id: 053, nome: 'Persian', tipo: 'Normal', source: '053'}, 
        
        {id: 054, nome: 'Psyduck', tipo: 'Water', source: '054'}, 
        
        {id: 055, nome: 'Golduck', tipo: 'Water', source: '055'}, 
        
        {id: 056, nome: 'Mankey', tipo: 'Fighting', source: '056'}, 
        
        {id: 057, nome: 'Primeape', tipo: 'Fighting', source: '057'}, 
        
        {id: 058, nome: 'Growlithe', tipo: 'Fire', source: '058'}, 
        
        {id: 059, nome: 'Arcanine', tipo: 'Fire', source: '059'}, 
        
        {id: 060, nome: 'Poliwag', tipo: 'Water', source: '060'}, 
        
        {id: 061, nome: 'Poliwhirl', tipo: 'Water', source: '061'}, 
        
        {id: 062, nome: 'Poliwrath', tipo: 'Water', source: '062'}, 
        
        {id: 063, nome: 'Abra', tipo: 'Psychic', source: '063'}, 
        
        {id: 064, nome: 'Kadabra', tipo: 'Psychic', source: '064'}, 
        
        {id: 065, nome: 'Alakazam', tipo: 'Psychic', source: '065'}, 
                
        {id: 066, nome: 'Machop', tipo: 'Fighting', source: '066'}, 
        
        {id: 067, nome: 'Machoke', tipo: 'Fighting', source: '067'}, 
        
        {id: 068, nome: 'Machamp', tipo: 'Fighting', source: '068'}, 
        
        {id: 069, nome: 'Bellsprout', tipo: 'Grass', source: '069'}, 
        
        {id: 070, nome: 'Weepinbell', tipo: 'Grass', source: '070'}, 
        
        {id: 071, nome: 'Victreebel', tipo: 'Grass', source: '071'}, 
        
        {id: 072, nome: 'Tentacool', tipo: 'Water', source: '072'}, 
        
        {id: 073, nome: 'Tentacruel', tipo: 'Water', source: '073'}, 
        
        {id: 074, nome: 'Geodude', tipo: 'Rock', source: '074'}, 
        
        {id: 075, nome: 'Graveler', tipo: 'Rock', source: '075'}, 
        
        {id: 076, nome: 'Golem', tipo: 'Rock', source: '076'}, 
        
        {id: 077, nome: 'Ponyta', tipo: 'Fire', source: '077'}, 
        
        {id: 078, nome: 'Rapidash', tipo: 'Fire', source: '078'}, 
        
        {id: 079, nome: 'Slowpoke', tipo: 'Water', source: '079'}, 
        
        {id: 080, nome: 'Slowbro', tipo: 'Water', source: '080'}, 
                
        {id: 081, nome: 'Magnemite', tipo: 'Electric', source: '081'}, 
        
        {id: 082, nome: 'Magneton', tipo: 'Electric', source: '082'}, 
                
        {id: 084, nome: 'Doduo', tipo: 'Normal', source: '084'}, 
        
        {id: 085, nome: 'Dodrio', tipo: 'Normal', source: '085'}, 
        
        {id: 086, nome: 'Seel', tipo: 'Water', source: '086'}, 
        
        {id: 087, nome: 'Dewgong', tipo: 'Water', source: '087'}, 
        
        {id: 088, nome: 'Grimer', tipo: 'Poison', source: '088'}, 
        
        {id: 089, nome: 'Muk', tipo: 'Poison', source: '089'}, 
        
        {id: 090, nome: 'Shellder', tipo: 'Water', source: '090'}, 
        
        {id: 091, nome: 'Cloyster', tipo: 'Water', source: '091'}, 
        
        {id: 092, nome: 'Gastly', tipo: 'Ghost', source: '092'}, 
        
        {id: 093, nome: 'Haunter', tipo: 'Ghost', source: '093'}, 
        
        {id: 094, nome: 'Gengar', tipo: 'Ghost', source: '094'}, 
                
        {id: 095, nome: 'Onix', tipo: 'Rock', source: '095'}, 
        
        {id: 096, nome: 'Drowzee', tipo: 'Psychic', source: '096'}, 
        
        {id: 097, nome: 'Hypno', tipo: 'Psychic', source: '097'}, 
        
        {id: 098, nome: 'Krabby', tipo: 'Water', source: '098'}, 
        
        {id: 099, nome: 'Kingler', tipo: 'Water', source: '099'}, 
        
        {id: 100, nome: 'Voltorb', tipo: 'Electric', source: '100'}, 
        
        {id: 101, nome: 'Electrode', tipo: 'Electric', source: '101'}, 
        
        {id: 102, nome: 'Exeggcute', tipo: 'Grass', source: '102'}, 
        
        {id: 103, nome: 'Exeggutor', tipo: 'Grass', source: '103'}, 
        
        {id: 104, nome: 'Cubone', tipo: 'Ground', source: '104'}, 
        
        {id: 105, nome: 'Marowak', tipo: 'Ground', source: '105'}, 
        
        {id: 106, nome: 'Hitmonlee', tipo: 'Fighting', source: '106'}, 
        
        {id: 107, nome: 'Hitmonchan', tipo: 'Fighting', source: '107'}, 
        
        {id: 108, nome: 'Lickitung', tipo: 'Normal', source: '108'}, 
        
        {id: 109, nome: 'Koffing', tipo: 'Poison', source: '109'}, 
        
        {id: 110, nome: 'Weezing', tipo: 'Poison', source: '110'}, 
        
        {id: 111, nome: 'Rhyhorn', tipo: 'Ground', source: '111'}, 
        
        {id: 112, nome: 'Rhydon', tipo: 'Ground', source: '112'}, 
        
        {id: 113, nome: 'Chansey', tipo: 'Normal', source: '113'}, 
        
        {id: 114, nome: 'Tangela', tipo: 'Grass', source: '114'}, 
        
        {id: 115, nome: 'Kangaskhan', tipo: 'Normal', source: '115'}, 
                
        {id: 116, nome: 'Horsea', tipo: 'Water', source: '116'}, 
        
        {id: 117, nome: 'Seadra', tipo: 'Water', source: '117'}, 
        
        {id: 118, nome: 'Goldeen', tipo: 'Water', source: '118'}, 
        
        {id: 119, nome: 'Seaking', tipo: 'Water', source: '119'}, 
        
        {id: 120, nome: 'Staryu', tipo: 'Water', source: '120'}, 
        
        {id: 121, nome: 'Starmie', tipo: 'Water', source: '121'}, 
        
        {id: 122, nome: 'Mr. Mime', tipo: 'Psychic', source: '122'}, 
        
        {id: 123, nome: 'Scyther', tipo: 'Bug', source: '123'}, 
        
        {id: 124, nome: 'Jynx', tipo: 'Ice', source: '124'}, 
        
        {id: 125, nome: 'Electabuzz', tipo: 'Electric', source: '125'}, 
        
        {id: 126, nome: 'Magmar', tipo: 'Fire', source: '126'}, 
        
        {id: 127, nome: 'Pinsir', tipo: 'Bug', source: '127'}, 
                
        {id: 128, nome: 'Tauros', tipo: 'Normal', source: '128'}, 
        
        {id: 129, nome: 'Magikarp', tipo: 'Water', source: '129'}, 
        
        {id: 130, nome: 'Gyarados', tipo: 'Water', source: '130'}, 
                
        {id: 131, nome: 'Lapras', tipo: 'Water', source: '131'}, 
        
        {id: 132, nome: 'Ditto', tipo: 'Normal', source: '132'}, 
        
        {id: 133, nome: 'Eevee', tipo: 'Normal', source: '133'}, 
        
        {id: 134, nome: 'Vaporeon', tipo: 'Water', source: '134'}, 
        
        {id: 135, nome: 'Jolteon', tipo: 'Electric', source: '135'}, 
        
        {id: 136, nome: 'Flareon', tipo: 'Fire', source: '136'}, 
        
        {id: 137, nome: 'Porygon', tipo: 'Normal', source: '137'}, 
        
        {id: 138, nome: 'Omanyte', tipo: 'Rock', source: '138'}, 
        
        {id: 139, nome: 'Omastar', tipo: 'Rock', source: '139'}, 
        
        {id: 140, nome: 'Kabuto', tipo: 'Rock', source: '140'}, 
        
        {id: 141, nome: 'Kabutops', tipo: 'Rock', source: '141'}, 
        
        {id: 142, nome: 'Aerodactyl', tipo: 'Rock', source: '142'}, 
                
        {id: 143, nome: 'Snorlax', tipo: 'Normal', source: '143'}, 
        
        {id: 144, nome: 'Articuno', tipo: 'Ice', source: '144'}, 
        
        {id: 145, nome: 'Zapdos', tipo: 'Electric', source: '145'}, 
        
        {id: 146, nome: 'Moltres', tipo: 'Fire', source: '146'}, 
        
        {id: 147, nome: 'Dratini', tipo: 'Dragon', source: '147'}, 
        
        {id: 148, nome: 'Dragonair', tipo: 'Dragon', source: '148'}, 
        
        {id: 149, nome: 'Dragonite', tipo: 'Dragon', source: '149'}, 
        
        {id: 150, nome: 'Mewtwo', tipo: 'Psychic', source: '150'}, 
                        
        {id: 151, nome: 'Mew', tipo: 'Psychic', source: '151'}
    ]

}]);