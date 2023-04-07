export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}

async function signUp(
  body: { clientName: string; clientEmail: string } | null
) {
  console.log(body);
  if (body) {
    const res = await fetch(`https://simple-books-api.glitch.me/api-clients/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    if (!res.ok) {
      throw await res.json();
    }
    return await res.json();
  }
}

export async function POST(request: Request) {
  let body = await request.json();
  try {
    let result = await signUp(body);
    return new Response(JSON.stringify(result));
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 404,
    });
  }
}
