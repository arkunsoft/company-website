// apps/web/src/app/api/revalidate/route.ts
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { sanityRevalidateSecret } from "@/lib/sanity/env";

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(
      req,
      sanityRevalidateSecret,
    );

    if (!isValidSignature) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 },
      );
    }

    if (!body?._type) {
      return NextResponse.json(
        { message: "Bad Request: Missing _type" },
        { status: 400 },
      );
    }

    revalidateTag(body._type, { expire: 0 });

    return NextResponse.json({
      status: 200,
      revalidated: true,
      type: body._type,
      now: Date.now(),
    });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json(
      { message: "Error revalidating", error: (err as Error).message },
      { status: 500 },
    );
  }
}
