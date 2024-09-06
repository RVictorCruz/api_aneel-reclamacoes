const express = require("express");
const router = express.Router();
const concessionariasController = require("../controllers/concessionariasController");

router.get("/", concessionariasController.getAllConcessionarias);
router.get("/cnpj/:cnpj", concessionariasController.getConcessionariaByCNPJ);
router.get("/uf/:uf", concessionariasController.getConcessionariasByUF);
router.get("/nome/:nome", concessionariasController.getConcessionariasByNome);

module.exports = router;
