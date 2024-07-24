export async function onRequest(context) {
    const { d1 } = env;
    const stmt = d1.prepare("SELECT * FROM student LIMIT 3");
    const { results } = await stmt.all();
    return  Response.json({ok:true,data:results});
}
