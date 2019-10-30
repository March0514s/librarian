
const tables = {
  incomeTable: {
    tableName: 'Income',
    tableRows: [
       {
        name: 'Salário',
        value: 0
      },
       {
        name: '13º Salário',
        value: 0
      },
       {
        name: 'Férias',
        value: 0
      },
       {
        name: 'Aluguéis',
        value: 0
      },
       {
        name: 'Resgate',
        value: 0
      },
       {
        name: 'Renda Extra',
        value: 0
      },
       {
        name: 'Outros',
        value: 0
      },
    ]
  }, 
  
  financialTable: {
    tableName: 'Financial Expenses',
    tableRows: [
       {
        name: 'Ações',
        value: 0
      },
       {
        name: 'LCI, LCA, CDB',
        value: 0
      },
       {
        name: 'Previdência Privada',
        value: 0
      },
       {
        name: 'Fundos de Investimentos',
        value: 0
      },
       {
        name: 'Tesouro Direto',
        value: 0
      },
       {
        name: 'Empréstimos (pagos)',
        value: 0
      },
       {
        name: 'Tarifas Bancárias',
        value: 0
      },
       {
        name: 'Outro',
        value: 0
      },
    ]
  }, 
  
  housingTable: {
    tableName: 'Housing Expenses',
    tableRows: [
       {
        name: 'Aluguel/Prestação',
        value: 0
      },
       {
        name: 'Condomínio',
        value: 0
      },
       {
        name: 'IPTU',
        value: 0
      },
       {
        name: 'Luz',
        value: 0
      },
       {
        name: 'Telefones',
        value: 0
      },
       {
        name: 'Internet',
        value: 0
      },
       {
        name: 'Gás',
        value: 0
      },
       {
        name: 'TV por assinatura/Netflix',
        value: 0
      },
       {
        name: 'Supermercado/feira/açougue/padaria',
        value: 0
      },
       {
        name: 'Empregados',
        value: 0
      },
       {
        name: 'Reforma/Consertos',
        value: 0
      },
       {
        name: 'Seguro de casa',
        value: 0
      },
       {
        name: 'Outros',
        value: 0
      },
    ]
  }, 
  
  healthTable: {
    tableName: 'Health Expenses',
    tableRows: [
       {
        name: 'Plano de Saúde',
        value: 0
      },
       {
        name: 'Médico',
        value: 0
      },
       {
        name: 'Dentista',
        value: 0
      },
       {
        name: 'Terapia',
        value: 0
      },
       {
        name: 'Medicamentos',
        value: 0
      },
       {
        name: 'Exames',
        value: 0
      },
       {
        name: 'Outros',
        value: 0
      },
    ]
  },
  
  transportTable: {
    tableName: 'Transport Expenses',
    tableRows: [
       {
        name: 'Ônibus/Metrô/Trem',
        value: 0
      },
       {
        name: 'Táxi/Uber',
        value: 0
      },
       {
        name: 'Prestação',
        value: 0
      },
       {
        name: 'Seguro de carro/moto',
        value: 0
      },
       {
        name: 'Combustível',
        value: 0
      },
       {
        name: 'Lavagens',
        value: 0
      },
       {
        name: 'IPVA/DPVAT/Licenciamento',
        value: 0
      },
       {
        name: 'Mecânico',
        value: 0
      },
       {
        name: 'Multas',
        value: 0
      },
       {
        name: 'Estacionamentos',
        value: 0
      },
       {
        name: 'Pedágios/Sem Parar',
        value: 0
      },
       {
        name: 'Outros',
        value: 0
      },
    ]
  },
  
  personalTable: {
    tableName: 'Personal Expenses',
    tableRows: [
       {
        name: 'Higiene Pessoal',
        value: 0
      },
       {
        name: 'Cosméticos',
        value: 0
      },
       {
        name: 'Cabelereiro',
        value: 0
      },
       {
        name: 'Vestuário',
        value: 0
      },
       {
        name: 'Lavanderia',
        value: 0
      },
       {
        name: 'Academia',
        value: 0
      },
       {
        name: 'Cursos',
        value: 0
      },
       {
        name: 'Presentes',
        value: 0
      },
       {
        name: 'Doações',
        value: 0
      },
       {
        name: 'Outros',
        value: 0
      },
    ]
  }, 
  
  dependantTable : {
    tableName: 'Dependant Expenses',
    tableRows: [
       {
        name: 'Escola/faculdade',
        value: 0
      },
       {
        name: 'Cursos extras',
        value: 0
      },
       {
        name: 'Material escolar',
        value: 0
      },
       {
        name: 'Esportes/Uniformes',
        value: 0
      },
       {
        name: 'Mesada',
        value: 0
      },
       {
        name: 'Passeios/Férias',
        value: 0
      },
       {
        name: 'Vestuário',
        value: 0
      },
       {
        name: 'Saúde/Medicamentos',
        value: 0
      },
       {
        name: 'Transporte',
        value: 0
      },
       {
        name: 'Outros',
        value: 0
      },
    ]
  }, 
  
  petTable : {
    tableName: 'Pet Expenses',
    tableRows: [
       {
        name: 'Petshop',
        value: 0
      },
       {
        name: 'Ração',
        value: 0
      },
       {
        name: 'Veterinário',
        value: 0
      },
       {
        name: 'Medicamentos',
        value: 0
      },
       {
        name: 'Vacinas',
        value: 0
      },
       {
        name: 'Outros',
        value: 0
      },
    ]
  }, 
  
  leisureTable : {
    tableName: 'Leisure Expenses',
    tableRows: [
       {
        name: 'Restaurantes',
        value: 0
      },
       {
        name: 'Café/Sorveteria',
        value: 0
      },
       {
        name: 'Bares/Boates',
        value: 0
      },
       {
        name: 'Livraria',
        value: 0
      },
       {
        name: 'Passagens',
        value: 0
      },
       {
        name: 'Hotéis',
        value: 0
      },
       {
        name: 'Passeios',
        value: 0
      },
       {
        name: 'Outros',
        value: 0
      },
    ]
  }
}

export default tables;