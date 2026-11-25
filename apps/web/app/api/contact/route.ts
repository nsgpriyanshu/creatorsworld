import type { NextRequest } from "next/server";
import { handleContact } from "../../../features/contact/server/handle-contact";

export async function POST(request: NextRequest) {
  return handleContact(request);
}
