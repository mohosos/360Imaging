/// <reference types="cypress-xpath" />
import { fake } from 'faker';
import { name, phone, address, internet } from "faker";
export class FillData {

    fillData(){
        cy.get('#customer_firstname').type(name.firstName());
        cy.get('#customer_lastname').type(name.lastName());
        cy.get('#passwd').type(internet.password());
        cy.get('#address1').type(address.streetName());
        cy.get('#city').type(address.country());
        cy.get('#id_state').select('Colorado').should('have.value','6')
        cy.get('#postcode').type('11255');
        cy.get('#phone_mobile').type('0123456789');
        cy.get('#alias').clear()
        cy.get('#alias').type(address.streetName());
        cy.get('#submitAccount > span').click()
        //cy.get('.logout').click()
    }

}