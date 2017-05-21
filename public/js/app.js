(function() {
    'use strict';

    var app = angular.module('app', []);

    app.controller('ctrl', ['$scope', function($scope){
        $scope.mostrarPontoMainha = function(ponto) {
            $scope.pontoMainha = {
                letra: "Olha a  letra do ponto aí!",
                audio: ponto.arquivo
            }
        }

        $scope.musicas = [
            {titulo: 'Hino da Umbanda  Bandeira de Oxala'},
            {titulo: 'Pomba-Gira - Maria-Padilha - Edvander Oliveira'},
            {titulo: 'Oxala Criou a Terra Oxala criou o mar'}
        ]
        
        $scope.hierarquia = ['Pré Médium', 'Mão de Pemba', 'Mão de Santo', 'Iaworixalá', 'Mão de Fogo', 'Mão de Faca', 'Bori']

        $scope.pontosMainha = [
            {
                posicao: 'Anjo da Guarda',
                orixa: 'Santa Catarina',
                arquivo: 'santa_catarina_anaiza'
            },
            {
                posicao: 'Chefe de cabeça',
                orixa: 'Oxum Megá',
                arquivo: 'oxum_anaiza'
            },
            {
                posicao: 'Ajuntó',
                orixa: 'Xangô Kaô da Cachoeira',
                arquivo: 'xango_anaiza'
            },
            {
                posicao: '2º Orixá',
                orixa: 'Mariazinha da Praia',
                arquivo: 'ibeji_anaiza'
            },
            {
                posicao: '3º Orixá',
                orixa: 'Vovó Joaquina do Congo',
                arquivo: 'velha_anaiza'
            },
            {
                posicao: 'Gerente',
                orixa: 'Cabocla Jurema',
                arquivo: 'cabocla_anaiza'
            },
            {
                posicao: 'Chefe de Quimbanda',
                orixa: 'Exu Marabô da Encruzilhada',
                arquivo: 'marabo_anaiza'
            },
            {
                posicao: 'Bombogira',
                orixa: 'Bombogira',
                arquivo: 'bombogira_anaiza'
            }
        ]

        $scope.pontos = [
            {titulo: 'Rodrigo - Oxóssi'},
            {titulo: 'Luis - Ogum'},
            {titulo: 'Flávia - Oxum'}
        ];
    }]);
    
})();