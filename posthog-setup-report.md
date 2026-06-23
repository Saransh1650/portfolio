<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into this Next.js 15 App Router portfolio. PostHog is initialised via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), with a reverse proxy configured in `next.config.ts` to route events through `/ingest`. Ten client-side events are captured across six components, covering every meaningful user interaction: hero CTAs, social links, resume downloads, project exploration, experience card links, the Ziro Market store links, and — most critically — contact form submissions and failures.

| Event | Description | File |
|---|---|---|
| `contact_form_submitted` | User submits the contact form and the message is sent successfully. | `src/components/Contact.tsx` |
| `contact_form_failed` | User submits the contact form but the message fails to send. | `src/components/Contact.tsx` |
| `contact_link_clicked` | User clicks a social/contact link (email, GitHub, LinkedIn, Twitter) in the contact section. | `src/components/Contact.tsx` |
| `resume_viewed` | User clicks the Resume button in the navigation (desktop or mobile) to view or download the resume. | `src/components/Navigation.tsx` |
| `hero_cta_clicked` | User clicks a call-to-action button in the hero section (Get in Touch or View Projects). | `src/components/Hero.tsx` |
| `hero_social_link_clicked` | User clicks a social profile link (GitHub, LinkedIn, Twitter, Medium, App Store) in the hero section. | `src/components/Hero.tsx` |
| `project_category_filtered` | User changes the active category filter in the Projects section. | `src/components/Projects.tsx` |
| `project_link_clicked` | User clicks a GitHub or Live link on a project card. | `src/components/Projects.tsx` |
| `experience_link_clicked` | User clicks an external link (company site, App Store, mobile app, web app, GitHub preview) on an experience card. | `src/components/Experience.tsx` |
| `ziro_market_store_link_clicked` | User clicks the Play Store or App Store link for Ziro Market in the Featured section. | `src/components/CurrentlyBuilding.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard**: [Analytics basics (wizard)](https://us.posthog.com/project/483217/dashboard/1751601)
- **Insight**: [Contact Form Submissions](https://us.posthog.com/project/483217/insights/zDMeF9Vh)
- **Insight**: [Resume Downloads](https://us.posthog.com/project/483217/insights/Rwqj3ZzU)
- **Insight**: [Project Link Clicks by Type](https://us.posthog.com/project/483217/insights/L9ME9U9H)
- **Insight**: [Hero CTA Clicks](https://us.posthog.com/project/483217/insights/dRczYXji)
- **Insight**: [Portfolio Conversion Funnel](https://us.posthog.com/project/483217/insights/7JO3kj1Z)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
