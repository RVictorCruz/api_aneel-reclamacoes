const Concessionaria = require("../models/concessionariaModel");

exports.getAllConcessionarias = async (req, res) => {
  const { page = 1, limit = 10 } = req.query; // Paginação
  try {
    const concessionarias = await Concessionaria.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const total = await Concessionaria.countDocuments();
    res.json({
      concessionarias,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar concessionárias", error });
  }
};

exports.getConcessionariaByCNPJ = async (req, res) => {
  try {
    const cnpj = req.params.cnpj;
    const concessionaria = await Concessionaria.find({ NumCPFCNPJ: cnpj });

    if (!concessionaria) {
      return res.status(404).json({ message: "Concessionária não encontrada" });
    }

    res.json(concessionaria);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar concessionária por CNPJ", error });
  }
};

exports.getConcessionariasByUF = async (req, res) => {
  try {
    const uf = req.params.uf;
    const concessionarias = await Concessionaria.find({ SigUF: uf });

    if (concessionarias.length === 0) {
      return res
        .status(404)
        .json({ message: "Nenhuma concessionária encontrada para essa UF" });
    }

    res.json(concessionarias);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar concessionárias por UF", error });
  }
};

exports.getConcessionariasByNome = async (req, res) => {
  try {
    const nome = req.params.nome;
    const concessionarias = await Concessionaria.find({
      SigAgente: { $regex: nome, $options: "i" },
    });

    if (concessionarias.length === 0) {
      return res
        .status(404)
        .json({ message: "Nenhuma concessionária encontrada com esse nome" });
    }

    res.json(concessionarias);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar concessionária por nome", error });
  }
};
