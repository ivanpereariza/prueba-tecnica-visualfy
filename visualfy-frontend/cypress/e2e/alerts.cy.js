describe('Test POST nueva alerta', () => {
    it('Crear una nueva alerta y verificar si existe', () => {
        cy.visit('/');

        cy.contains('button', 'Nueva Alerta').click();

        cy.get('input#type').type('Test');
        cy.get('input#title').type('Testing e2e');
        cy.get('select#priority').select('3');

        cy.get('button[type="submit"]').click();

        cy.contains('.card', 'Testing e2e').should('exist');
    });
});


describe('Test filtrado alertas', ()=> {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Filtrar alertas por texto', () => {
        cy.get('input#filter-name').type('f');

        cy.wait(500);

        cy.get('.card').each(($card) => {
            cy.wrap($card).find('p').should('contain', 'f');
        });
    });
})