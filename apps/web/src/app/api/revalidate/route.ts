// apps/web/src/app/api/revalidate/route.ts
// Receives webhook calls from Sanity and revalidates the matching cache tag
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { sanityRevalidateSecret } from "@/lib/sanity/env";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== sanityRevalidateSecret) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await request.json();
  const type = body?._type as string | undefined;

  if (!type) {
    return NextResponse.json(
      { message: "Missing _type in payload" },
      { status: 400 },
    );
  }

  revalidateTag(type, { expire: 0 });

  return NextResponse.json({ revalidated: true, type, now: Date.now() });
}
