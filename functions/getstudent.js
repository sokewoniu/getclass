export async function onRequest(context) {
  try{
      const { d1 } = context.env;
      const json = await context.request.json();
      const stmt = d1.prepare("SELECT * FROM student where name=? and code=?").bind(json.name,json.code);
      const data = await stmt.first();
      return Response.json({ok:true,data})
  }
  catch(e)
  {
    return Response.json({error:e.message});
  }
}
