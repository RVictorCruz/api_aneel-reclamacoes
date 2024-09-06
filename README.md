# api_aneel-reclamacoes

# API ANEEL Reclamações

Esta API fornece informações sobre concessionárias de energia elétrica com base em diferentes critérios. Ela permite acessar dados como nome, CNPJ, município, e muito mais.

<div align="center">
![image2](https://github.com/user-attachments/assets/a4deae08-ae09-4bb6-9711-8e02045729ce)
  
</div>
<div>
  
</div>
![Dados trazidos pela api](api-imagens/image.png)


## Índice

- [Descrição](#descrição)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
  - [Endpoints](#endpoints)
- [Documentação da API](#documentação-da-api)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição

Esta API permite buscar informações sobre concessionárias cadastradas, incluindo dados como nome, CNPJ, UF e dados de reclamações.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/api_aneel.git
Navegue até o diretório do projeto:

bash
cd api_aneel
Instale as dependências:

bash
npm install
Configure as variáveis de ambiente:

Crie um arquivo .env na raiz do projeto e adicione a URI do MongoDB:

env
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
Configuração
Certifique-se de ter o MongoDB instalado e configurado, ou use uma instância MongoDB Atlas.

Uso
Inicie o servidor com:

npm start
O servidor estará disponível em http://localhost:3000.

Endpoints
Buscar Todas as Concessionárias

Descrição: Retorna uma lista de todas as concessionárias cadastradas.

URL: /api/concessionarias

Método: GET

Resposta:

json

[
  {
    "_id": "60d21b4667d0d8992e610c85",
    "DatGeracaoConjuntoDados": "2024-09-05",
    "DatReferencia": "2024-02-29",
    "SigAgente": "Amazonas Energia",
    "NumCPFCNPJ": "2341467000120",
    "CodMunicipio": "1302603",
    "NomMunicipio": "Manaus",
    "SigUF": "AM",
    "SigRegiao": "N",
    "NomClassificacaoAgente": "Concessionaria",
    "CodTipoReclamacao": "1021202",
    "NomCanalReclamacao": "Nivel 1",
    "DescReclamacao": "Poste",
    "QtdReclamacoesRecebidas": "3",
    "QtdReclamacoesImprocedentes": "0",
    "QtdReclamacoesProcedentes": "1",
    "NumPrazoMedioSolucao": "20.08",
    "DscFormaContato": "Telefonico",
    "NumOuvPrazoMedioSolucaoImproc": "",
    "NumSacPrazoMedioSolucaoImproc": ""
  }
]

Buscar Concessionária por Nome

Descrição: Retorna uma concessionária com base no nome fornecido.

URL: /api/concessionarias/nome/:SigAgente

Método: GET

Parâmetros: SigAgente - Nome da concessionária

Resposta:

json
{
  "_id": "60d21b4667d0d8992e610c85",
  "DatGeracaoConjuntoDados": "2024-09-05",
  "DatReferencia": "2024-02-29",
  "SigAgente": "Amazonas Energia",
  "NumCPFCNPJ": "2341467000120",
  "CodMunicipio": "1302603",
  "NomMunicipio": "Manaus",
  "SigUF": "AM",
  "SigRegiao": "N",
  "NomClassificacaoAgente": "Concessionaria",
  "CodTipoReclamacao": "1021202",
  "NomCanalReclamacao": "Nivel 1",
  "DescReclamacao": "Poste",
  "QtdReclamacoesRecebidas": "3",
  "QtdReclamacoesImprocedentes": "0",
  "QtdReclamacoesProcedentes": "1",
  "NumPrazoMedioSolucao": "20.08",
  "DscFormaContato": "Telefonico",
  "NumOuvPrazoMedioSolucaoImproc": "",
  "NumSacPrazoMedioSolucaoImproc": ""
}
Buscar Concessionária por CNPJ

Descrição: Retorna uma concessionária com base no CNPJ fornecido.

URL: /api/concessionarias/cnpj/:NumCPFCNPJ

Método: GET

Parâmetros: NumCPFCNPJ - Número do CNPJ

Resposta:

json
{
  "_id": "60d21b4667d0d8992e610c85",
  "DatGeracaoConjuntoDados": "2024-09-05",
  "DatReferencia": "2024-02-29",
  "SigAgente": "Amazonas Energia",
  "NumCPFCNPJ": "2341467000120",
  "CodMunicipio": "1302603",
  "NomMunicipio": "Manaus",
  "SigUF": "AM",
  "SigRegiao": "N",
  "NomClassificacaoAgente": "Concessionaria",
  "CodTipoReclamacao": "1021202",
  "NomCanalReclamacao": "Nivel 1",
  "DescReclamacao": "Poste",
  "QtdReclamacoesRecebidas": "3",
  "QtdReclamacoesImprocedentes": "0",
  "QtdReclamacoesProcedentes": "1",
  "NumPrazoMedioSolucao": "20.08",
  "DscFormaContato": "Telefonico",
  "NumOuvPrazoMedioSolucaoImproc": "",
  "NumSacPrazoMedioSolucaoImproc": ""
}
Buscar Concessionárias por Sigla de UF

Descrição: Retorna uma lista de concessionárias com base na sigla do estado (UF) fornecida.

URL: /api/concessionarias/uf/:SigUF

Método: GET

Parâmetros: SigUF - Sigla do estado (UF)

Resposta:

json
[
  {
    "_id": "60d21b4667d0d8992e610c85",
    "DatGeracaoConjuntoDados": "2024-09-05",
    "DatReferencia": "2024-02-29",
    "SigAgente": "Amazonas Energia",
    "NumCPFCNPJ": "2341467000120",
    "CodMunicipio": "1302603",
    "NomMunicipio": "Manaus",
    "SigUF": "AM",
    "SigRegiao": "N",
    "NomClassificacaoAgente": "Concessionaria",
    "CodTipoReclamacao": "1021202",
    "NomCanalReclamacao": "Nivel 1",
    "DescReclamacao": "Poste",
    "QtdReclamacoesRecebidas": "3",
    "QtdReclamacoesImprocedentes": "0",
    "QtdReclamacoesProcedentes": "1",
    "NumPrazoMedioSolucao": "20.08",
    "DscFormaContato": "Telefonico",
    "NumOuvPrazoMedioSolucaoImproc": "",
    "NumSacPrazoMedioSolucaoImproc": ""
  }
]
Documentação da API
A documentação da API pode ser acessada em http://localhost:3000/docs/index.html.

Contribuição
Sinta-se à vontade para enviar pull requests, relatar problemas ou sugerir melhorias.

Licença
Este projeto está licenciado sob a Licença ISC. Consulte o arquivo LICENSE para mais detalhes.

markdown
### Explicação:

- **Descrição:** Explica o propósito da API.
- **Instalação:** Passos para clonar o repositório e instalar dependências.
- **Configuração:** Instruções sobre como configurar variáveis de ambiente.
- **Uso:** Informações sobre como iniciar o servidor e acessar os endpoints.
- **Endpoints:** Descrição dos endpoints disponíveis com exemplos de resposta.
- **Documentação da API:** Link para acessar a documentação em HTML.
- **Contribuição:** Informações sobre como contribuir para o projeto.
- **Licença:** Detalhes sobre a licença do projeto.

Adapte os links e informações conforme necessário para corresponder ao seu projeto.






