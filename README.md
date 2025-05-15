## Desafio Técnico: Editor SVG Interativo com Angular

**Objetivo:**
Avaliar suas habilidades em engenharia de software, desenvolvimento front-end com Angular (versões recentes) e manipulação de SVG. O objetivo é construir uma aplicação que permita ao usuário adicionar e configurar elementos gráficos (retângulos e estrelas) em um canvas SVG.

**Contexto:**
Você está construindo um protótipo para uma ferramenta de design gráfico simplificada baseada na web. O foco inicial é na manipulação de formas SVG básicas.

---

### Requisitos Obrigatórios:

1.  **Estrutura da Aplicação:**
    *   Utilizar Angular (versão estável mais recente, ex: 16+).
    *   A aplicação deve ser Single Page Application (SPA).
    *   Estrutura de componentes bem definida e modular.

2.  **Canvas SVG:**
    *   Deve haver uma área de desenho (canvas) implementada com um elemento `<svg>`.
    *   Os elementos gráficos adicionados pelo usuário devem ser renderizados dentro deste canvas SVG.

3.  **Adição de Elementos:**
    *   O usuário deve ser capaz de adicionar dois tipos de elementos ao canvas:
        *   **Retângulo:** Adicionado como um elemento `<rect>` no SVG.
        *   **Estrela:** Adicionada como um elemento `<polygon>` ou `<path>` no SVG.
    *   Deve haver controles claros (ex: botões "Adicionar Retângulo", "Adicionar Estrela") para acionar a adição de novos elementos.
    *   Novos elementos podem ser adicionados em uma posição padrão ou permitir que o usuário clique no canvas para definir a posição (opcional, mas desejável para boa UX).

4.  **Configuração do Retângulo:**
    *   Ao adicionar ou selecionar um retângulo, o usuário deve poder configurar:
        *   **Arredondamento dos Cantos:** Um input numérico (ou slider) para definir o raio de arredondamento dos cantos do retângulo. As alterações devem ser refletidas visualmente no elemento no canvas em tempo real.

5.  **Configuração da Estrela:**
    *   Ao adicionar ou selecionar uma estrela, o usuário deve poder configurar:
        *   **Número de Pontas:** Um input numérico (ex: 5, 6, 7...). Mínimo de 3 pontas.
        *   **Comprimento das Pontas (ou "Profundidade"):** Um input numérico ou slider para controlar o quão "pontudas" são as estrelas (ex: relação entre o raio externo e o raio interno da estrela).
    *   As alterações devem ser refletidas visualmente no elemento no canvas em tempo real.

6.  **Interatividade Básica:**
    *   As configurações aplicadas a um elemento devem ser visíveis imediatamente no canvas SVG.
    *   (Opcional, mas altamente recomendado para senioridade) O usuário deve poder selecionar um elemento já existente no canvas para reconfigurá-lo.

---

### Requisitos Opcionais (Bônus):

A implementação de qualquer um dos seguintes itens será considerada um diferencial e demonstrará maior profundidade de conhecimento:

1.  **Configurações Visuais Adicionais:**
    *   Cor de preenchimento (`fill`) dos elementos.
    *   Cor da borda (`stroke`) dos elementos.
    *   Espessura da borda (`stroke-width`) dos elementos.
2.  **Manipulação Avançada:**
    *   Capacidade de selecionar elementos no canvas clicando neles.
    *   Capacidade de mover elementos selecionados no canvas (drag and drop).
    *   Capacidade de deletar elementos do canvas.
    *   Capacidade de redimensionar elementos (mantendo suas propriedades configuráveis).
3.  **Gerenciamento de Estado:**
    *   Persistência do estado da aplicação (elementos e suas configurações) usando `localStorage` ou `sessionStorage`, para que o desenho seja mantido ao recarregar a página.
4.  **UX/UI Melhorada:**
    *   Um painel de propriedades que aparece contextualmente ao selecionar um elemento.
    *   Feedback visual claro para seleção e interações.
    *   Design responsivo básico.
5.  **Testes:**
    *   Testes unitários para componentes ou serviços críticos (ex: lógica de geração da estrela).

---

### Requisitos Técnicos:

*   **Framework/Linguagem:** Angular (versão estável mais recente), TypeScript.
*   **Estilização:** CSS puro, SASS/SCSS, ou CSS-in-JS (a escolha é sua, mas justifique se não for CSS/SASS).
*   **Manipulação SVG:** O foco é na manipulação direta do DOM SVG e na criação dos elementos gráficos programaticamente. Evite bibliotecas SVG de desenho de alto nível (como D3.js para *desenhar* as formas, embora possa ser usado para cálculos geométricos se justificado). A ideia é ver sua capacidade de gerar os atributos SVG necessários.
*   **Controle de Versão:** Git.

---

### Critérios de Avaliação:

*   **Funcionalidade:** A aplicação atende a todos os requisitos obrigatórios?
*   **Qualidade do Código:** Código limpo, bem organizado, modular, comentado (quando necessário), e fácil de entender. Siga os style guides do Angular e TypeScript.
*   **Arquitetura Angular:** Uso adequado de componentes, serviços, diretivas, pipes, data binding, gerenciamento de estado (mesmo que simples, como Services com Subjects/Observables).
*   **Manipulação de SVG:** Implementação correta e eficiente da criação e atualização dinâmica dos elementos SVG e seus atributos.
*   **Experiência do Usuário (UX):** A interface é intuitiva e as interações são fluidas?
*   **Implementação dos Opcionais:** Qualidade e profundidade da implementação dos requisitos opcionais.
*   **Documentação:** Clareza e completude do `README.md`.
*   **Boas Práticas de Engenharia de Software:** Commits atômicos e com boas mensagens, ausência de código comentado desnecessariamente, tratamento de erros básico, etc.

---

### Entrega:

1.  Um link para um repositório Git (ex: GitHub, GitLab) contendo:
    *   Todo o código fonte da aplicação.
    *   Um arquivo `README.md` na raiz do projeto.
2.  O `README.md` deve conter:
    *   Seu nome.
    *   Breve descrição do projeto e das funcionalidades implementadas (incluindo as opcionais).
    *   Quaisquer decisões de arquitetura ou design importantes que você tomou e porquê.
    *   Instruções claras sobre como clonar, instalar as dependências (`npm install` ou `yarn install`) e executar o projeto localmente (`ng serve`).
    *   Versão do Node.js e Angular CLI utilizadas (ou recomendadas).

---

**Prazo:** 
5 dias corridos.

Boa sorte e divirta-se com o desafio! Estamos ansiosos para ver sua solução.

---

**Dicas para o candidato (opcional, pode ser omitido do desafio formal):**
*   Pense na matemática para desenhar uma estrela com N pontas e profundidade variável. Funções trigonométricas (seno, cosseno) serão suas amigas aqui para calcular os vértices do polígono.
*   Considere como gerenciar o estado dos elementos no canvas. Uma simples array de objetos em um serviço pode ser suficiente para os requisitos obrigatórios.
*   Componentize! Pense em componentes para o canvas, para os controles de adição, para o painel de propriedades, etc.

