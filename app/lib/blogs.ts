export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: BlogSection[];
}

export interface BlogSection {
  type: "paragraph" | "heading" | "list" | "quote";
  text?: string;
  items?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-native-mobile-development-2025",
    title: "AI-Native Mobile Development: Building the Next Generation of Apps",
    excerpt:
      "The mobile landscape is shifting fast. Apps that don't leverage AI at their core are already falling behind. Here's how we think about building AI-native from day one.",
    date: "May 10, 2025",
    readTime: "6 min read",
    category: "Engineering",
    content: [
      {
        type: "paragraph",
        text: "Three years ago, adding AI to a mobile app meant bolting on a chatbot widget or wrapping a third-party API call. Today, that approach is a liability. Users expect intelligence to be woven into every interaction — not bolted on as a feature.",
      },
      {
        type: "heading",
        text: "What 'AI-Native' Actually Means",
      },
      {
        type: "paragraph",
        text: "AI-native doesn't mean your app uses AI. It means your app was designed with AI as a first-class citizen from the first line of code. The data model, the UX patterns, the latency budget, the fallback logic — all of it assumes intelligent behavior, not just rule-based flows.",
      },
      {
        type: "paragraph",
        text: "When we built GenlyAI, we started by asking: what does this experience look like if the AI is always right? Then we designed backwards from there, accounting for the real-world cases where it isn't.",
      },
      {
        type: "heading",
        text: "The Three Pillars We Build Around",
      },
      {
        type: "list",
        items: [
          "Latency as a feature — on-device inference where possible, streaming responses everywhere else. A 300ms perceived latency is a design target, not a network constraint.",
          "Context persistence — the model should know what the user did last Tuesday. Building robust, privacy-respecting memory layers is non-negotiable.",
          "Graceful degradation — when the model fails or the API is slow, the app still works. AI enhances the experience; it doesn't hold it hostage.",
        ],
      },
      {
        type: "heading",
        text: "On-Device vs. Cloud Inference",
      },
      {
        type: "paragraph",
        text: "The on-device vs. cloud debate is mostly settled for us: use both, deliberately. Small, quantized models handle real-time features like autocomplete and UI prediction. Larger cloud models handle reasoning-heavy tasks where latency tolerance is higher.",
      },
      {
        type: "quote",
        text: "The best AI experience is one the user never notices — it just feels like the app read their mind.",
      },
      {
        type: "paragraph",
        text: "Apple's Core ML and Google's ML Kit have matured significantly. Combined with frameworks like ExecuTorch and MediaPipe, you can run surprisingly capable models on mid-range devices. The key is choosing the right model for the job, not defaulting to the biggest one available.",
      },
      {
        type: "heading",
        text: "Shipping Is the Hard Part",
      },
      {
        type: "paragraph",
        text: "Every team we've talked to can prototype an AI feature in a week. Shipping it to production — with proper evals, fallback handling, cost controls, and App Store compliance — takes much longer. That gap is where most AI mobile projects stall.",
      },
      {
        type: "paragraph",
        text: "Our approach is to treat AI features like infrastructure: they need monitoring, versioning, and rollback plans. Model updates are deployments. Prompt changes go through review. Response quality is tracked like uptime.",
      },
      {
        type: "heading",
        text: "What's Next",
      },
      {
        type: "paragraph",
        text: "Multimodal is the next frontier for mobile. Camera, mic, and sensor data feeding into a unified reasoning layer will unlock app categories that don't exist yet. We're already building in this space and sharing what we learn along the way.",
      },
      {
        type: "paragraph",
        text: "If you're building an AI-native mobile product and want to compare notes — reach out. We're always happy to talk shop.",
      },
    ],
  },
  {
    slug: "design-language-ai-apps",
    title: "Designing for Uncertainty: UX Patterns for AI-Powered Apps",
    excerpt:
      "AI output is probabilistic. Most UX patterns were built for deterministic systems. Closing that gap is the most interesting design problem in mobile right now.",
    date: "April 28, 2025",
    readTime: "5 min read",
    category: "Design",
    content: [
      {
        type: "paragraph",
        text: "Every UX pattern you learned was built for systems that do exactly what they're told. AI doesn't work that way. It does approximately what it's told, most of the time. Designing for that gap is a fundamentally different problem.",
      },
      {
        type: "heading",
        text: "The Determinism Gap",
      },
      {
        type: "paragraph",
        text: "When a user taps a button, they expect the same thing to happen every time. When they prompt an AI, they get something different every time — and that's not a bug, it's the point. The design challenge is making that variability feel like personalization, not unpredictability.",
      },
      {
        type: "heading",
        text: "Patterns That Work",
      },
      {
        type: "list",
        items: [
          "Progressive disclosure of confidence — don't show a single answer; show the AI's reasoning or offer alternatives when confidence is low.",
          "Inline correction affordances — make it easy to tell the AI it got it wrong without breaking the flow. The correction is data; make it frictionless.",
          "Optimistic UI with graceful rollback — show the AI's best guess immediately, then update silently when the full response arrives.",
          "Loading states that teach — use latency as an opportunity to set expectations, not just show a spinner.",
        ],
      },
      {
        type: "quote",
        text: "The user doesn't think about the model. They think about the outcome. Design for the outcome.",
      },
      {
        type: "heading",
        text: "Streaming Changes Everything",
      },
      {
        type: "paragraph",
        text: "Streaming responses — showing text as it generates — dramatically improve perceived performance and change how users interact with AI output. They start reading before the response is done. They interrupt sooner. They correct mid-stream.",
      },
      {
        type: "paragraph",
        text: "Designing for streaming means your layouts need to handle dynamically growing content gracefully. It means your 'copy' button needs to know when the stream is done. It's a lot of small problems that add up to a very different implementation than a request-response model.",
      },
      {
        type: "heading",
        text: "Trust Is the Real Product",
      },
      {
        type: "paragraph",
        text: "Users don't adopt AI features because they're powerful. They adopt them because they trust them. Trust is built through consistency, transparency, and — crucially — knowing when to say 'I don't know.'",
      },
      {
        type: "paragraph",
        text: "Design systems for AI apps need a first-class concept of uncertainty. What does a low-confidence response look like? How does the app communicate that the AI is working with incomplete information? These aren't edge cases — they're core UX states.",
      },
    ],
  },
  {
    slug: "from-zero-to-app-store-90-days",
    title: "Zero to App Store in 90 Days: Our Build Process",
    excerpt:
      "Speed without chaos. How we structure projects so the first version ships fast without becoming a permanent liability.",
    date: "April 14, 2025",
    readTime: "7 min read",
    category: "Process",
    content: [
      {
        type: "paragraph",
        text: "Ninety days from kickoff to App Store approval sounds aggressive. For most agencies it is. For us it's the standard. Not because we cut corners, but because we've cut everything else.",
      },
      {
        type: "heading",
        text: "Why Speed Matters Beyond the Obvious",
      },
      {
        type: "paragraph",
        text: "The obvious reason to ship fast is getting to market. The less obvious reason is that real users break assumptions that no amount of internal testing will catch. The faster you're in production, the faster you're learning from reality instead of from yourselves.",
      },
      {
        type: "heading",
        text: "The 90-Day Structure",
      },
      {
        type: "list",
        items: [
          "Days 1–14 (Foundation): Tech stack locked, design system defined, core data model agreed on. No building until alignment is documented.",
          "Days 15–45 (Core Loop): The single most important user flow — whatever makes the app worth having — ships to TestFlight by day 45. Everything else is secondary.",
          "Days 46–70 (Expansion): Secondary features, polish, performance profiling. AI features go through eval harness before they touch production users.",
          "Days 71–85 (Hardening): Edge cases, accessibility audit, App Store assets, compliance review for AI-generated content.",
          "Days 86–90 (Submission): App Store submission, rejection response plan ready, marketing coordinated.",
        ],
      },
      {
        type: "heading",
        text: "What We Refuse to Rush",
      },
      {
        type: "paragraph",
        text: "Speed comes from ruthless prioritization, not from skipping steps. The things we never compress: security review, AI output evaluation, and accessibility. These are the things that bite you six months after launch, when fixing them costs ten times more.",
      },
      {
        type: "quote",
        text: "A fast v1 that needs a full rewrite in six months isn't fast. It's expensive twice.",
      },
      {
        type: "heading",
        text: "The Stack We Keep Coming Back To",
      },
      {
        type: "paragraph",
        text: "React Native with Expo for cross-platform when the brief demands it. Swift for iOS-first projects where performance and platform integration matter. Next.js for the web layer when there is one. We're opinionated about this — time spent evaluating frameworks is time not spent building.",
      },
      {
        type: "heading",
        text: "On AI Integration Timeline",
      },
      {
        type: "paragraph",
        text: "AI features that aren't load-bearing on day one ship after the core loop is stable. This isn't conservative — it's how you avoid the situation where a flaky model response breaks your entire onboarding flow and tanks your day-one retention.",
      },
      {
        type: "paragraph",
        text: "We've shipped four apps in the past year using this structure. The timeline held on all four. That's not luck — it's the same decisions made the same way, every time.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
