# Ramsey Makari — Developer Portfolio

A responsive, static developer portfolio built with HTML, CSS, and vanilla JavaScript. It is designed for GitHub Pages.

## Run locally

1. Download or clone this repository.
2. Open the folder in VS Code.
3. Use the Live Server extension to open `index.html`, or open the file directly in your browser.

No build step or package installation is required.

## Publish with GitHub Pages

1. Create a **public** repository on GitHub named `makari25.github.io` (the name must match your GitHub username exactly).
2. Put the contents of this folder in the repository root: `index.html`, `style.css`, `script.js`, and `README.md`.
3. Commit and push the files to the `main` branch.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then save.
7. Wait for the deployment to finish. Your site should be available at `https://makari25.github.io/`.

If you use a differently named repository, the address will usually be `https://makari25.github.io/REPOSITORY-NAME/`.

## Updating the learning timeline

Whenever you complete another technology or meaningful learning milestone:

1. Open `index.html`.
2. Find the `id="timeline"` section.
3. Copy one existing `<article class="timeline-item" ...>` entry.
4. Update the date, technology name, and topics.
5. Save, preview locally, then commit and push to GitHub.

Example entry:

```html
<article class="timeline-item" data-tech="Docker">
  <span class="timeline-date">11 Oct 2026</span>
  <div>
    <h3>Docker</h3>
    <p>Images, containers, volumes, networks, Dockerfiles</p>
  </div>
  <span class="completed">✓ Completed</span>
</article>
```

Use the date you actually completed the topics. If you're still learning, label it **In progress** instead of **Completed**. For a portfolio, add a project or small demo that proves the skill whenever possible.

## Before publishing

- Check the timeline dates and topics.
- Replace placeholder project descriptions with accurate details.
- Add live demo links when available.
- Test mobile layout and links.
- The WhatsApp contact button opens a chat through a `wa.me` link and does not print the phone number as page text. The number is still encoded in the link and is not secret from someone inspecting the page source.
- A public GitHub repository is recommended for a portfolio so employers can review the source. Never commit passwords, API keys, private customer data, or `.env` files.
