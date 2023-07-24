const { Schema, model } = require('mongoose');

const MedicamentoSchema = new Schema({
  nombre_del_medicamento: {
    type: String,
    required: [true, "El nombre del medicamento es obligatorio"]
  },
  marca: {
    type: String,
    required: [true, "La marca del medicamento es obligatoria"]
  },
  principio_activo: {
    type: String,
    //required: [true, "El precio del medicamento es obligatorio"]
  },
  fabricante: {
    type: String,
    //required: [true, "El fabricante del medicamento es obligatorio"]
  },
  miligramos: {
    type: Number,
    required: [true, "El número de miligramos es obligatorio"]
  },
  cantidad: {
    type: Number,
    required: [true, "La cantidad es obligatoria"]
  },

  categoria: {
    type: String,
  },
  fecha_vencimiento: {
    type: Date,
  }
});

const Medicamento = model('Medicamento', MedicamentoSchema);

module.exports = Medicamento;