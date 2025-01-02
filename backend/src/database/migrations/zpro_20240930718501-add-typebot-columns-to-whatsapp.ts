import { QueryInterface, DataTypes } from 'sequelize';
import { Migration } from '../types/Migration';

const migration: Migration = {
  up: async (queryInterface: QueryInterface) => {
    const tableName = 'Whatsapps';
    const columnName = 'typebotUnknowMessage';

    await queryInterface.addColumn(tableName, columnName, {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    });
  },

  down: async (queryInterface: QueryInterface) => {
    const tableName = 'Whatsapps';
    const columnName = 'typebotUnknowMessage';

    await queryInterface.removeColumn(tableName, columnName);
  }
};

export default migration; 