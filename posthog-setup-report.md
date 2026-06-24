<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of your portfolio project. PostHog was already substantially instrumented — `posthog-js` was installed, `instrumentation-client.ts` was initialized with a reverse proxy, and 10 events were already captured across all major components. The wizard verified all existing events match best practices, set the correct environment variable values in `.env.local`, and added one missing event (`ziro_market_website_clicked`) to `src/components/CurrentlyBuilding.tsx` for the ziromarket.com website link.

| Event Name | Description | File |
|---|---|---|
| `hero_cta_clicked` | User clicks a CTA button in the hero section (Get in touch or View projects). | `src/components/Hero.tsx` |
| `hero_social_link_clicked` | User clicks a social media link (GitHub, LinkedIn, Twitter, Medium, App Store) in the hero section. | `src/components/Hero.tsx` |
| `resume_viewed` | User clicks the Resume link in desktop or mobile navigation. | `src/components/Navigation.tsx` |
| `experience_link_clicked` | User clicks a link on an experience card (company site, App Store, mobile app, web app, GitHub preview). | `src/components/Experience.tsx` |
| `ziro_market_store_link_clicked` | User clicks Play Store or App Store (TestFlight) link for Ziro Market. | `src/components/CurrentlyBuilding.tsx` |
| `ziro_market_website_clicked` | User clicks the ziromarket.com website link in the Currently Building section. | `src/components/CurrentlyBuilding.tsx` |
| `project_category_filtered` | User filters projects by clicking a category button (flutter, swift, react-native, blockchain, python). | `src/components/Projects.tsx` |
| `project_link_clicked` | User clicks a GitHub or live link on a project card. | `src/components/Projects.tsx` |
| `contact_form_submitted` | User successfully submits the contact form. | `src/components/Contact.tsx` |
| `contact_form_failed` | Contact form submission fails (email send error). | `src/components/Contact.tsx` |
| `contact_link_clicked` | User clicks a contact link (Email, GitHub, LinkedIn, Twitter) in the contact section. | `src/components/Contact.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard**: [Analytics basics (wizard)](https://us.posthog.com/project/483217/dashboard/1754907)
- **Insight**: [Hero CTA Clicks](https://us.posthog.com/project/483217/insights/GrkRvHp7)
- **Insight**: [Contact Form Success Rate](https://us.posthog.com/project/483217/insights/jeUPQZ8v)
- **Insight**: [Resume Downloads](https://us.posthog.com/project/483217/insights/q5swdpCV)
- **Insight**: [Project Category Exploration](https://us.posthog.com/project/483217/insights/U1MBp1m9)
- **Insight**: [External Link Engagement](https://us.posthog.com/project/483217/insights/Fy5WTZ8k)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any onboarding scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
