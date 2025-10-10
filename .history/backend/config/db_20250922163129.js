require('dotenv').config();

// Importa a função createClient da biblioteca do Supabase
const { createClient } = require('@supabase/supabase-js');

// Pega a URL e a Key do Supabase das variáveis de ambiente
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Cria uma única instância do cliente Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Exporta o cliente para que possa ser usado em outros arquivos do projeto
module.exports = supabase;