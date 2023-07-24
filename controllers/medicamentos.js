const Medicamento = require('../models/medicamento')
 
const MedicamentosGet = async (req, res) => {
  try {
    const medicamentoId = req.params.id;
    // Aquí realizarías la lógica para buscar el medicamento en la base de datos por su ID
    // Por ejemplo, utilizando el modelo Medicamento y su método de búsqueda por ID
    const medicamentoEncontrado = await Medicamento.findById(medicamentoId);

    if (!medicamentoEncontrado) {
      return res.status(404).json({ error: 'Medicamento no encontrado' });
    }

    // Devuelves la información del medicamento encontrado en la respuesta
    res.json(medicamentoEncontrado);
  } catch (error) {
    console.error('Error al obtener el medicamento por ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const MedicamentosPost = async (req, res) => {
  try {
    const nuevoMedicamento = req.body;
    // Creas una nueva instancia de Medicamento con la información del body
    const medicamentoNuevo = new Medicamento(nuevoMedicamento);
    // Guardas el nuevo medicamento en la base de datos
    await medicamentoNuevo.save();
    // Devuelves la respuesta con el medicamento recién creado
    res.json({ mensaje: 'Medicamento agregado correctamente', medicamento: medicamentoNuevo });
  } catch (error) {
    console.error('Error al agregar el medicamento:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  MedicamentosGet,
  MedicamentosPost,
};



  