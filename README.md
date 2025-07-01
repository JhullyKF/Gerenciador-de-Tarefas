# Gerenciador-de-tarefas

Um sistema web simples de gerenciamento de tarefas, desenvolvido em Java utilizando Spring Boot, seguindo o padrão MVC. O projeto visa organizar tarefas de forma intuitiva e produtiva, permitindo o acompanhamento do status e histórico de cada tarefa.

---

## MVP - Funcionalidades Principais

1. **Login/Cadastro**  
   Cadastro de novos usuários e autenticação para acesso seguro ao sistema.

2. **Autenticação**  
   Controle de sessões para garantir acesso apenas a usuários autenticados.

3. **Criar Tarefas**  
   Permite a criação de novas tarefas com título e descrição.

4. **Listar Tarefas**  
   Exibe as tarefas em colunas separadas por status:
  - **TO DO** (A Fazer)
  - **DOING** (Em andamento)
  - **DONE** (Finalizado)
  - **BLOCKED** (Com impedimentos)

5. **Atualizar Tarefas**  
   Permite mudar o status, editar título e descrição de uma tarefa.

6. **Deletar Tarefa**  
   Possibilidade de apagar tarefas indesejadas.

7. **Persistência em Banco de Dados**  
   Todos os dados são salvos no banco de dados, garantindo persistência entre sessões.

8. **Interface Web Intuitiva**  
   Interface gráfica amigável para facilitar o uso do sistema.

9. **Integração com Banco de Dados**  
   Uso do MySQL para armazenamento das informações.

---

## Tecnologias Utilizadas

- **Java 21**
- **Spring Boot**
- **Spring Data JPA**
- **Spring Security**
- **MySQL**
- **MVC**
- **API REST** 
- **Maven**
- **Docker** (opcional, para containerização)
- **Git** (controle de versão)

---

## Funcionalidades Futuras (Melhorias após MVP)

1. **Dashboard com Power BI**  
   Integração com Power BI para visualização avançada de dados e métricas das tarefas.

2. **Adicionar Prazo (Deadline) nas Tarefas**  
   Possibilidade de definir datas limites para conclusão das tarefas.

3. **Histórico de Alterações (Log/Audit)**  
   Registro de todas as alterações feitas em cada tarefa, permitindo auditoria e rastreabilidade.

4. **Upload de Anexos**  
   Permitir a inclusão de arquivos ou imagens em cada tarefa.

---

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/gerenciador-tarefas.git
   ```
2. Crie um banco de dados MySQL chamado `auth_db` e configure o usuário e senha conforme necessário.

3. Configure o arquivo `application.properties` com as informações do seu banco de dados MySQL.

4. Execute o projeto:
   ```bash
   ./mvnw spring-boot:run
   ```
   ```bash
    cd interface-projeto
    npm run dev
   ```

5. Acesse via navegador:
   ```
   http://localhost:5173
   ```

---