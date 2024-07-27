export async function onRequest(context) {
try{
    const { d1 } = context.env;
    const json = await context.request.json();
    const stmt = d1.prepare("SELECT * FROM student where name=?1 and code=?2").bind(json.name,json.code);
    const data = await stmt.first();
    let pretty = JSON.stringify({ok:true,data,}, null, 2);
    return new Response(pretty, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
}
catch(e)
{
let pretty = JSON.stringify({error:e.message}, null, 2);

return new Response(pretty, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });

}
}
