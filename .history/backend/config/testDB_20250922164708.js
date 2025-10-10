const supabase = require('./db');

// Função de teste assíncrona
async function testConnection() {
  console.log('Tentando conectar ao Supabase...');

  try {
    // Tenta fazer uma consulta simples.
    // Substitua 'nome_da_sua_tabela' por um nome de tabela que realmente exista no seu banco.
    // Usamos .select() para buscar dados e .limit(1) para pegar apenas 1 registro,
    // o que é suficiente para testar a conexão.
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .limit();

    // Se houver um erro na consulta, o Supabase o retorna no objeto 'error'
    if (error) {
      console.error('Erro ao conectar ou consultar o Supabase:', error.message);
      return;
    }

    // Se a consulta for bem-sucedida
    console.log('Conexão com o Supabase bem sucedida');
    console.log('Dados recebidos :', data);

  } catch (err) {
    console.error('Falha ao tentar conectar:', err);
  }
}

testConnection();