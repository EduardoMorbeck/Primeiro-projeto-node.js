import { sql } from './db.js';

(async () => {
    try {
        /*await sql`DROP TABLE IF EXISTS videos`;
        console.log('Tabela apagada');*/

        await sql`
            CREATE TABLE IF NOT EXISTS videos (
                id TEXT PRIMARY KEY,
                title TEXT,
                description TEXT,
                duration INTEGER
            );
        `;
        console.log('Tabela criada com sucesso');
    } catch (err) {
        console.error('Erro ao criar a tabela:', err.message);
    }
})();

