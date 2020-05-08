import dbConnection from '../../config/dbConnection';

interface InsertTestReturn {
    name: string;
    email: string;
    password: string;
}

export async function insertTests(
    name: string,
    email: string,
    password: string,
): Promise<InsertTestReturn> {
    const conn = await dbConnection.connect();

    const query = `
        INSERT INTO tb_teste (name, email,password, fg_active)
        VALUES($1, $2, $3, true);`;

    const result = await conn.query(query, [name, email, password]);

    conn.release();

    return result.rows[0];
}

export async function getAllTests(): Promise<InsertTestReturn> {
    const conn = await dbConnection.connect();

    const query = `
        SELECT *
        FROM tb_teste
        WHERE fg_active = true`;

    const result = await conn.query(query);

    conn.release();

    return result.rows[0];
}
