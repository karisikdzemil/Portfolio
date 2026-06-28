export default function StackCodeBlock() {
  return (
    <div className="w-full max-w-md border-2 border-white/10 bg-ink-soft font-mono text-sm">
      <div className="flex items-center gap-2 border-b-2 border-white/10 px-4 py-2">
        <span className="h-2.5 w-2.5 border border-white/30" />
        <span className="h-2.5 w-2.5 border border-white/30" />
        <span className="h-2.5 w-2.5 bg-accent" />
        <span className="ml-2 text-xs text-white/40">stack.js</span>
      </div>
      <pre className="overflow-x-auto p-5 leading-relaxed text-white/80">
        <code>
          <span className="text-white/40">{"// what I build with, daily"}</span>{"\n"}
          <span className="text-accent">const</span> stack = {"{"}{"\n"}
          {"  "}frontend: [<span className="text-white">&quot;React&quot;</span>, <span className="text-white">&quot;Next.js&quot;</span>, <span className="text-white">&quot;TypeScript&quot;</span>],{"\n"}
          {"  "}mobile: [<span className="text-white">&quot;React Native&quot;</span>, <span className="text-white">&quot;Expo&quot;</span>],{"\n"}
          {"  "}backend: [<span className="text-white">&quot;Node.js&quot;</span>, <span className="text-white">&quot;Firebase&quot;</span>, <span className="text-white">&quot;Socket.io&quot;</span>],{"\n"}
          {"  "}learning: [<span className="text-white">&quot;PostgreSQL&quot;</span>, <span className="text-white">&quot;Prisma&quot;</span>, <span className="text-white">&quot;GraphQL&quot;</span>],{"\n"}
          {"}"};{"\n\n"}
          <span className="text-accent">export default</span> stack;
        </code>
      </pre>
    </div>
  );
}
