const supabase = require('./db');

// Função de teste assíncrona
async function testConnection() {
  console.log('Tentando conectar ao Supabase...');

  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .limit();

    if (error) {
      console.error('Erro ao conectar ou consultar o Supabase:', error.message);
      return;
    }
    console.log('Conexão com o Supabase bem sucedida');
    console.log('Dados recebidos :', data);

  } catch (err) {
    console.error('Falha ao tentar conectar:', err);
  }
}

testConnection();