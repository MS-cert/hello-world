import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const initialMessages: UIMessage[] = [
    {
      id: "welcome",
      role: "assistant",
      parts: [
        {
          type: "text",
          text: "Hi! I'm your **FreeCertHub guide**. Ask me for course recommendations (e.g. *\"free Python cert for beginners\"*), how to earn a certificate, or anything else about learning online.",
        },
      ],
    },
  ];

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    messages: initialMessages,
  });


  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (open) scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    void sendMessage({ text });
    setInput("");
  };

  const suggestions = [
    "Best free Python course?",
    "How do I add a cert to LinkedIn?",
    "Recommend a free cybersecurity path",
  ];

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-ink text-cream shadow-[0_8px_0_0_oklch(0.72_0.19_45)] transition hover:-translate-y-0.5"
      >
        {open ? (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        ) : (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-40 flex h-[min(600px,80vh)] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border-2 border-ink bg-cream shadow-[8px_8px_0_0_oklch(0.16_0.02_250)]">
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-ink bg-ink px-5 py-4 text-cream">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">Ask FreeCertHub</p>
              <h3 className="text-lg" style={{ fontFamily: "var(--font-display)" }}>
                Your learning guide
              </h3>
            </div>
            <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-lime" />
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-5">
            {messages.map((m) => {
              const text = m.parts
                .map((p) => (p.type === "text" ? p.text : ""))
                .join("");
              const isUser = m.role === "user";
              return (
                <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      isUser
                        ? "bg-flame text-white"
                        : "bg-white text-ink border border-ink/10"
                    }`}
                  >
                    {isUser ? (
                      <span className="whitespace-pre-wrap">{text}</span>
                    ) : (
                      <div className="prose prose-sm max-w-none prose-p:my-1 prose-ul:my-2 prose-li:my-0.5 prose-strong:text-ink prose-a:text-flame">
                        <ReactMarkdown>{text}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            {status === "submitted" && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink/60">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/40" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/40" style={{ animationDelay: "120ms" }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/40" style={{ animationDelay: "240ms" }} />
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 border-t border-ink/10 bg-white/50 px-4 py-3">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => void sendMessage({ text: s })}
                  className="rounded-full border border-ink/20 bg-white px-3 py-1 text-xs text-ink/80 transition hover:border-ink hover:bg-ink hover:text-cream"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Composer */}
          <form onSubmit={submit} className="flex items-center gap-2 border-t-2 border-ink bg-white px-3 py-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about any course…"
              disabled={busy}
              className="flex-1 rounded-full bg-cream px-4 py-2.5 text-sm outline-none placeholder:text-ink/40 focus:ring-2 focus:ring-flame/30"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="grid h-10 w-10 place-items-center rounded-full bg-ink text-cream transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
