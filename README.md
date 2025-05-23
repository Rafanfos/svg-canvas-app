# Editor de Formas SVG

Um editor interativo para criar, configurar e manipular formas SVG em um canvas web.

## Acesso Rápido

**Versão em Produção**: [https://svg-canvas-app.vercel.app/](https://svg-canvas-app.vercel.app/)

## Visão Geral

Esta aplicação permite aos usuários criar, personalizar e manipular formas básicas (retângulos e estrelas) em um canvas SVG. Com uma interface intuitiva e responsiva, os usuários podem adicionar formas, ajustar suas propriedades e posicioná-las livremente no canvas.

## Funcionalidades Principais

### 1. Adição de Formas
- **Retângulos**: Adicione retângulos com tamanho padrão inicial
- **Estrelas**: Adicione estrelas com número de pontas configurável
- **Posicionamento por Clique**: Escolha exatamente onde a forma será adicionada

### 2. Configuração de Propriedades
- **Retângulos**:
  - Ajuste de largura e altura
  - Controle de arredondamento dos cantos
- **Estrelas**:
  - Ajuste do tamanho geral
  - Configuração do número de pontas
  - Controle do comprimento das pontas

### 3. Manipulação de Formas
- **Seleção**: Clique em uma forma para selecioná-la
- **Movimentação**: Mova formas para qualquer posição no canvas
- **Feedback Visual**: Tooltips e indicadores visuais para melhor experiência

### 4. Persistência de Dados
- **Salvamento Automático**: Todas as formas e configurações são salvas automaticamente
- **Recuperação de Estado**: O estado do canvas é mantido mesmo após atualizar a página

## Como Instalar e Executar

### Acesso Online
A aplicação está disponível online em: [https://svg-canvas-app.vercel.app/](https://svg-canvas-app.vercel.app/)

### Desenvolvimento Local

#### Pré-requisitos
- Node.js (versão 14.x ou superior)
- npm (normalmente vem com o Node.js)
- Git

#### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone git@github.com:Rafanfos/svg-canvas-app.git
   cd svg-canvas-app
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   ng serve
   ```

4. **Acesse a aplicação**
   Abra seu navegador e acesse: `http://localhost:4200`

### Comandos Úteis

- **Compilar o projeto**
  ```bash
  ng build
  ```

- **Executar testes unitários**
  ```bash
  ng test
  ```

- **Verificar lint**
  ```bash
  ng lint
  ```

## Como Usar

### Adicionar Formas
1. Clique no botão "Retângulo" ou "Estrela" na barra de ferramentas
2. Observe o tooltip indicando "Clique para adicionar..."
3. Clique em qualquer lugar do canvas para posicionar a forma
4. Para cancelar, pressione ESC

### Configurar Formas
1. Clique em uma forma existente para selecioná-la
2. Use os controles no painel lateral para ajustar as propriedades
3. As alterações são aplicadas e salvas em tempo real

### Mover Formas
1. Selecione uma forma clicando nela
2. Clique no botão "Mover Forma" no painel de configuração
3. Clique em qualquer lugar do canvas para reposicionar a forma
4. Para cancelar, pressione ESC

## Tecnologias Utilizadas

- **Angular**: Framework front-end para construção da interface
- **SVG**: Para renderização vetorial das formas
- **RxJS**: Para gerenciamento de estado reativo
- **LocalStorage**: Para persistência de dados no navegador
- **Vercel**: Para hospedagem e deploy contínuo

## Estrutura do Projeto

- **Componentes**:
  - `toolbar.component`: Barra de ferramentas para adicionar formas
  - `canvas.component`: Área principal onde as formas são renderizadas
  - `config-panel.component`: Painel lateral para configuração de propriedades

- **Serviços**:
  - `shape.service.ts`: Gerencia o estado das formas, seleção e persistência

- **Modelos**:
  - `shape.models.ts`: Define as interfaces para os diferentes tipos de formas

## Diferenciais

- **Interface Intuitiva**: Feedback visual claro para todas as ações
- **Responsividade**: Adaptação para diferentes tamanhos de tela
- **Persistência Automática**: Não é necessário salvar manualmente
- **Configuração Detalhada**: Controle fino sobre as propriedades das formas

## Requisitos de Sistema

- Navegador moderno com suporte a SVG e LocalStorage
- Node.js e npm para desenvolvimento local
- Não requer instalação de plugins ou extensões adicionais

## Solução de Problemas

- **Erro ao iniciar o servidor**: Verifique se a porta 4200 não está sendo usada por outro processo
- **Problemas de dependências**: Tente `npm clean-install` para reinstalar todas as dependências
- **Formas não aparecem**: Verifique se o localStorage do navegador está habilitado

---

Desenvolvido como parte de um projeto de demonstração de manipulação SVG com Angular.
