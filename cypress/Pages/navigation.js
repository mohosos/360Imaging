/// <reference types="cypress-xpath" />
import { fake } from 'faker';
import { name, phone, address, internet } from "faker";
export class Navigation {

    nvgtion(){
    cy.visit("http://automationpractice.com/")
    cy.get('.login').click()
    cy.get('#email_create').type(internet.email());
    cy.get('#SubmitCreate > span').click()
    //cy.get('#submitAccount > span').click()
    }

}