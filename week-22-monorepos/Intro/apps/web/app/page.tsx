"use client"
import {TextInput} from "@repo/ui/text-input"
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  return (
    <div>
      <h2>chat app</h2> <br /> <br />

      <TextInput placeholder="type your message here..." type="text"/>
      <button
      onClick={() => router.push('/chat/123')}
      >send</button>
    </div>
  );
}
