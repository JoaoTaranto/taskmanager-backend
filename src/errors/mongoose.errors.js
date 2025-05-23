const notFoundError = (res) => {
    return res
        .status(404)
        .send("Este dado não foi encontrado no banco de dados!");
};

const ObjectIdCastError = (res) => {
    return res
        .status(500)
        .send("Ocorreu um erro ao recuperar este dado do banco de dados!");
};

module.exports = {
    notFoundError,
    ObjectIdCastError,
};
