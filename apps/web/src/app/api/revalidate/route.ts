// apps/web/src/app/api/revalidate/route.ts
import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { sanityRevalidateSecret } from "@/lib/sanity/env";

interface SanityWebhookBody {
  _type?: string;
  slug?: {
    current?: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    // Parse and validate the incoming webhook body from Sanity
    const { isValidSignature, body } = await parseBody<SanityWebhookBody>(
      req,
      sanityRevalidateSecret,
    );

    // Return 401 if the signature is invalid
    if (!isValidSignature) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 },
      );
    }

    // Return 400 if the document type is missing
    if (!body?._type) {
      return NextResponse.json(
        { message: "Bad Request: Missing _type" },
        { status: 400 },
      );
    }

    // Revalidate the root layout and global paths
    revalidatePath("/", "layout");

    // Revalidate specific paths based on the updated document type
    if (body._type === "project") {
      revalidatePath("/projects");
      if (body.slug?.current) {
        revalidatePath(`/projects/${body.slug.current}`);
      }
    }

    // Return success response indicating revalidation is complete
    return NextResponse.json({
      status: 200,
      revalidated: true,
      type: body._type,
      slug: body.slug?.current || null,
      now: Date.now(),
    });
  } catch (err) {
    // Catch and log any unexpected server errors during revalidation
    console.error("Revalidation error:", err);
    return NextResponse.json(
      { message: "Error revalidating", error: (err as Error).message },
      { status: 500 },
    );
  }
}
