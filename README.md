# NutriMagister-Plataforma-de-Prescri-o-Magistral-Inteligente
Plataforma que conecta nutricionistas, farmácia magistral e responsável técnico em um fluxo integrado para criação, validação e emissão de fórmulas personalizadas. Inclui painel completo, chatbot clínico, gestão de pedidos e geração de receitas. Protótipo funcional em HTML, CSS e JS.
# NutriMagister – Plataforma de Prescrição Magistral Inteligente

O **NutriMagister** é um protótipo funcional de um sistema que conecta **nutricionistas**, **farmácias magistrais** e **responsáveis técnicos (RT)** em um único fluxo contínuo, permitindo:

- criação de pedidos clínicos personalizados,
- montagem de fórmulas pela farmacêutica,
- validação e assinatura digital pelo responsável técnico,
- geração automática da receita final,
- integração com chatbot clínico para suporte assistido.

Este repositório contém um protótipo totalmente navegável em **HTML, CSS e JavaScript**, sem dependências externas, ideal para demonstração, teste de fluxos e construção inicial de UI/UX.

---

## 📌 Principais Recursos

### 1. Módulo da Nutricionista
- Cadastro rápido de paciente e objetivo nutricional.
- Inclusão de protocolos, macros e restrições.
- Envio do pedido diretamente para a farmácia magistral.
- Histórico de pedidos com status atualizado.

### 2. Módulo da Farmácia Magistral
- Fila de pedidos recebidos.
- Resumo do caso clínico enviado pela nutricionista.
- Campo para criação da fórmula (dosagens, ativos, forma farmacêutica).
- Encaminhamento para validação do RT.

### 3. Módulo do Responsável Técnico (RT)
- Lista de fórmulas aguardando validação.
- Revisão detalhada da fórmula proposta.
- Aprovação ou solicitação de ajustes.
- Geração da receita magistral com assinatura digital (simulada).

### 4. Chatbot Clínico Integrado
- Assistente embutido na interface.
- Simulação de respostas que auxiliam:
  - protocolos clínicos,
  - doses máximas,
  - interações,
  - ajustes de posologia.
- Área projetada para futura integração com IA real.

---

## 🚀 Tecnologias e Arquitetura

- **HTML5**
- **CSS3 (customizado, sem frameworks)**
- **JavaScript Vanilla (sem frameworks)**

Não há dependências externas além de um navegador moderno.  
O estado é mantido em memória (arrays em `app.js`), apenas para simulação do fluxo.

---

## 📂 Estrutura do Projeto

```text
nutrimagister/
├── README.md          # Documentação do repositório
├── index.html         # Página principal, carrega CSS e JS
└── src/
    ├── css/
    │   └── styles.css # Estilos da interface
    └── js/
        └── app.js     # Lógica de fluxo Nutri → Farmácia → RT → Receita
