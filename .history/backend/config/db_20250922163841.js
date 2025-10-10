// Importa o módulo 'path' para lidar com caminhos de arquivos
const path = require('path');

// Diz ao dotenv para carregar o arquivo .env que está um nível acima do diretório atual
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Verificação para garantir que as variáveis foram carregadas
if (!supabaseUrl || !supabaseKey) {
  throw new Error("As variáveis de ambiente SUPABASE_URL e SUPABASE_KEY não foram encontradas. Verifique seu arquivo .env.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;