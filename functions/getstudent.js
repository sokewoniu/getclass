export async function onRequest(context) {
    const { d1 } = env;
    const stmt = d1.prepare("SELECT * FROM student LIMIT 3");
    const { results } = await stmt.all();
    let pretty = JSON.stringify({ok:true,data:results}, null, 2);
    return new Response(pretty, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
}
