export type CodeToken = {
  text: string;
  tone: "keyword" | "function" | "string" | "type" | "comment" | "plain" | "punct" | "number";
};

export const INTRO_CODE: CodeToken[] = [
  { text: "// codebaxh.studio — boot sequence\n", tone: "comment" },
  { text: "import", tone: "keyword" },
  { text: " { ", tone: "plain" },
  { text: "createStudio", tone: "function" },
  { text: ", ", tone: "plain" },
  { text: "ship", tone: "function" },
  { text: ", ", tone: "plain" },
  { text: "deploy", tone: "function" },
  { text: " } ", tone: "plain" },
  { text: "from", tone: "keyword" },
  { text: ' "@codebaxh/core"', tone: "string" },
  { text: ";\n", tone: "plain" },
  { text: "import", tone: "keyword" },
  { text: " ", tone: "plain" },
  { text: "type", tone: "keyword" },
  { text: " { ", tone: "plain" },
  { text: "ProjectConfig", tone: "type" },
  { text: " } ", tone: "plain" },
  { text: "from", tone: "keyword" },
  { text: ' "@codebaxh/types"', tone: "string" },
  { text: ";\n\n", tone: "plain" },
  { text: "const", tone: "keyword" },
  { text: " config: ", tone: "plain" },
  { text: "ProjectConfig", tone: "type" },
  { text: " = {\n", tone: "plain" },
  { text: "  name: ", tone: "plain" },
  { text: '"client-product"', tone: "string" },
  { text: ",\n", tone: "plain" },
  { text: "  stack: [", tone: "plain" },
  { text: '"Next.js"', tone: "string" },
  { text: ", ", tone: "plain" },
  { text: '"TypeScript"', tone: "string" },
  { text: ", ", tone: "plain" },
  { text: '"Node.js"', tone: "string" },
  { text: "],\n", tone: "plain" },
  { text: "  mode: ", tone: "plain" },
  { text: '"collaborative"', tone: "string" },
  { text: ",\n", tone: "plain" },
  { text: "};\n\n", tone: "plain" },
  { text: "export", tone: "keyword" },
  { text: " ", tone: "plain" },
  { text: "async", tone: "keyword" },
  { text: " ", tone: "plain" },
  { text: "function", tone: "keyword" },
  { text: " ", tone: "plain" },
  { text: "launch", tone: "function" },
  { text: "() {\n", tone: "plain" },
  { text: "  ", tone: "plain" },
  { text: "const", tone: "keyword" },
  { text: " studio = ", tone: "plain" },
  { text: "createStudio", tone: "function" },
  { text: "({ theme: ", tone: "plain" },
  { text: '"obsidian"', tone: "string" },
  { text: " });\n", tone: "plain" },
  { text: "  ", tone: "plain" },
  { text: "const", tone: "keyword" },
  { text: " app = ", tone: "plain" },
  { text: "await", tone: "keyword" },
  { text: " ", tone: "plain" },
  { text: "ship", tone: "function" },
  { text: "(config);\n", tone: "plain" },
  { text: "  ", tone: "plain" },
  { text: "await", tone: "keyword" },
  { text: " ", tone: "plain" },
  { text: "deploy", tone: "function" },
  { text: "({ env: ", tone: "plain" },
  { text: '"production"', tone: "string" },
  { text: " });\n", tone: "plain" },
  { text: "  ", tone: "plain" },
  { text: "return", tone: "keyword" },
  { text: " studio.", tone: "plain" },
  { text: "status", tone: "function" },
  { text: "(); ", tone: "plain" },
  { text: "// → live", tone: "comment" },
  { text: "\n", tone: "plain" },
  { text: "}", tone: "plain" },
];

export function flattenCodeTokens(tokens: CodeToken[]): { text: string; tone: CodeToken["tone"] }[] {
  const chars: { text: string; tone: CodeToken["tone"] }[] = [];

  for (const token of tokens) {
    for (const char of token.text) {
      chars.push({ text: char, tone: token.tone });
    }
  }

  return chars;
}
