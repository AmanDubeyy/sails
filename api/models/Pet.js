module.exports = {
  
    attributes: {
        id: { type: 'string', columnName: '_id' },
        created_at: {type: 'ref', columnType: 'datetime',autoCreatedAt: true},
        updated_at: {type: 'ref', columnType: 'datetime',autoUpdatedAt: true}
    },
    tableName: 'Pet'
};