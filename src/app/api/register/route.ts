import { API_BASE_URL } from "@/utils";

export async function GET(request: Request) {
  return new Response("Hello, Next.js From Register!");
}

const signUpApiCall = async (body: any) => {
  try {
    const res = await fetch(`${API_BASE_URL}/api-clients/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(await res.json());
    }
    return res.json();
  } catch (error) {
    return error;
  }
};

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const result = await signUpApiCall(body);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 404 });
  }
}
