// Importações convertidas para o padrão ES Modules
import path from 'path';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Variáveis de ambiente SUPABASE_URL e SUPABASE_KEY não foram encontradas.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Exportação convertida para o padrão ES Modules
export default supabase;