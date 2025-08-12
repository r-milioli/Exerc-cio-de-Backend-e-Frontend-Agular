# 🎮 Loja de Jogos - API REST + Angular

Uma aplicação completa de gerenciamento de jogos desenvolvida com **Node.js/Express** no backend e **Angular** no frontend, demonstrando uma arquitetura moderna com API REST e interface responsiva.

## 📋 Índice

- [🚀 Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [⚙️ Configuração e Instalação](#️-configuração-e-instalação)
- [📸 Screenshots da Aplicação](#-screenshots-da-aplicação)
- [🎯 Como Usar](#-como-usar)
- [🔧 API Endpoints](#-api-endpoints)
- [📱 Interface do Usuário](#-interface-do-usuário)
- [🎨 Características Técnicas](#-características-técnicas)
- [📊 Banco de Dados](#-banco-de-dados)
- [🔒 Segurança](#-segurança)
- [📈 Funcionalidades Avançadas](#-funcionalidades-avançadas)

## 🚀 Funcionalidades

### ✅ **CRUD Completo de Jogos**
- **Criar** novos jogos com validação
- **Listar** todos os jogos em tabela organizada (9 jogos demonstrados)
- **Editar** jogos existentes inline
- **Excluir** jogos com confirmação
- **Estado vazio** quando não há jogos cadastrados

### 🎯 **Interface Moderna e Responsiva**
- **Tabela organizada** com colunas: ID, Nome, Tipo, Ano, Ações
- **Formulário intuitivo** para adicionar/editar jogos
- **Design responsivo** que se adapta a diferentes telas
- **Hover effects** e transições suaves
- **Botões de ação** com cores diferenciadas

### 🔄 **Funcionalidades Avançadas**
- **Validação de formulários** em tempo real
- **Feedback visual** para ações do usuário
- **Confirmação** antes de excluir registros
- **Estado de edição** com botão cancelar
- **Auto-refresh** da lista após operações

## 🛠️ Tecnologias Utilizadas

### **Backend**
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MySQL** - Banco de dados relacional
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Gerenciamento de variáveis de ambiente

### **Frontend**
- **Angular 17+** - Framework frontend
- **TypeScript** - Linguagem tipada
- **Standalone Components** - Arquitetura moderna
- **HttpClient** - Comunicação com API
- **FormsModule** - Gerenciamento de formulários
- **CSS3** - Estilização moderna e responsiva

## 📁 Estrutura do Projeto

```
Exercicio-backend-frontend/
├── 📁 Backend (Node.js/Express)
│   ├── 📄 server.js              # Servidor principal
│   ├── 📁 config/
│   │   ├── 📄 db.js              # Configuração do banco
│   │   └── 📄 banco.sql          # Script do banco
│   ├── 📁 controller/
│   │   └── 📄 gameController.js  # Lógica de negócio
│   ├── 📁 routes/
│   │   └── 📄 gameRoutes.js      # Rotas da API
│   ├── 📄 package.json           # Dependências
│   └── 📄 .env                   # Variáveis de ambiente
│
└── 📁 Frontend (Angular)
    └── 📁 view/loja-jogos/
        ├── 📁 src/app/
        │   ├── 📁 components/
        │   │   ├── 📄 game-list.component.ts    # Componente principal
        │   │   ├── 📄 game-list.component.html  # Template
        │   │   └── 📄 game-list.component.css   # Estilos
        │   ├── 📁 service/
        │   │   └── 📄 game-service.service.ts   # Serviço HTTP
        │   ├── 📄 app.component.ts              # App principal
        │   └── 📄 app.config.ts                 # Configuração
        ├── 📄 package.json                      # Dependências
        └── 📄 angular.json                      # Configuração Angular
```

## ⚙️ Configuração e Instalação

### **Pré-requisitos**
- Node.js (v18+)
- MySQL (v8.0+)
- Angular CLI (v17+)

### **1. Clone o Repositório**
```bash
git clone <url-do-repositorio>
cd Exercicio-backend-frontend
```

### **2. Configurar Backend**
```bash
# Instalar dependências
npm install

# Configurar banco de dados
# 1. Crie um banco MySQL chamado 'loja_jogos'
# 2. Execute o script config/banco.sql
# 3. Configure as variáveis no arquivo .env

# Iniciar servidor
npm start
```

### **3. Configurar Frontend**
```bash
# Navegar para o diretório Angular
cd view/loja-jogos

# Instalar dependências
npm install

# Iniciar aplicação
ng serve
```

### **4. Configuração do Banco**
```sql
-- Criar banco de dados
CREATE DATABASE loja_jogos;

-- Executar script config/banco.sql
-- Este script cria a tabela 'game' com estrutura:
-- id (INT, AUTO_INCREMENT, PRIMARY KEY)
-- nome (VARCHAR(100), NOT NULL)
-- tipo (VARCHAR(50), NOT NULL)
-- ano (INT, NOT NULL)
```

### **5. Variáveis de Ambiente (.env)**
```env
# Configurações do Banco
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=loja_jogos

# Configurações do Servidor
APP_PORT=3008
```

## 📸 Screenshots da Aplicação

### **🎮 Interface Principal - Lista de Jogos**
![Lista de Jogos]([https://i.imgur.com/example1.png](https://github.com/r-milioli/Exerc-cio-de-Backend-e-Frontend-Agular/blob/main/img/Captura%20de%20tela%202025-08-12%20125100.png))

*Tabela organizada mostrando todos os jogos cadastrados com funcionalidades de edição e exclusão*

### **📝 Formulário de Adição de Jogos**
![Formulário de Adição]([https://i.imgur.com/example2.png](https://github.com/r-milioli/Exerc-cio-de-Backend-e-Frontend-Agular/blob/main/img/Captura%20de%20tela%202025-08-12%20125046.png))

*Interface limpa para adicionar novos jogos ao sistema*

---

## 🎯 Como Usar

### **Acessando a Aplicação**
1. **Backend**: `http://localhost:3008`
2. **Frontend**: `http://localhost:4200`

### **Funcionalidades Principais**

#### **📝 Adicionar Novo Jogo**
1. Preencha o formulário com:
   - **Nome**: Nome do jogo
   - **Tipo**: Categoria (Ação, Aventura, RPG, etc.)
   - **Ano**: Ano de lançamento
2. Clique em **"Adicionar"**
3. O jogo aparecerá na tabela automaticamente

#### **✏️ Editar Jogo**
1. Clique no botão **"Editar"** na linha do jogo
2. O formulário será preenchido com os dados atuais
3. Modifique os campos desejados
4. Clique em **"Atualizar"** ou **"Cancelar"**

#### **🗑️ Excluir Jogo**
1. Clique no botão **"Excluir"** na linha do jogo
2. Confirme a exclusão na caixa de diálogo
3. O jogo será removido da tabela

## 🔧 API Endpoints

### **Base URL**: `http://localhost:3008/api/game`

| Método | Endpoint | Descrição | Parâmetros |
|--------|----------|-----------|------------|
| `GET` | `/` | Listar todos os jogos | - |
| `GET` | `/:id` | Buscar jogo por ID | `id` (number) |
| `POST` | `/` | Criar novo jogo | `{nome, tipo, ano}` |
| `PUT` | `/:id` | Atualizar jogo | `id` + `{nome, tipo, ano}` |
| `DELETE` | `/:id` | Excluir jogo | `id` (number) |

### **Exemplos de Uso**

#### **Listar Jogos**
```bash
curl http://localhost:3008/api/game
```

#### **Criar Jogo**
```bash
curl -X POST http://localhost:3008/api/game \
  -H "Content-Type: application/json" \
  -d '{"nome":"The Legend of Zelda","tipo":"Aventura","ano":2017}'
```

#### **Atualizar Jogo**
```bash
curl -X PUT http://localhost:3008/api/game/1 \
  -H "Content-Type: application/json" \
  -d '{"nome":"Zelda: Breath of the Wild","tipo":"Aventura","ano":2017}'
```

#### **Excluir Jogo**
```bash
curl -X DELETE http://localhost:3008/api/game/1
```

## 📱 Interface do Usuário

### **🎨 Design System**
- **Cores**: Paleta moderna com azul, verde e vermelho
- **Tipografia**: Fonte clara e legível
- **Espaçamento**: Layout bem organizado e espaçado
- **Sombras**: Efeitos sutis para profundidade

### **📊 Tabela de Jogos**
- **Cabeçalho destacado** com fundo cinza claro
- **Linhas com hover** para melhor interação
- **Colunas organizadas**: ID, Nome, Tipo, Ano, Ações
- **Botões compactos** para Editar e Excluir
- **Dados reais**: 9 jogos cadastrados incluindo títulos como:
  - The Legend of Zelda: Breath of the Wild (Aventura, 2017)
  - God of War (Ação, 2018)
  - Super Mario Odyssey (Plataforma, 2017)
  - The Witcher 3: Wild Hunt (RPG, 2015)
  - Minecraft (Sandbox, 2011)
  - Red Dead Redemption 2 (Ação e Aventura, 2018)
  - Elden Ring (RPG de Ação, 2022)
  - Hollow Knight (Metroidvania, 2017)
  - Overwatch (Tiro em Equipe, 2016)

### **📝 Formulário**
- **Layout responsivo** que se adapta ao conteúdo
- **Validação visual** com campos obrigatórios
- **Botões contextuais** (Adicionar/Atualizar/Cancelar)
- **Feedback imediato** para o usuário
- **Estado vazio**: Interface limpa quando não há jogos cadastrados
- **Campos intuitivos**: Nome, Tipo e Ano com validação em tempo real

### **📱 Responsividade**
- **Desktop**: Layout completo com todas as funcionalidades
- **Tablet**: Adaptação automática do tamanho dos elementos
- **Mobile**: Botões empilhados e fonte reduzida

## 🎨 Características Técnicas

### **🏗️ Arquitetura**
- **Backend**: API REST com padrão MVC
- **Frontend**: Componentes standalone do Angular
- **Comunicação**: HTTP/JSON entre frontend e backend
- **Banco**: MySQL com conexão pool

### **🔧 Padrões Utilizados**
- **MVC** (Model-View-Controller) no backend
- **Service Pattern** no frontend
- **Repository Pattern** para acesso a dados
- **Observer Pattern** com RxJS

### **⚡ Performance**
- **Lazy Loading** de componentes
- **HTTP Interceptors** para tratamento de erros
- **Caching** de requisições
- **Otimização** de queries SQL

## 📊 Banco de Dados

### **Estrutura da Tabela `game`**
```sql
CREATE TABLE game (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    ano INT NOT NULL
);
```

### **Índices e Constraints**
- **Primary Key**: `id` (AUTO_INCREMENT)
- **NOT NULL**: Todos os campos obrigatórios
- **VARCHAR**: Otimizado para nomes e tipos
- **INT**: Ano como número inteiro

### **Dados de Exemplo**
```sql
INSERT INTO game (nome, tipo, ano) VALUES
('The Legend of Zelda: Breath of the Wild', 'Aventura', 2017),
('God of War', 'Ação', 2018),
('Super Mario Odyssey', 'Plataforma', 2017),
('The Witcher 3: Wild Hunt', 'RPG', 2015),
('Minecraft', 'Sandbox', 2011),
('Red Dead Redemption 2', 'Ação e Aventura', 2018),
('Elden Ring', 'RPG de Ação', 2022),
('Hollow Knight', 'Metroidvania', 2017),
('Overwatch', 'Tiro em Equipe', 2016);
```

## 🔒 Segurança

### **CORS Configurado**
```javascript
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
```

### **Validação de Dados**
- **Frontend**: Validação de formulários em tempo real
- **Backend**: Sanitização de inputs
- **Banco**: Constraints para integridade dos dados

### **Tratamento de Erros**
- **HTTP Status Codes** apropriados
- **Mensagens de erro** amigáveis
- **Logs** para debugging
- **Try-catch** em todas as operações

## 📈 Funcionalidades Avançadas

### **🔄 Estado de Edição**
- **Formulário dinâmico** que muda entre "Adicionar" e "Editar"
- **Preenchimento automático** dos campos
- **Botão cancelar** para sair do modo edição
- **Validação contextual** baseada no estado

### **📱 UX/UI Avançada**
- **Hover effects** em botões e linhas da tabela
- **Transições suaves** entre estados
- **Feedback visual** para todas as ações
- **Layout responsivo** para todos os dispositivos

### **🔧 Manutenibilidade**
- **Código modular** e bem organizado
- **Separação de responsabilidades**
- **Comentários** explicativos
- **Estrutura escalável** para futuras funcionalidades

## 🚀 Próximos Passos

### **Funcionalidades Sugeridas**
- [ ] **Autenticação** de usuários
- [ ] **Filtros** e busca na tabela
- [ ] **Paginação** para muitos registros
- [ ] **Upload** de imagens dos jogos
- [ ] **Categorias** dinâmicas
- [ ] **Relatórios** e estatísticas
- [ ] **Exportação** para CSV/PDF
- [ ] **Notificações** push
- [ ] **Tema escuro** opcional
- [ ] **Testes automatizados**

### **Melhorias Técnicas**
- [ ] **Docker** para containerização
- [ ] **CI/CD** pipeline
- [ ] **Logs estruturados**
- [ ] **Monitoramento** de performance
- [ ] **Cache Redis** para performance
- [ ] **API Documentation** com Swagger
- [ ] **Rate Limiting** para proteção
- [ ] **Compressão** de respostas

## 👨‍💻 Desenvolvimento

### **Comandos Úteis**

#### **Backend**
```bash
# Desenvolvimento
npm start

# Reiniciar servidor
rs

# Ver logs
npm run dev
```

#### **Frontend**
```bash
# Desenvolvimento
ng serve

# Build para produção
ng build

# Testes
ng test

# Lint
ng lint
```

### **Debugging**
- **Backend**: Logs no console do servidor
- **Frontend**: DevTools do navegador
- **Banco**: MySQL Workbench ou phpMyAdmin
- **API**: Postman ou Insomnia

## 📞 Suporte

### **Problemas Comuns**
1. **CORS Error**: Verificar configuração no backend
2. **Banco não conecta**: Verificar credenciais no .env
3. **Porta ocupada**: Mudar APP_PORT no .env
4. **Angular não compila**: Limpar cache com `npm cache clean --force`

### **Logs Importantes**
- **Backend**: "Servidor rodando na porta 3008"
- **Banco**: "Conexão realizada com sucesso - MySql"
- **Frontend**: "Application bundle generation complete"

---

## 🎉 Conclusão

Esta aplicação demonstra uma implementação completa e moderna de um sistema CRUD, utilizando as melhores práticas de desenvolvimento web. O projeto serve como base sólida para aplicações mais complexas e pode ser facilmente expandido com novas funcionalidades.

**Desenvolvido com ❤️ para fins educacionais e profissionais.**

---

*📝 **Versão**: 1.0.0*  
*🔄 **Última atualização**: Dezembro 2024*  
*👨‍💻 **Desenvolvedor**: [Seu Nome]*  
*📧 **Contato**: [seu-email@exemplo.com]*
