export async function onRequest(context) {
    const { d1 } = context.env;
    const params = await context.request.formData();
    const stmt = d1.prepare("SELECT * FROM student where name=?1 and code=?2").bind(params.get('name'),params.get('code'));
    const data = await stmt.first();
    let pretty = JSON.stringify({ok:true,data,}, null, 2);
    return new Response(pretty, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
}
