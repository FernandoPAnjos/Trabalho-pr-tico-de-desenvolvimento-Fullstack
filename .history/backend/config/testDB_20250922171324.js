import supabase from './db.js';

// Função de teste assíncrona
async function testConnection() {
  console.log('--- Iniciando teste de conexão ---');
  try {
    // Substitua 'nome_da_sua_tabela' por um nome de tabela real
    const { data, error } = await supabase
      .from('users') // <-- MUDE AQUI SE NECESSÁRIO
      .select('*')
      .limit(1);

    if (error) {
      // Se houver um erro específico do Supabase
      console.error('❌ Erro na consulta ao Supabase:', error.message);
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