const mongoose = require("mongoose");

const ConcessionariaSchema = new mongoose.Schema(
  {
    DatGeracaoConjuntoDados: String,
    DatReferencia: String,
    SigAgente: String,
    NumCPFCNPJ: String,
    CodMunicipio: String,
    NomMunicipio: String,
    SigUF: String,
    SigRegiao: String,
    NomClassificacaoAgente: String,
    CodTipoReclamacao: String,
    NomCanalReclamacao: String,
    DescReclamacao: String,
    QtdReclamacoesRecebidas: String,
    QtdReclamacoesImprocedentes: String,
    QtdReclamacoesProcedentes: String,
    NumPrazoMedioSolucao: String,
    DscFormaContato: String,
    NumOuvPrazoMedioSolucaoImproc: String,
    NumSacPrazoMedioSolucaoImproc: String,
  },
  { collection: "dadosaneel" }
); // Especifica o nome da coleção

module.exports = mongoose.model("Concessionaria", ConcessionariaSchema);
