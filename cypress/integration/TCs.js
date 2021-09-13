/// <reference types="cypress"/>
import { FillData } from '../Pages/filldata';
import { Navigation } from '../Pages/navigation'

const navy = new Navigation()
const fill = new FillData()

describe('Testsuite', function(){

it('Test Secnario 1', function(){
    navy.nvgtion()
    fill.fillData()
    cy.get('.logout').should('be.visible')
})

it('Test Secnario 2', function(){
    navy.nvgtion()
    cy.get('#submitAccount > span').click()
    cy.get('ol > :nth-child(1)').should('contain','You must register at least one phone number.')
    cy.get('ol > :nth-child(2)').should('contain','lastname is required')
    cy.get('ol > :nth-child(3)').should('contain','firstname is required')
    cy.get('ol > :nth-child(4)').should('contain','passwd is required')
    cy.get('ol > :nth-child(5)').should('contain','address1 is required1')
    cy.get('ol > :nth-child(6)').should('contain','city is required')
    cy.get('ol > :nth-child(7)').should('contain',"The Zip/Postal code you've entered is invalid. It must follow this format: 00000")
    cy.get('ol > :nth-child(8)').should('contain','This country requires you to choose a State.')
})


})
