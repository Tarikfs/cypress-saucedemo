# English


# E2E Testing Project for the Sauce Demo Application

This project is an implementation of E2E tests for the Sauce Demo application using Cypress with a Page Object (PO) architecture. The tests cover functionalities such as login, logout, navigation, cart validation, checkout validation, applying filters, and product validation, following best practices in automation.


 ## Prerequisites

Node.js (version 14 or higher)
```
npm or yarn
```

Installation
Clone this repository:
 ```bash
   git clone https://github.com/.git
   cd seu_projeto
   ```


2. Install the dependencies: 
```
npm install
```

3.If an error occurs, delete the node_modules folder and the package.json and package-lock.json files. Then run the following commands:
        ```
        npm init -y
        npm install cypress --save-dev
        ```
    This process will install the necessary dependencies to run the tests on your machine and resolve any Node.js dependency issues.

## Running the Tests
To run the E2E tests, use the following command:
        ```
        npx cypress open
        ```

## Project Structure
These classes contain methods and variables that can be accessed individually or collectively by the test scripts.
    Page Objects:
        loginPage.js
        productPage.js
        checkoutPage.js
        cartPage.js
        filterPage.js
        logoutPage.js
        resetAppStatePage.js

These classes contain test scripts to execute the tests.
    Testes E2E:
        login.cy.js
        checkout.cy.js
        cart.cy.js
        filter.cy.js
        product.cy.js
        logout.cy.js





# português

# Projeto de Testes E2E para a Aplicação Sauce Demo

Este projeto é uma implementação de testes E2E para a aplicação [Sauce Demo](https://www.saucedemo.com/) utilizando Cypress com uma arquitetura Page Object (PO). Os testes abordam funcionalidades como login, logout, navegação, validação do carinho, validação do checkout, aplicação de filtros e validação de produtos, seguindo boas práticas de automação.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/.git
   cd seu_projeto
   ```

2. Instale as dependências:
    ```
    npm install
    ```

3. Se ocorrer uma falha, delete a pasta node_modules e os arquivos package.json e package-lock.json. Em sequência, rode os comandos:
        ```
        npm init -y
        npm install cypress --save-dev
        ```
 Esse processo instalará as dependências necessárias para executar os testes na sua máquina e resolverá problemas relacionados a dependências do Node.js


## executando os testes

Para rodar os testes E2E, utilize o seguinte comando:
   ```
   npx cypress open
   ```


## Estrutura do Projeto

Essas classes contêm métodos e variáveis para serem acessadas individualmente ou em conjunto pelos scripts de testes.
    Page Objects:
        loginPage.js
        productPage.js
        checkoutPage.js
        cartPage.js
        filterPage.js
        logoutPage.js
        resetAppStatePage.js

Essas classes contêm scripts de testes para realizar os testes.
    Testes E2E:
        login.cy.js
        checkout.cy.js
        cart.cy.js
        filter.cy.js
        product.cy.js
        logout.cy.js
