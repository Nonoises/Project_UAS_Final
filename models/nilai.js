import {sequelize, DataTypes} from "./model.js";

const Nilai = sequelize.define('nilai', {
    nim: DataTypes.STRING(10),
    kode_matkul: DataTypes.STRING(45),
    nilai_uts: DataTypes.INTEGER(3),
    nilai_tugas: DataTypes.INTEGER(3),
    nilai_uas: DataTypes.INTEGER(3),
});

export default Nilai;