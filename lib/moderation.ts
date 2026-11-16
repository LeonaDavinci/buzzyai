/**
 * Content-safety building blocks shared by the moderation API route.
 *
 * Waffo Pancake (our Merchant of Record) requires every AI-generation product
 * to screen user prompts before generation via its "Prompt Sift" endpoint,
 * and to maintain an actively updated blocklist. This module holds the local
 * blocklist (first line of defence + offline fallback) and the verdict type.
 *
 * Keep BLOCKLIST_VERSION bumped whenever terms are added or removed, and
 * review the list at least monthly so it counts as "actively updated".
 */

export type VerdictAction = "allow" | "review" | "block";

export type Verdict = {
  action: VerdictAction;
  reasonCode: string;
  matchedCategories: string[];
  requestId: string;
  /** Which layer made the decision: Waffo Prompt Sift or the local blocklist. */
  source: "waffo" | "local";
  semanticStatus?: string;
};

export const BLOCKLIST_VERSION = "2026-11-16.1";

/**
 * Actively updated blocklist. Word-boundary-safe where possible so ordinary
 * words (e.g. "kill the lights", " nude beach art history") are not over-blocked;
 * the Waffo semantic layer is the final authority when configured.
 * Categories mirror the six prohibited-generation categories in the AUP.
 */
export const BLOCKLIST: { category: string; patterns: RegExp[] }[] = [
  {
    category: "child-unsafe-content",
    patterns: [
      /\bcsam\b/i,
      /\bchild\s+(porn|sexual|nudity|abuse)\b/i,
      /\b(minor|underage|under.?age)\b.{0,30}\b(sex|nude|naked|porn)\b/i,
      /\b(sex|nude|naked|porn)\b.{0,30}\b(minor|underage|under.?age|child)\b/i,
    ],
  },
  {
    category: "deepfake-impersonation",
    patterns: [
      /\bdeepfake\b/i,
      /\bface.?swap\b/i,
      /\b(nudify|undress|nude.?generator)\b/i,
      /\b(intimate|kiss|hug)\b.{0,20}\b(scene|composite)\b.{0,30}\b(celebrity|public figure|politician|real person)\b/i,
      /\b(fake|fabricat)\w*\b.{0,20}\b(statement|speech|video)\b.{0,30}\b(celebrity|president|politician|public figure)\b/i,
    ],
  },
  {
    category: "violence-gore",
    patterns: [/\b(gore|gory|decapitat\w*|dismember\w*|torture porn)\b/i],
  },
  {
    category: "hate-speech",
    patterns: [/\b(hate speech|genocide|ethnic hatred|white supremac\w*)\b/i],
  },
  {
    category: "terrorism-wmd",
    patterns: [
      /\b(terroris\w*|extremis\w*)\b.{0,30}\b(attack|bomb|mass violence)\b/i,
      /\b(weapon|bomb|nuclear|chemical|biological)\b.{0,20}\b(instructions|how to|synthesis|make)\b/i,
    ],
  },
  {
    category: "copyright-trademark",
    patterns: [
      /\b(disney|pixar|marvel|pokemon|pikachu|mickey mouse|hello kitty|barbie|sonic|naruto|goku)\b/i,
      /\b(nike|adidas|gucci|louis vuitton|apple logo|iphone)\b.{0,20}\b(logo|replica|counterfeit)\b/i,
    ],
  },
];

/** Returns the categories a prompt locally matches (may be empty). */
export function matchLocalBlocklist(prompt: string): string[] {
  const hits: string[] = [];
  for (const group of BLOCKLIST) {
    if (group.patterns.some((re) => re.test(prompt))) hits.push(group.category);
  }
  return hits;
}
