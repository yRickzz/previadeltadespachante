<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All business data (contact, hours, links, Google rating) lives in `src/config/site.ts`; services in `src/config/services.ts` — components read from there so content edits never touch layout code.
- The site is a single page (`src/routes/index.tsx`) with in-page anchor sections, as the client explicitly requested anchor navigation.
- Site sections are reusable components under `src/components/site/`; colors come only from semantic tokens in `src/styles.css`.
- `Logo.tsx` renders the official logo symbol (client file, background removed, served as a CDN asset); decorative shapes elsewhere are only inspired by it, never redraw the logo.
