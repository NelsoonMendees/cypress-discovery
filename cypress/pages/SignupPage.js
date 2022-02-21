class SignupPage {
    go() {
        cy.visit('/'); //definindo pagina a ser visitada/testada

        cy.get('a[href="/deliver"]').click(); //cria o evento de click no button
        cy.get("#page-deliver form h1").should("have.text", "Cadastre-se para  fazer entregas"); //valida se esta na pagina correta
    }

    fillForm(deliver) {
        //Preenchendo dados pessoais
        cy.get('input[name="fullName"]').type(deliver.name);
        cy.get('input[name="cpf"]').type(deliver.cpf);
        cy.get('input[name="email"]').type(deliver.email);
        cy.get('input[name="whatsapp"]').type(deliver.whpp);

        //Preenchendo endereço
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode);
        cy.get('input[type ="button" ][value="Buscar CEP"]').click();
        cy.get('input[name="address-number"]').type(deliver.address.number);
        cy.get('input[name="address-details"]').type(deliver.address.details);

        //Validando endereço
        cy.get('input[name="address"]').should("have.value", deliver.address.street);
        cy.get('input[name="district"]').should("have.value", deliver.address.district);
        cy.get('input[name="city-uf"]').should("have.value", deliver.address.city_state);

        //Selecionando o tipo de veiculo
        cy.contains(".delivery-method li", deliver.delivery_method).click();

        //Fazendo upload de arquivos
        cy.get('input[accept^="image"]').attachFile(deliver.cnh);
    }

    submit() {
        //Realizando o cadastro
        cy.get('form button[type="submit"]').click();
    }

    modalContentShouldBe(expectedMessage) {
        cy.get(".swal2-container .swal2-html-container").should("have.text", expectedMessage);
    }

    alertMessageShouldBe(expectedMessage) {
        //Validando cadastro efetuado
        //  cy.get(".alert-error").should("have.text", expectedMessage) //busca o elemento para depois validar
        cy.contains('.alert-error', expectedMessage).should('be.visible') // busca o elemento e compara com o parametro passado
    }
}

export default new SignupPage;