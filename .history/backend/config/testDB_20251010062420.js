import supabase from './db.js';

async function testConnection() {
  console.log('Iniciando teste de conexão');
  try {
    
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .limit();

    if (error) {
      console.error('Erro na consulta ao Supabase:', error.message);
      return;
    }

    // Se a consulta for bem-sucedida
    console.log('Conexão e consulta ao Supabase bem sucedida');
    console.log('Dados recebidos:', data);

  } catch (err) {
    // Captura qualquer outro erro inesperado (ex: de rede, etc.)
    console.error('Falha ao tentar executar o teste:', err);
  } finally {
    console.log('Teste de conexão finalizado');
  }
}

testConnection();