const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')

const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Valor total do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })

    test('Retornar valor total de um projeto dado as funcionalidades e valor horas da pessoa desenvolvedora', () => {
        //setup
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade', 
            'construcao_1_pagina',
            'ssr'
        ]

        const valorHora = 70

        //ação
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora)

        //verificação 
        expect(resultado).toEqual(4312)

    })
})