// Importa o módulo 'path' para lidar com caminhos de arquivos
const path = require('path');

// Diz ao dotenv para carregar o arquivo .env que está um nível acima do diretório atual
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;