# CCAI Workshop Preflight Guide

A six-slide web presentation prepared for the Senior Technologist interview at Birkbeck’s Centre for Creative AI.

Plain HTML, CSS and JavaScript. No installation, build step or external libraries required.

## Folder structure

```text
birkbeck-ccai-presentation/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── presentation.js
├── assets/
│   └── images/
│       ├── met-drapery-training-set.png
│       └── lora-training-progression.png
├── .gitignore
├── .nojekyll
└── README.md
```

## Preview locally

Open `index.html` in a browser. Keep the `css`, `js` and `assets` folders beside it.

Alternatively, from this folder run:

```powershell
py -m http.server 8000
```

On macOS/Linux, use `python3 -m http.server 8000`. Open <http://localhost:8000>. Press Ctrl+C in the terminal to stop the server.

## Controls

- Select a section in the left navigation.
- Use the onscreen arrows, or the keyboard arrow keys, to change slides.
- Hover over or tap a diagnostic flowchart node to show its practical notes. Click elsewhere to dismiss them.
- Longer slides scroll vertically.

## Create a GitHub repository

1. Create an empty GitHub repository, for example `birkbeck-ccai-presentation`. Leave the options to add a README, licence and gitignore unchecked, because this folder already supplies the relevant files.
2. Open a terminal inside this extracted folder, where `index.html` is located.
3. Run the following, replacing `YOUR-USERNAME` with your GitHub username:

```powershell
git init
git add .
git commit -m "Add CCAI workshop presentation"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/birkbeck-ccai-presentation.git
git push -u origin main
```

You can also use GitHub Desktop: add this folder as a local repository, create the repository when prompted, commit the files, and publish it to GitHub.

## Publish with GitHub Pages

In the GitHub repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose **main** and **/ (root)**, then save. GitHub will display the published URL when deployment completes.

Commit the contents of this folder at the repository root, so `index.html` sits at the top level. All asset paths are relative, including when hosted under a repository subpath.

## Edit the presentation

- Slide text, SVG flowchart and tooltip content: `index.html`.
- Colours, typography, spacing and responsive layout: `css/styles.css`.
- Slide navigation and tooltip interactions: `js/presentation.js`.
- Contact sheet and LoRA progression image: `assets/images/`.

## Content and image credits

The wording, layout and interactions are preserved from the supplied page. Embedded PNG images have been extracted without re-encoding. The training-set contact sheet is credited in the presentation to the Metropolitan Museum of Art Open Access; the second image illustrates the Revolutionary Drapery LoRA experiment.

No new licence has been applied to the presentation or its third-party material.
